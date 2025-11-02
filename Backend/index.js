import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import drugData from "./sampleData.js";
import authRouter from "./routes/auth.js";
dotenv.config();
import axios from "axios";

const app = express();
const PORT = process.env.BACKEND_PORT ? Number(process.env.BACKEND_PORT) : 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pharmaMind";

app.use(cors({ 
  origin: ["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:8080", "http://localhost:3000"], 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);




async function start() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start Backend server:", err);
    process.exit(1);
  }
}

//api's to be created.
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});




//pos request for the drug to be searched.
app.get("/api/report/:drug", async(req, res) => {
  //fetch the drug data from the api.
try{
  const {drug} = req.params;
  const response=await axios.get(`https://pharmamind-2.onrender.com/report/${drug}`);
  
  res.json(response.data);
} catch(err){
  res.status(500).json({ error: err.message });
}
})
start();