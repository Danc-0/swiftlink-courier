import { Clock, Zap, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Zap,
    title: "Express Delivery",
    description: "Urgent deliveries within 2 hours across Nairobi CBD and surrounding areas.",
    price: "From KES 300",
    features: ["2-hour delivery", "Real-time tracking", "Priority handling"],
  },
  {
    icon: Clock,
    title: "Same-Day Delivery",
    description: "Reliable same-day service for packages across all Nairobi neighborhoods.",
    price: "From KES 200",
    features: ["Same-day guarantee", "Flexible pickup", "SMS notifications"],
  },
  {
    icon: Calendar,
    title: "Scheduled Delivery",
    description: "Plan ahead with our scheduled delivery service for your convenience.",
    price: "From KES 150",
    features: ["Choose your time", "Bulk discounts", "Recurring options"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the delivery option that fits your timeline and budget
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate transition-transform" data-testid={`card-service-${index}`}>
              <CardHeader>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold font-mono text-primary">
                    {service.price}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-chart-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
