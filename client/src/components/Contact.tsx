import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    pickup: "",
    delivery: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 30 minutes.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      pickup: "",
      delivery: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Request a quote or reach out to us directly
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Request a Quote</CardTitle>
              <CardDescription>Fill out the form and we'll respond within 30 minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="John Doe"
                    required
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+254 700 000 000"
                    required
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@example.com"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="serviceType">Service Type</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)}>
                    <SelectTrigger id="serviceType" data-testid="select-service-type">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="express">Express Delivery</SelectItem>
                      <SelectItem value="sameday">Same-Day Delivery</SelectItem>
                      <SelectItem value="scheduled">Scheduled Delivery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="pickup">Pickup Location</Label>
                  <Input
                    id="pickup"
                    value={formData.pickup}
                    onChange={(e) => handleChange("pickup", e.target.value)}
                    placeholder="e.g., Westlands, Nairobi"
                    required
                    data-testid="input-pickup"
                  />
                </div>
                
                <div>
                  <Label htmlFor="delivery">Delivery Location</Label>
                  <Input
                    id="delivery"
                    value={formData.delivery}
                    onChange={(e) => handleChange("delivery", e.target.value)}
                    placeholder="e.g., Kilimani, Nairobi"
                    required
                    data-testid="input-delivery"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Package details, special instructions, etc."
                    rows={4}
                    data-testid="input-message"
                  />
                </div>
                
                <Button type="submit" className="w-full" data-testid="button-submit-quote">
                  Request Quote
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <a href="tel:+254732336718" className="text-muted-foreground hover:text-primary" data-testid="link-phone">
                      +254 732 336718
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <a href="mailto:info@swiftlogistics.ke" className="text-muted-foreground hover:text-primary" data-testid="link-email">
                      info@swiftlogistics.ke
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-chart-3" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Embakasi East HQ Office<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-chart-4/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-chart-4" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 7:00 AM - 8:00 PM<br />
                      Sunday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
