import { Zap, Shield, DollarSign, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Express deliveries in 2 hours or less",
    metric: "2hr",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    icon: Shield,
    title: "100% Reliable",
    description: "On-time delivery guarantee with insurance",
    metric: "99.8%",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: DollarSign,
    title: "Affordable Rates",
    description: "Competitive pricing for all budgets",
    metric: "KES 150+",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    icon: Smartphone,
    title: "Real-Time Tracking",
    description: "Track your delivery every step of the way",
    metric: "Live",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            The advantages that make us Nairobi's preferred logistics partner
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover-elevate transition-transform" data-testid={`card-benefit-${index}`}>
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-lg ${benefit.bgColor} flex items-center justify-center mb-4 mx-auto`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <div className={`text-3xl font-bold font-mono mb-2 ${benefit.color}`}>
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
