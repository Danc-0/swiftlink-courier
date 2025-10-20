import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import coverageMap from "@assets/generated_images/Nairobi_coverage_area_map_118bfe8b.png";

const activeZones = [
  "Nairobi CBD", "Westlands", "Kilimani", "Parklands",
  "Upperhill", "Lavington", "Karen", "Ngong Road",
  "Kileleshwa", "Hurlingham", "South B", "South C"
];

const comingSoon = [
  "Kasarani", "Embakasi", "Ruiru", "Thika Road"
];

export function Coverage() {
  return (
    <section id="coverage" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Coverage Area
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Serving major Nairobi neighborhoods with plans to expand across Kenya
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="overflow-hidden p-0">
            <img
              src={coverageMap}
              alt="Nairobi Coverage Map"
              className="w-full h-auto"
            />
          </Card>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-chart-2" />
                Active Zones
              </h3>
              <div className="flex flex-wrap gap-2">
                {activeZones.map((zone, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm"
                    data-testid={`badge-zone-${index}`}
                  >
                    <MapPin className="h-3 w-3 mr-1" />
                    {zone}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary/50 border-2 border-primary" />
                Coming Soon
              </h3>
              <div className="flex flex-wrap gap-2">
                {comingSoon.map((zone, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm"
                    data-testid={`badge-coming-${index}`}
                  >
                    {zone}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
