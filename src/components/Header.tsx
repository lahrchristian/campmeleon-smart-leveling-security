import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/logo-chameleon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#start" className="flex items-center gap-3 group">
            <img 
              src={logoImage} 
              alt="Campmeleon Logo" 
              className="h-10 sm:h-12 w-auto animate-pulse-glow"
            />
            <span className="font-display text-xl sm:text-2xl font-bold text-gradient glow-text">
              CAMPMELEON
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#start" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Start
            </a>
            <a 
              href="#features" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Features
            </a>
            <a 
              href="#kontakt" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Kontakt
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a 
                href="#start" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Start
              </a>
              <a 
                href="#features" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Features
              </a>
              <a 
                href="#kontakt" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Kontakt
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
