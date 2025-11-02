import express from 'express';
import bcrypt from 'bcrypt';
import Organization from '../models/Organization.js';

const router = express.Router();

// Hardcoded credentials for demo


router.post("/register", async (req, res) => {
  try {
    const {
      organizationName,
      licenseNumber,
      state,
      district,
      email,
      password,
      selectedPlan
    } = req.body;

    // Check if organization already exists
    const existingOrg = await Organization.findOne({
      $or: [{ email }, { licenseNumber }]
    });

    if (existingOrg) {
      return res.status(400).json({
        message: existingOrg.email === email ? 
          "Email already registered" : 
          "License number already registered"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new organization
    const organization = new Organization({
      organizationName,
      licenseNumber,
      state,
      district,
      email,
      password: hashedPassword,
      selectedPlan
    });

    await organization.save();

    res.status(201).json({
      message: "Registration successful! Our team will review your application.",
      organizationId: organization._id
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find organization by email
    const organization = await Organization.findOne({ email });

    // If no organization found
    if (!organization) {
      return res.status(401).json({ 
        error: "Organization not found",
        type: "NOT_FOUND",
        message: "Please request access first to use our platform."
      });
    }

    // Check password
    const validPassword = await bcrypt.compare(password, organization.password);
    if (!validPassword) {
      return res.status(401).json({ 
        error: "Invalid credentials",
        type: "INVALID_CREDENTIALS",
        message: "Invalid email or password."
      });
    }

    // Check organization status
    if (organization.status !== 'Active') {
      return res.status(403).json({
        error: "Account pending",
        type: "PENDING_APPROVAL",
        message: "Your application is under review. Our team will contact you shortly."
      });
    }

    // Login successful
    return res.json({ 
      ok: true, 
      user: { 
        email: organization.email,
        organizationName: organization.organizationName,
        status: organization.status
      }
    });

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;



