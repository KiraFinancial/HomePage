import HeroSection from "./components/HeroSection";
import MarketsSection from "./components/MarketsSection";
import PaymentMethodsSection from "./components/PaymentMethodsSection";
import PlatformsSection from "./components/PlatformsSection";
import PriceSection from "./components/PriceSection";
import QuickStepsSection from "./components/QuickStepsSection";
import WhyKiraSection from "./components/WhyKiraSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <WhyKiraSection />
        <MarketsSection />
        <PlatformsSection />
        <PriceSection/>
        <QuickStepsSection />
        <PaymentMethodsSection />
      </main>
    </>
  );
}
