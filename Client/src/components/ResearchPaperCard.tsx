import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Users } from "lucide-react";

interface ResearchPaperCardProps {
  id: string;
  title: string;
  year: number;
  authors: string[];
  url: string;
}

export const ResearchPaperCard = ({ id, title, year, authors, url }: ResearchPaperCardProps) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">{id}</span>
          </div>
          <Badge variant="secondary">
            Research Paper
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {year}
          </div>
          <div className="flex items-start gap-2 text-sm">
            <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
            <span className="text-muted-foreground">{authors.join(", ")}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};