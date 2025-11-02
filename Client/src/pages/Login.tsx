import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { Building2, Mail, Lock, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import Footer from "@/components/ui/Footer";
import axios from "axios";

// Sample login credentials for demo.


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        { email, password },
        { 
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.ok) {
        toast.success("Login successful! Welcome to PharmaMind.", {
          description: `Welcome back, ${response.data.user.organizationName}!`
        });
        setTimeout(() => navigate("/dashboard"), 1500);
      }
    } catch (err: any) {
      console.error("Login failed:", err);
      const errorType = err.response?.data?.type;
      const errorMessage = err.response?.data?.message;

      switch (errorType) {
        case "NOT_FOUND":
          toast.error("Organization not registered", {
            description: errorMessage,
            action: {
              label: "Request Access",
              onClick: () => navigate("/subscribe")
            }
          });
          break;
        
        case "PENDING_APPROVAL":
          toast.info("Application under review", {
            description: errorMessage
          });
          break;
        
        case "INVALID_CREDENTIALS":
          toast.error("Login failed", {
            description: errorMessage
          });
          break;
        
        default:
          toast.error("An error occurred", {
            description: "Please try again later."
          });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <Header />
      
      <div className="container mx-auto px-6 py-20 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Creative Info Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <Building2 className="w-4 h-4" />
                Company Portal
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Welcome to{" "}
                <span className="text-primary">PharmaMind</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Access your company dashboard to explore AI-powered drug repurposing insights, 
                manage research projects, and collaborate with your team.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card shadow-soft hover:shadow-card transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Advanced Research Tools</h3>
                  <p className="text-sm text-muted-foreground">Access cutting-edge AI models for drug discovery</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card shadow-soft hover:shadow-card transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Real-time Analytics</h3>
                  <p className="text-sm text-muted-foreground">Monitor your research progress with live dashboards</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card shadow-soft hover:shadow-card transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Team Collaboration</h3>
                  <p className="text-sm text-muted-foreground">Share findings and work together seamlessly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="shadow-card border-2">
              <CardHeader className="space-y-3">
                <CardTitle className="text-3xl">Company Login</CardTitle>
                <CardDescription className="text-base">
                  Enter your company credentials to access the platform
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold">
                      Company Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="company@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12 text-base border-2 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-base font-semibold">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 h-12 text-base border-2 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-2 border-input" />
                      <span className="text-muted-foreground">Remember me</span>
                    </label>
                    <a href="#" className="text-primary hover:underline font-medium">
                      Forgot password?
                    </a>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-12 text-base rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-soft group"
                  >
                    Sign In to Dashboard
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-card text-muted-foreground">New to PharmaMind?</span>
                    </div>
                  </div>

                  <Button 
                    type="button"
                    variant="outline" 
                    size="lg" 
                    className="w-full h-12 text-base rounded-full border-2 hover:bg-muted"
                    onClick={() => navigate("/subscribe")}
                  >
                    Request Company Access
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="mt-4 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-primary">🔒</span>
                <span>Secure Login</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">⚡</span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <Footer/>
    </div>
  );
};

export default Login;
