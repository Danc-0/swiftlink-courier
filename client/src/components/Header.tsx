import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/254700000000?text=Hello! I'd like to inquire about your delivery services.", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">
              Swift<span className="text-chart-2">Logistics</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("fleet")}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors"
              data-testid="link-fleet"
            >
              Fleet
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              onClick={handleWhatsApp}
              className="hidden md:flex gap-2"
              data-testid="button-whatsapp-header"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium hover-elevate px-3 py-2 rounded-md text-left"
                data-testid="link-services-mobile"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("fleet")}
                className="text-sm font-medium hover-elevate px-3 py-2 rounded-md text-left"
                data-testid="link-fleet-mobile"
              >
                Fleet
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium hover-elevate px-3 py-2 rounded-md text-left"
                data-testid="link-about-mobile"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover-elevate px-3 py-2 rounded-md text-left"
                data-testid="link-contact-mobile"
              >
                Contact
              </button>
              <Button
                onClick={handleWhatsApp}
                className="gap-2 mt-2"
                data-testid="button-whatsapp-mobile"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
