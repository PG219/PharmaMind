import Header from "@/components/Header";
import BlogPostCard from "@/components/BlogPostCard";
import Footer from "@/components/ui/Footer";
const blogPosts = [
  {
    title: "Graph Foundation Models Unlock New Drug Uses for 17,000+ Diseases",
    abstract: "In a groundbreaking 2024 study published in Nature Medicine, researchers introduced TxGNN — a graph foundation model trained on a medical knowledge graph covering over 17,000 diseases and nearly 8,000 approved drugs. The model achieved a 49.2% improvement in indication prediction and 35.1% improvement in contraindication prediction compared to eight prior methods.",
    source: "Nature Medicine",
    sourceUrl: "https://www.nature.com/nm/",
    whyItMatters: "This work is directly aligned with PharmaMind's mission of automating drug repurposing. Graph-based models like TxGNN show how vast biomedical knowledge can be leveraged for zero-shot predictions, i.e., suggesting new drug uses even for diseases without existing treatments.",
    keyTakeaways: [
      "Big data + knowledge graphs = scalable repurposing potential",
      "Model generates interpretable paths (\"why this drug might work for that disease\")",
      "Opens possibilities for diseases with very little prior research"
    ]
  },
  {
    title: "DeepDrug: AI + Expert Knowledge Combine to Repurpose Drugs for Alzheimer's Disease",
    abstract: "A 2025 study in Scientific Reports described the framework DeepDrug, which blends expert-guided domain knowledge (neuroinflammation, mitochondrial dysfunction, etc.) with graph neural network models to identify a 5-drug combination (Tofacitinib, Niraparib, Baricitinib, Empagliflozin, Doxercalciferol) aimed at treating Alzheimer's disease.",
    source: "Scientific Reports (Nature)",
    sourceUrl: "https://www.nature.com/srep/",
    whyItMatters: "It demonstrates how multi-drug combinations and AI can be used for challenging diseases. For PharmaMind's dashboard, this suggests the value of highlighting multi-agent therapies and synergy in repurposing.",
    keyTakeaways: [
      "Combining human domain expertise with AI improves outcomes",
      "Focus beyond single-drug repurposing: the combination approach",
      "Targeting high-need diseases (neurodegenerative) enhances societal impact"
    ]
  },
  {
    title: "Applications of Artificial Intelligence in Drug Repurposing: A 2025 Review",
    abstract: "A comprehensive review published in 2025 (Wiley) examined how AI algorithms are being used in drug repurposing—identifying strengths, use-cases, and limitations. The paper provides a broad overview of current AI techniques, hybrid methods (AI + molecular docking), and future directions in the space.",
    source: "Wiley Online Library",
    sourceUrl: "https://onlinelibrary.wiley.com/",
    whyItMatters: "This review supports PharmaMind's value proposition: that AI systems are mature enough to be applied in meaningful drug repurposing workflows. It also helps set expectations and transparency for your audience.",
    keyTakeaways: [
      "Hybrid AI approaches (AI + docking) are gaining traction",
      "Data quality, model interpretability, and validation remain key challenges",
      "Regulatory and clinical adoption is accelerating"
    ]
  },
  {
    title: "Knowledge Graphs & Explainable AI for Drug Repurposing",
    abstract: "A 2024 pre-print study introduced a methodology leveraging knowledge graphs along with explainable AI to identify drugs for rare diseases and under-studied conditions. It emphasises transparency in predictions and highlights the role of graph-driven reasoning in repurposing.",
    source: "bioRxiv",
    sourceUrl: "https://www.biorxiv.org/",
    whyItMatters: "Explainability is critical for pharma & regulatory stakeholders. This aligns with PharmaMind's interface goals of summarising and visualising results — e.g., showing why a drug is predicted for a given disease.",
    keyTakeaways: [
      "Transparent reasoning (why drug ↔️ disease) builds trust",
      "Rare diseases are viable repurposing targets",
      "Knowledge graph methods are especially suited for complex biomedical relationships"
    ]
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <br /><br />
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Latest Research</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-primary">
              Drug Repurposing Research
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI-powered drug repurposing. 
            Our curated research highlights showcase cutting-edge studies that align with PharmaMind's mission.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/10">
            <h2 className="text-2xl font-bold mb-3">Stay Updated</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Get the latest research insights delivered to your inbox
            </p>
            <div className="flex gap-3 flex-col sm:flex-row justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
          </div>
  );
};

export default Blog;