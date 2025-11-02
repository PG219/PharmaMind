import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, AlertCircle, Home, Mail, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/ui/Footer";
const DrugNotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const drugName = searchParams.get("drug") || "Unknown Drug";

  useEffect(() => {
    console.log("Drug not found:", drugName);
  }, [drugName]);

  return (
    <div className="min-h-screen bg-background">
        <Header/>
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">PharmaMind</h1>
          <Button variant="outline" onClick={() => navigate("/")}>
            Go Home
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mb-6">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Drug Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            We couldn't find any information for:
          </p>
          <p className="text-2xl font-semibold text-primary mb-8">
            "{drugName}"
          </p>
        </div>

        <Card className="p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Search className="w-5 h-5 text-primary" />
            What you can do next:
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Check your spelling</h3>
                <p className="text-sm text-muted-foreground">
                  Make sure the drug name is spelled correctly. Try using the generic or brand name.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Try a different search term</h3>
                <p className="text-sm text-muted-foreground">
                  Search using the active ingredient name or alternative brand names.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Browse our database</h3>
                <p className="text-sm text-muted-foreground">
                  Explore our complete drug database to find similar medications.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/dashboard")}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Home className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Go to Dashboard</h3>
            <p className="text-sm text-muted-foreground">
              Return to your main dashboard
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">New Search</h3>
            <p className="text-sm text-muted-foreground">
              Start a fresh drug search
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Browse Database</h3>
            <p className="text-sm text-muted-foreground">
              View all available drugs
            </p>
          </Card>
        </div>

        <Card className="p-6 bg-accent/50">
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you believe this drug should be in our database or need assistance, please contact our support team.
              </p>
              <Button variant="outline" size="sm">
                Contact Support
              </Button>
            </div>
          </div>
        </Card>
      </main>
        <Footer/>
    </div>
  );
};

export default DrugNotFound;