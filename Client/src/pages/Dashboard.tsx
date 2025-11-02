import Header from "@/components/Header";
import MolecularBackground from "@/components/MolecularBackground";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/ui/Footer";
import { useState } from "react";


const Dashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

const search = async (term: string = searchTerm) => {
  if (!term.trim()) return;
  
  try {
    const res = await axios.get(`http://localhost:3001/api/report/${term}`);
    console.log(res.data);
    navigate(`/visual/${term}`, { state: { drugData: res.data} });
  } catch (error) {
    console.error("Error fetching drug data:", error);
  }
};

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <MolecularBackground />
      
      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="container mx-auto">
          {/* Company Name and Tagline */}
          <div className="mb-32 ml-8">
            <h1 className="text-5xl font-bold text-foreground mb-3">
              PharmaMind Labs
            </h1>
            <p className="text-lg text-muted-foreground">
              Accelerating drug discovery through artificial intelligence
            </p>
          </div>

          {/* Centered Search Section */}
          <div className="flex items-center justify-center min-h-[40vh]">
            <div className="w-full max-w-3xl">
              <div className="relative">
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && search()}
                  placeholder="Search for drugs, compounds, or research..."
                  className="w-full h-16 pl-6 pr-32 text-lg rounded-full border-2 border-border focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 transition-all"
                />
                <Button 
                  size="lg"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12" 
                  onClick={() => search()}
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
              
              {/* Quick Search Suggestions */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="text-sm text-muted-foreground">Popular searches:</span>
                {['Aspirin', 'Ibuprofen', 'Cancer Research', 'COVID-19'].map((term) => (
                  <button
                    key={term}
                    onClick={() => search(term)}
                    className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Dashboard;