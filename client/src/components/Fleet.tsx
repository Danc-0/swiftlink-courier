import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bike, Truck, Package } from "lucide-react";
import fleetImage from "@assets/generated_images/Professional_delivery_motorcycle_fleet_48cd3389.png";

const fleetVehicles = [
  {
    image: fleetImage,
    type: "Delivery Motorcycles",
    capacity: "Up to 20kg",
    status: "Active",
    count: "5 Units",
    icon: Bike,
  },
  {
    icon: Truck,
    type: "Delivery Vans",
    capacity: "Up to 500kg",
    status: "Coming Soon",
    count: "Expanding",
    isPlaceholder: true,
  },
  {
    icon: Package,
    type: "Cargo Trucks",
    capacity: "Up to 2000kg",
    status: "Coming Soon",
    count: "Future Fleet",
    isPlaceholder: true,
  },
];

export function Fleet() {
  return (
    <section id="fleet" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Growing Fleet
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Starting with motorcycles, expanding to serve all your logistics needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetVehicles.map((vehicle, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-transform" data-testid={`card-fleet-${index}`}>
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                {vehicle.image ? (
                  <img
                    src={vehicle.image}
                    alt={vehicle.type}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <vehicle.icon className="h-24 w-24 text-muted-foreground/30" />
                  </div>
                )}
                <Badge
                  className="absolute top-4 right-4"
                  variant={vehicle.status === "Active" ? "default" : "secondary"}
                  data-testid={`badge-status-${index}`}
                >
                  {vehicle.status}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <vehicle.icon className="h-5 w-5 text-primary" />
                  {vehicle.type}
                </CardTitle>
                <CardDescription>
                  Capacity: {vehicle.capacity}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground font-mono">
                  {vehicle.count}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
