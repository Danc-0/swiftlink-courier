import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiFacebook, SiInstagram, SiX, SiLinkedin } from "react-icons/si";

const socialLinks = [
  {
    name: "Facebook",
    icon: SiFacebook,
    url: "https://facebook.com",
    handle: "@SwiftLogisticsKE",
    color: "hover:text-[#1877F2]",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://instagram.com",
    handle: "@swiftlogistics_ke",
    color: "hover:text-[#E4405F]",
  },
  {
    name: "X (Twitter)",
    icon: SiX,
    url: "https://twitter.com",
    handle: "@SwiftLogisticsKE",
    color: "hover:text-[#000000] dark:hover:text-[#FFFFFF]",
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://linkedin.com",
    handle: "Swift Logistics",
    color: "hover:text-[#0A66C2]",
  },
];

export function SocialMedia() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Connect With Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow us on social media for updates, promotions, and logistics tips
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => (
            <Card key={index} className="hover-elevate transition-all" data-testid={`card-social-${index}`}>
              <CardContent className="p-6 text-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`w-16 h-16 rounded-lg mb-4 mx-auto transition-colors ${social.color}`}
                  onClick={() => window.open(social.url, "_blank")}
                  data-testid={`button-social-${social.name.toLowerCase()}`}
                >
                  <social.icon className="h-8 w-8" />
                </Button>
                <h3 className="font-bold mb-1">{social.name}</h3>
                <p className="text-sm text-muted-foreground">{social.handle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
