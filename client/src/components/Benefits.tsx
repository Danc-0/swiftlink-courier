import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Building, Building2 } from "lucide-react";

const segments = [
  {
    id: "individuals",
    label: "Individuals",
    icon: User,
    benefits: [
      "Send packages to friends and family across Nairobi",
      "Online shopping deliveries at your doorstep",
      "Document and important item courier",
      "Flexible scheduling that fits your timeline",
      "Affordable rates starting from KES 150",
    ],
  },
  {
    id: "smes",
    label: "Small Businesses",
    icon: Building,
    benefits: [
      "Reliable daily delivery services for your products",
      "Bulk delivery discounts to save on costs",
      "Priority customer support for business needs",
      "Scheduled recurring deliveries",
      "Real-time tracking for customer transparency",
    ],
  },
  {
    id: "enterprises",
    label: "Enterprises",
    icon: Building2,
    benefits: [
      "Dedicated account management and support",
      "Custom logistics solutions tailored to your needs",
      "Volume-based pricing and contract terms",
      "Integration with your existing systems",
      "Scalable fleet to handle peak demands",
    ],
  },
];

export function Benefits() {
  const [activeSegment, setActiveSegment] = useState("individuals");

  const currentSegment = segments.find(s => s.id === activeSegment) || segments[0];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Benefits For Everyone
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions for individuals, small businesses, and enterprises
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {segments.map((segment) => (
            <button
              key={segment.id}
              onClick={() => setActiveSegment(segment.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all ${
                activeSegment === segment.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover-elevate active-elevate-2"
              }`}
              data-testid={`button-segment-${segment.id}`}
            >
              <segment.icon className="h-5 w-5" />
              {segment.label}
            </button>
          ))}
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <currentSegment.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">
                For {currentSegment.label}
              </h3>
            </div>
            
            <ul className="space-y-4">
              {currentSegment.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`benefit-${index}`}>
                  <div className="mt-1 h-2 w-2 rounded-full bg-chart-2 flex-shrink-0" />
                  <span className="text-lg leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
