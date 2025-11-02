import {Button} from "@/components/ui/button";
import { Beaker, FileText, Scale, ArrowRight } from "lucide-react";

export const ActionButtons = ({cli}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <button onClick={()=>cli("/clinicalTrials")} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/80 p-8 text-left transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="relative">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
            <Beaker className="h-7 w-7 text-white" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Key Trials</h3>
          <p className="mb-4 text-sm text-white/80">
            Explore clinical trials and their outcomes
          </p>
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </button>

      <button onClick={()=>cli("/researchPapers")} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-secondary to-secondary/80 p-8 text-left transition-all hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="relative">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
            <FileText className="h-7 w-7 text-white" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Research Papers</h3>
          <p className="mb-4 text-sm text-white/80">
            Access comprehensive research literature
          </p>
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </button>

      <button onClick={()=>cli("/patents")} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent via-accent to-accent/80 p-8 text-left transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="relative">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
            <Scale className="h-7 w-7 text-white" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Patents</h3>
          <p className="mb-4 text-sm text-white/80">
            Review patent activity and innovations
          </p>
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </button>
    </div>
  );
};


export default ActionButtons;