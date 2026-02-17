import HeroSection from "@/components/HeroSection";
import FrustrationsSection from "@/components/FrustrationsSection";
import TransformationSection from "@/components/TransformationSection";
import MethodSection from "@/components/MethodSection";
import OffersSection from "@/components/OffersSection";
import JourneySection from "@/components/JourneySection";
import WhyMeSection from "@/components/WhyMeSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FrustrationsSection />
      <TransformationSection />
      <MethodSection />
      <OffersSection />
      <JourneySection />
      <WhyMeSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
