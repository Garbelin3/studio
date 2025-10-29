import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { VSLSection } from "@/components/landing/VSLSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { SamplesSection } from "@/components/landing/SamplesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { ForWhomSection } from "@/components/landing/ForWhomSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { Footer } from "@/components/landing/Footer";
import { BackToTopButton } from "@/components/landing/BackToTopButton";
import { GuaranteeToast } from "@/components/landing/GuaranteeToast";
import { VerseBanner } from "@/components/landing/VerseBanner";
import { PurchaseNotifications } from "@/components/landing/PurchaseNotifications";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main>
        <VerseBanner />
        <HeroSection />
        <VSLSection />
        <HowItWorksSection />
        <BenefitsSection />
        <SamplesSection />
        <TestimonialsSection />
        <GuaranteeToast />
        <OfferSection />
        {/*<ForWhomSection />*/}
        <FaqSection />
      </main>
      <Footer />
      <BackToTopButton />
      <PurchaseNotifications />
    </div>
  );
}
