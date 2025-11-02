import { TrendingUp, DollarSign, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MarketAnalysisCardProps {
  disease: string;
  market_size_usd_billion: number;
  competition: string;
  potential_score: number;
}

export const MarketAnalysisCard = ({
  disease,
  market_size_usd_billion,
  competition,
  potential_score
}: MarketAnalysisCardProps) => {
  const getCompetitionColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "low":
        return "text-success";
      case "medium":
        return "text-accent";
      case "high":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className="transition-all hover:shadow-lg">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">{disease}</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <DollarSign className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground">Market Size</p>
              <p className="text-sm font-semibold text-foreground">${market_size_usd_billion}B USD</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Users className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground">Competition</p>
              <p className={`text-sm font-semibold ${getCompetitionColor(competition)}`}>
                {competition}
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Target className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground">Potential Score</p>
              <p className="text-sm font-semibold text-success">{(potential_score * 10).toFixed(1)}/10</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground">Trend</p>
              <p className="text-sm font-semibold text-primary">Growing</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


export default MarketAnalysisCard;