import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TrialsByDisease from "@/components/TrialsByDisease";
import PatentTrend from "@/components/PatentTrend";
import { MarketPotential } from "@/components/MarketPotential";
import MarketAnalysisCard from "@/components/MarketAnalysisCard";
import { ActionButtons } from "@/components/ActionButtons";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "@/components/ui/Footer";

const Visual = () => {

  const location = useLocation();
  const drugData = location.state?.drugData;
  console.log("Drug Data is : ");
  console.log(drugData);
  const navigate = useNavigate();
  let click_ = (route: any) => {
    navigate(route, { state: { drugData: drugData } });
  }
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <br /><br /> <br />
      <main className="container mx-auto px-4 py-8">
        {/* Drug Header Section */}
        <div className="mb-8">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">
            AI-Powered Drug Repurposing
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {drugData.drug_name}
          </h1>

          <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
            {drugData.summary.overall_insight}
          </p>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-lg">
            <CardHeader>1
              <CardTitle className="text-xl text-foreground">
                Clinical Trials by Disease
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Total: {drugData.clinical_trials.total_trials} trials
              </p>
            </CardHeader>
            <CardContent>
              <TrialsByDisease data={drugData.visualization_data.charts.trials_by_disease} />
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Patent Activity Trend
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Total: {drugData.patents.total_patents} patents
              </p>
            </CardHeader>
            <CardContent>
              <PatentTrend data={drugData.visualization_data.charts.patent_trend} />
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Market Size Potential
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                By indication (USD Billions)
              </p>
            </CardHeader>
            <CardContent>
              <MarketPotential data={drugData.visualization_data.charts.market_potential} />
            </CardContent>
          </Card>
        </div>

        {/* Market Analysis Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Market Analysis</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {drugData.market_analysis.top_indications.map((indication, index) => (
              <MarketAnalysisCard
                key={index}
                disease={indication.disease}
                market_size_usd_billion={indication.market_size_usd_billion}
                competition={indication.competition}
                potential_score={indication.potential_score}
              />
            ))}
          </div><br />
          <div className="market_summary">
            <section className="space-y-6">

              <Card className="border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-2">Summary</h2>
                  <p className="text-lg leading-relaxed text-foreground">
                    {drugData.market_analysis.summary}
                  </p>
                </CardContent>
              </Card>

            </section>
          </div>
        </section>


        {/* Action Buttons */}
        {/* pass click handler, cast props to any to satisfy TS when ActionButtons has no typed props */}
        <ActionButtons {...({ cli: click_ } as any)} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Visual;