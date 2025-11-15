import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ChevronDown, Globe } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Appmax" className="h-8" />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Soluções
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Empresa
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Taxas
            </a>

            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Ajuda
            </a>

            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Globe className="h-4 w-4" />
              <span className="text-xs">🇧🇷</span>
            </button>

            <Button variant="ghost" className="hidden md:inline-flex">
              Entrar
            </Button>

            <Button className="bg-primary hover:bg-primary/90">
              CRIE SUA CONTA
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
