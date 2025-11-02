import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Heart, Globe, Lightbulb, Users, TrendingUp, Database } from "lucide-react";

const About = () => {
  const impactPoints = [
    "Discover new therapeutic applications for existing drugs",
    "Analyze clinical, research, and patent trends using AI reasoning",
    "Accelerate drug discovery timelines and reduce R&D costs",
    "Make data-driven decisions with structured, AI-generated insights"
  ];

  const futureFeatures = [
    {
      icon: Database,
      title: "Knowledge Graphs",
      description: "Deep drug–gene–disease relationships"
    },
    {
      icon: TrendingUp,
      title: "Graph Neural Networks",
      description: "Predictive medicine and relationship analysis"
    },
    {
      icon: Sparkles,
      title: "Voice-based AI Assistants",
      description: "Faster collaboration for researchers"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Tools for researchers worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <br /> <br />
      <main className="container mx-auto px-4 py-12 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              🧩 About <span className="text-gradient">PharmaMind</span>
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            🚀 Empowering Healthcare Innovation with Artificial Intelligence
          </h2>
        </section>

        {/* Introduction */}
        <section>
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                PharmaMind is a cutting-edge AI-driven healthtech company dedicated to transforming the way the world discovers and develops medical treatments.
                Our mission is to harness the power of <span className="font-semibold text-primary">Agentic AI systems</span> to revolutionize drug repurposing research — unlocking new therapeutic uses for existing molecules faster and more efficiently than ever before.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mt-6">
                We combine biomedical expertise, advanced AI models, and intelligent automation to empower researchers, pharmaceutical organizations, and healthcare innovators across the globe.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Vision Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <Target className="w-10 h-10 text-primary" />
            <h2 className="text-4xl font-bold text-primary">Our Vision</h2>
          </div>
          <Card className="border-secondary/40 bg-gradient-to-r from-secondary/10 to-primary/10">
            <CardContent className="p-8 md:p-12">
              <blockquote className="text-2xl md:text-3xl font-semibold text-center mb-8 text-foreground">
                "To make biomedical discovery faster, smarter, and more accessible through autonomous AI systems."
              </blockquote>
              <p className="text-lg leading-relaxed text-center text-foreground/90">
                At PharmaMind, we believe that the next generation of medical breakthroughs will come not just from new inventions — but from <span className="font-semibold text-primary">new insights hidden within existing scientific data</span>.
                Our AI technology accelerates those discoveries, helping scientists focus on what truly matters: <span className="font-semibold text-secondary">saving lives</span>.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What We Do Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <Lightbulb className="w-10 h-10 text-secondary" />
            <h2 className="text-4xl font-bold text-primary">What We Do</h2>
          </div>
          <Card className="border-primary/30">
            <CardContent className="p-8 md:p-12 space-y-6">
              <p className="text-lg leading-relaxed">
                PharmaMind's flagship innovation — the <span className="font-bold text-primary">PharmaMind Agentic AI System</span> — automates the complex process of drug repurposing research.
              </p>
              <p className="text-lg leading-relaxed">
                It intelligently explores vast biomedical databases, scientific papers, patents, and clinical trials to identify new potential uses for known drugs and molecules.
              </p>
              <div className="bg-accent/30 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg leading-relaxed font-medium">
                  Within minutes, it compiles research-backed summaries, visual insights, and detailed reports — <span className="text-primary">reducing months of manual research to a single automated workflow</span>.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Impact Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <Globe className="w-10 h-10 text-primary" />
            <h2 className="text-4xl font-bold text-primary">Our Impact</h2>
          </div>
          <Card className="border-secondary/40 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg mb-6 text-center font-semibold">
                PharmaMind empowers researchers, biotech companies, and healthcare institutions to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {impactPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-primary/20 hover:shadow-lg transition-shadow">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <p className="text-base leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-secondary/10 rounded-lg border border-secondary/30">
                <p className="text-lg text-center leading-relaxed">
                  Our goal is to bridge the gap between AI innovation and real-world healthcare impact — <span className="font-semibold text-secondary">turning data into discovery, and discovery into better patient outcomes</span>.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Future Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <Sparkles className="w-10 h-10 text-secondary" />
            <h2 className="text-4xl font-bold text-primary">The Future of PharmaMind</h2>
          </div>
          <Card className="border-primary/30">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg mb-8 text-center">
                As we continue to evolve, PharmaMind aims to integrate:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {futureFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/20 hover:border-secondary/40 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-semibold text-primary">
                  We're building a future where AI doesn't just assist science — it accelerates it.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <Users className="w-10 h-10 text-secondary" />
            <h2 className="text-4xl font-bold text-primary">Our Team</h2>
          </div>
          <Card className="border-secondary/40 bg-gradient-to-r from-secondary/10 to-primary/10">
            <CardContent className="p-8 md:p-12 text-center">
              <p className="text-xl leading-relaxed">
                A passionate team of <span className="font-semibold text-primary">AI researchers, data scientists, and software engineers</span> driven by one goal —
                to redefine the boundaries of medical innovation through intelligent automation.
              </p>
              <p className="text-xl leading-relaxed mt-6 font-medium text-secondary">
                Together, we're building technology that empowers the scientific community to make discoveries that can change lives.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Summary Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <Heart className="w-10 h-10 text-primary" />
            <h2 className="text-4xl font-bold text-primary">In Summary</h2>
          </div>
          <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <p className="text-xl leading-relaxed">
                PharmaMind stands at the intersection of AI and biomedical innovation, delivering intelligent solutions that accelerate research, inspire discovery, and drive progress in global healthcare.
              </p>
              <div className="py-6">
                <p className="text-2xl md:text-3xl font-bold text-gradient">
                  We don't just build software —<br />
                  we build the future of medicine.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>©️ 2025 PharmaMind. Accelerating Drug Discovery with AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;