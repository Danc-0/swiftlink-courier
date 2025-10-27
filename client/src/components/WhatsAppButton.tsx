import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/254732336718?text=Hello! I'd like to inquire about your delivery services.", "_blank");
  };

  return (
    <Button
      size="lg"
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 p-0 shadow-lg animate-pulse hover:animate-none bg-[#25D366] hover:bg-[#20BA5A] text-white border-0"
      style={{ backgroundColor: "hsl(142 70% 50%)" }}
      data-testid="button-whatsapp-float"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">Chat on WhatsApp</span>
    </Button>
  );
}
