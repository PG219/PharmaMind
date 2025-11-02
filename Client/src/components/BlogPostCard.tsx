import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Microscope } from "lucide-react";

interface BlogPostCardProps {
  title: string;
  abstract: string;
  source: string;
  sourceUrl: string;
  whyItMatters: string;
  keyTakeaways: string[];
  icon?: string;
}

const BlogPostCard = ({
  title,
  abstract,
  source,
  sourceUrl,
  whyItMatters,
  keyTakeaways,
  icon = "🔬"
}: BlogPostCardProps) => {
  return (
    <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-border/50 overflow-hidden h-full flex flex-col">
      <div className="h-2 bg-primary" />
      
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Microscope className="w-5 h-5 text-primary" />
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              Research
            </Badge>
          </div>
        </div>
        
        <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        
        <CardDescription className="text-sm">
          <strong className="text-foreground">Abstract:</strong> {abstract}
        </CardDescription>
        
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-primary hover:text-secondary transition-colors w-fit"
        >
          <ExternalLink className="w-3 h-3" />
          {source}
        </a>
      </CardHeader>

      <CardContent className="space-y-4 flex-1 flex flex-col">
        <div className="space-y-2 flex-1">
          <h4 className="font-semibold text-sm text-primary">Why it matters for PharmaMind:</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{whyItMatters}</p>
        </div>

        <div className="space-y-3 pt-4 border-t border-border/50">
          <h4 className="font-semibold text-sm flex items-center gap-2">
            <span className="w-1 h-4 bg-primary rounded-full" />
            Key Takeaways:
          </h4>
          <ul className="space-y-2">
            {keyTakeaways.map((takeaway, index) => (
              <li key={index} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="flex-1">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;