import { Pill, Mail, MapPin, Linkedin, Twitter, Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* --- Brand Info --- */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-soft">
                <Pill className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">PharmaMind</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              PharmaMind is an AI-driven healthcare research company focused on 
              accelerating **drug repurposing and biomedical innovation** through 
              automation, data intelligence, and multi-agent systems.
            </p>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* --- Contact --- */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                contact@pharmamind.ai
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Chennai, India
              </li>
            </ul>

            <div className="flex gap-4 mt-5">
              <a href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5 hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com" target="_blank" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5 hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com" target="_blank" className="hover:text-primary transition-colors">
                <Github className="w-5 h-5 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span>©️ {new Date().getFullYear()} PharmaMind.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* --- Credits --- */}
        <div className="mt-4 text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
          <span>Made with</span>
          <Heart className="w-3 h-3 text-red-500" />
          <span>by the PharmaMind Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;