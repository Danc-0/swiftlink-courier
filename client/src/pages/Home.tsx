import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Fleet } from "@/components/Fleet";
import { Coverage } from "@/components/Coverage";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { SocialMedia } from "@/components/SocialMedia";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <Coverage />
        <About />
        <WhyChooseUs />
        <Benefits />
        <Contact />
        <SocialMedia />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
