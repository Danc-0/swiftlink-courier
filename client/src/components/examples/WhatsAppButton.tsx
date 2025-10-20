import { WhatsAppButton } from "../WhatsAppButton";

export default function WhatsAppButtonExample() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-muted/30">
      <p className="text-muted-foreground">Scroll to see the floating WhatsApp button in the bottom right</p>
      <WhatsAppButton />
    </div>
  );
}
