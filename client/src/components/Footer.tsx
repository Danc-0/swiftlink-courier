import { MessageCircle } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiLinkedin } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    toast({
      title: "Subscribed!",
      description: "You'll receive our latest updates and offers.",
    });
    setEmail("");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-primary mb-4">
              Swift<span className="text-chart-2">Logistics</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Fast, reliable logistics solutions across Nairobi and beyond. 
              Building Kenya's delivery future.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://facebook.com", "_blank")}
                data-testid="button-footer-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://instagram.com", "_blank")}
                data-testid="button-footer-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://twitter.com", "_blank")}
                data-testid="button-footer-twitter"
              >
                <SiX className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://linkedin.com", "_blank")}
                data-testid="button-footer-linkedin"
              >
                <SiLinkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("fleet")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-fleet"
                >
                  Our Fleet
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to get delivery updates and special offers
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-newsletter"
              />
              <Button type="submit" data-testid="button-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Swift Logistics. Built with pride in Nairobi, Kenya.</p>
        </div>
      </div>
    </footer>
  );
}
