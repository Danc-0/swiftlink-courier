import { Button } from "@/components/ui/button";
import { SiFacebook, SiInstagram, SiX, SiTiktok, SiWhatsapp } from "react-icons/si";

const socialLinks = [
  {
    name: "Facebook",
    icon: SiFacebook,
    url: "https://facebook.com/swiftlogisticske",
    color: "hover:text-[#1877F2]",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://instagram.com/swiftlogistics_ke",
    color: "hover:text-[#E4405F]",
  },
  {
    name: "X",
    icon: SiX,
    url: "https://twitter.com/SwiftLogisticsKE",
    color: "hover:text-[#000000] dark:hover:text-[#FFFFFF]",
  },
  {
    name: "TikTok",
    icon: SiTiktok,
    url: "https://tiktok.com/@swiftlogisticske",
    color: "hover:text-[#000000] dark:hover:text-[#FFFFFF]",
  },
  {
    name: "WhatsApp",
    icon: SiWhatsapp,
    url: "https://wa.me/254732336718",
    color: "hover:text-[#25D366]",
  },
];

export function SocialMedia() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Connect With Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Follow us on social media for updates, promotions, and logistics tips
          </p>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`w-12 h-12 rounded-lg transition-colors ${social.color}`}
                onClick={() => window.open(social.url, "_blank")}
                data-testid={`button-social-${social.name.toLowerCase()}`}
                title={social.name}
              >
                <social.icon className="h-6 w-6" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
