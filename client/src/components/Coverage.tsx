import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const activeZones = [
  "Nairobi CBD", "Westlands", "Kilimani", "Parklands",
  "Upperhill", "Lavington", "Karen", "Ngong Road",
  "Kileleshwa", "Hurlingham", "South B", "South C",
  "Langata", "Woodley", "Dagoretti", "Kangemi",
  "Eastleigh", "Kasarani", "Roysambu", "Ruaraka",
  "Embakasi", "Donholm", "Buruburu", "Umoja",
  "Kayole", "Dandora", "Githurai", "Kahawa",
  "Zimmerman", "Muthaiga", "Spring Valley", "Ridgeways",
  "Runda", "Gigiri", "Rosslyn", "Chiromo", "Mlolongo", "Syokimau",
  "Athi River", "Thika Road Mall (TRM)", "Juja", "Kiambu", "Thika", 
  "Limuru", "Ruai", "Koma Rock", "Mavoko", "Kajiado", "Ngong", 
  "Ongata Rongai", "Kitengela", "Machakos", "Mombasa Road", "JKIA/Wilson Airport"
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
            Serving neighborhoods across Nairobi and it's environs with reliable delivery services
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-lg overflow-hidden shadow-md h-[500px]">
            <iframe
              title="Nairobi Coverage Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35846418898!2d36.70730744863281!3d-1.3028618999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1704825600000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="map-nairobi"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-chart-2" />
              Active Delivery Zones
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
        </div>
      </div>
    </section>
  );
}
