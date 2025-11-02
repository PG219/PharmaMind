import { Brain, Database, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze molecular structures and predict drug interactions with unprecedented accuracy.",
  },
  {
    icon: Database,
    title: "Comprehensive Database",
    description: "Access to extensive pharmaceutical databases with millions of drug compounds and clinical trial data.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get results in minutes instead of weeks. Our optimized pipeline processes complex queries instantly.",
  },
  {
    icon: Shield,
    title: "Research-Grade Security",
    description: "Enterprise-level security ensures your sensitive research data remains confidential and protected.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-foreground">
            Why Choose <span className="text-primary">PharmaMind?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology meets pharmaceutical expertise to revolutionize drug discovery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
