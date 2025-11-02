import { Pill, Home, Info, BookOpen, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-soft">
              <Pill className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">PharmaMind</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="/" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Home</span>
            </a>
            <a 
              href="/about" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <Info className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium">About</span>
            </a>
            <a 
              href="/blog" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Blog</span>
            </a>
          </nav>

          {/* Language Selector & Auth */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Eng</span>
            </button>
            <a href="/login"><Button 
              className="rounded-full px-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-soft"
            >
              Login / Register
            </Button></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
