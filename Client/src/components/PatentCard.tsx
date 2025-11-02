import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText } from "lucide-react";

interface PatentCardProps {
  id: string;
  title: string;
  date: string;
  status: string;
  category: string;
}

export const PatentCard = ({ id, title, date, status, category }: PatentCardProps) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">{id}</span>
          </div>
          <Badge 
            variant={status === "Granted" ? "default" : "secondary"}
            className={status === "Granted" ? "bg-success hover:bg-success/90" : ""}
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
            {new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </div>
          <Badge variant="outline" className="font-normal">
            {category}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};