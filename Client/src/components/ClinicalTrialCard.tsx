import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FlaskConical } from "lucide-react";

interface ClinicalTrialCardProps {
  id: string;
  title: string;
  phase: string;
  status: string;
  year: number;
  url: string;
}

export const ClinicalTrialCard = ({ id, title, phase, status, year, url }: ClinicalTrialCardProps) => {
  const getStatusVariant = (status: string) => {
    if (status === "Active") return "default";
    if (status === "Completed") return "secondary";
    return "outline";
  };

  return (
    <Card className="group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <FlaskConical className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">{id}</span>
          </div>
          <Badge 
            variant={getStatusVariant(status)}
            className={status === "Active" ? "bg-success hover:bg-success/90" : ""}
          >
            {status}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {year}
          </div>
          <Badge variant="outline" className="font-normal">
            {phase}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};