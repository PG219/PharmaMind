import Header from "@/components/Header";   
import { ClinicalTrialCard } from "@/components/ClinicalTrialCard";
import { TrialsByDiseaseChart } from "@/components/TrialsByDiseaseChart";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { drugData } from "@/data/sampleData";
import { FlaskConical, FileText, Sparkles } from "lucide-react";

import { useLocation } from "react-router-dom";

const ClinicalTrials = () => {
    const location = useLocation();
        const drugData = location.state?.drugData;
        console.log("Drug Data is : ");
        console.log(drugData);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <br /><br /> <br />
      
      <main className="container py-8 space-y-12">
        {/* Hero Section with Total Trials */}
        <section className="text-center space-y-4">
          <Badge className="bg-secondary text-secondary-foreground mb-2">
            <Sparkles className="h-3 w-3 mr-1" />
            AI-Powered Drug Repurposing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            {drugData.drug_name} Clinical Trials
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {drugData.summary.overall_insight}
          </p>
          
          <div className="flex justify-center pt-6">
            <Card className="w-full max-w-sm bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/20">
              <CardContent className="pt-6 text-center">
                <FlaskConical className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-6xl font-bold text-primary mb-2">
                  {drugData.clinical_trials.total_trials}
                </div>
                <p className="text-lg font-medium text-muted-foreground">
                  Total Clinical Trials
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Trials by Disease Bar Chart */}
        <section className="space-y-6">
          <TrialsByDiseaseChart data={drugData.clinical_trials.trials_by_disease} />
        </section>

        {/* Key Clinical Trials Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Key Clinical Trials</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {drugData.clinical_trials.key_trials.map((trial, index) => (
              <ClinicalTrialCard
                key={index}
                id={`Trial ${index + 1}`}
                title={trial.title}
                phase={trial.phase}
                status={trial.status}
                year={trial.year}
                url={trial.url}
              />
            ))}
          </div>
        </section>

        {/* Summary Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Clinical Trials Summary</h2>
          <Card className="border-2">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-foreground">
                {drugData.clinical_trials.summary}
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

export default ClinicalTrials;