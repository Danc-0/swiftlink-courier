import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import founderImage from "@assets/generated_images/Company_founder_professional_portrait_0a8b12e1.png";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About Swift Link Courier
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Built on the vision of making logistics accessible to everyone in Nairobi
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={founderImage}
              alt="Company Founder"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Our Story</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Swift Link Courier was born from a simple observation: Nairobi's vibrant economy needed 
              faster, more reliable delivery solutions. Starting with a small fleet of motorcycles, 
              we set out to provide affordable, professional courier services to businesses and 
              individuals across the city.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              What drives us is the opportunity to empower local businesses and make everyday life 
              easier for Nairobi residents. Every package we deliver represents someone's important 
              purchase, a business transaction, or a meaningful connection between people.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We're not just about motorcycles. As we grow, we're expanding our fleet to include 
              vans and trucks, ensuring we can handle deliveries of any size. Our commitment to 
              excellence, technology-driven tracking, and customer-first approach sets us apart 
              in Kenya's logistics landscape.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card data-testid="card-mission">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide fast, reliable, and affordable logistics solutions that empower 
                businesses and individuals across Kenya.
              </p>
            </CardContent>
          </Card>
          
          <Card data-testid="card-vision">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-md bg-chart-2/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-chart-2" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become East Africa's most trusted logistics partner, known for innovation, 
                reliability, and exceptional customer service.
              </p>
            </CardContent>
          </Card>
          
          <Card data-testid="card-values">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-md bg-chart-3/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-chart-3" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Customer-first mindset, integrity in every delivery, continuous innovation, 
                and building lasting relationships with our community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
