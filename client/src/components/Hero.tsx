import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/generated_images/Nairobi_motorcycle_courier_hero_5c472d66.png";

export function Hero() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/254700000000?text=Hello! I'd like to get a quote for delivery services.", "_blank");
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 dark:from-background/98 dark:via-background/90 dark:to-background/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center md:text-left">
        <Badge className="mb-6 text-sm font-mono" data-testid="badge-deliveries">
          500+ Deliveries Completed
        </Badge>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Fast & Reliable
          <br />
          <span className="text-primary">Logistics Solutions</span>
          <br />
          Across Nairobi
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          From same-day deliveries to scheduled logistics, we provide professional 
          courier services that keep your business moving. Starting with motorcycles, 
          growing to serve all your delivery needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button 
            size="lg" 
            className="gap-2 text-base" 
            onClick={handleWhatsApp}
            data-testid="button-get-quote-hero"
          >
            <MessageCircle className="h-5 w-5" />
            Get Instant Quote
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 text-base backdrop-blur-sm bg-background/50" 
            onClick={scrollToContact}
            data-testid="button-learn-more-hero"
          >
            Learn More
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
