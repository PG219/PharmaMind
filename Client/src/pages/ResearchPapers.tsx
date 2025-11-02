import Header from "@/components/Header";   
import { ResearchPaperCard } from "@/components/ResearchPaperCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { drugData } from "@/data/sampleData";
import { BookOpen, FileText, Sparkles, Tag } from "lucide-react";
import { useLocation } from "react-router-dom";
const ResearchPapers = () => {
const location = useLocation();
    const drugData = location.state?.drugData;
    console.log("Drug Data is : ");
    console.log(drugData);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8 space-y-12">
        {/* Hero Section with Total Papers */}
        <section className="text-center space-y-4">
          <Badge className="bg-secondary text-secondary-foreground mb-2">
            <Sparkles className="h-3 w-3 mr-1" />
            AI-Powered Drug Repurposing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            {drugData.drug_name} Research Papers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {drugData.summary.overall_insight}
          </p>
          
          <div className="flex justify-center pt-6">
            <Card className="w-full max-w-sm bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/20">
              <CardContent className="pt-6 text-center">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-6xl font-bold text-primary mb-2">
                  {drugData.research_papers.total_papers}
                </div>
                <p className="text-lg font-medium text-muted-foreground">
                  Total Research Papers
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Topics Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Tag className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Key Research Topics</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {drugData.research_papers.key_topics.map((topic, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="text-base px-6 py-3 border-2 hover:bg-primary/10 transition-colors"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </section>

        {/* Top Research Papers Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Top Research Papers</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {drugData.research_papers.top_papers.map((paper, index) => (
              <ResearchPaperCard
                key={index}
                id={`Paper ${index + 1}`}
                title={paper.title}
                year={paper.year}
                authors={paper.authors}
                url={paper.url}
              />
            ))}
          </div>
        </section>

        {/* Summary Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Research Summary</h2>
          <Card className="border-2">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-foreground">
                {drugData.research_papers.summary}
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

export default ResearchPapers;