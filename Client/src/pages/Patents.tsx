import Header  from "@/components/Header";
import { PatentCard } from "@/components/PatentCard";
import { PatentTrendChart } from "@/components/PatentTrendChart";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { drugData } from "@/data/sampleData";
import { useLocation } from "react-router-dom";
import { TrendingUp, FileText, Sparkles } from "lucide-react";

const Patents = () => {

    const location = useLocation();
    const drugData = location.state?.drugData;
    console.log("Drug Data is : ");
    console.log(drugData);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8 space-y-12">
        {/* Hero Section with Total Patents */}
        <section className="text-center space-y-4">
          <Badge className="bg-secondary text-secondary-foreground mb-2">
            <Sparkles className="h-3 w-3 mr-1" />
            AI-Powered Drug Repurposing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            {drugData.drug_name} Repurposing Analysis
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {drugData.summary.overall_insight}
          </p>
          
          <div className="flex justify-center pt-6">
            <Card className="w-full max-w-sm bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/20">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-6xl font-bold text-primary mb-2">
                  {drugData.patents.total_patents}
                </div>
                <p className="text-lg font-medium text-muted-foreground">
                  Total Patents
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Patents Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Recent Patents</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {drugData.patents.recent_patents.map((patent, index) => (
              <PatentCard
                key={index}
                id={`Patent ${index + 1}`}
                title={patent.title}
                date={patent.year.toString()}
                status={patent.applicant}
                category={patent.applicant}
              />
            ))}
          </div>
        </section>

        {/* Patent Trend Chart */}
        <section className="space-y-6">
          <PatentTrendChart data={drugData.patents.patent_trend} />
        </section>

        {/* Summary Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Patent Summary</h2>
          <Card className="border-2">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-foreground">
                {drugData.patents.summary}
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>©️ 2024 PharmaMind. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Patents;