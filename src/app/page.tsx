import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import ProductCarousel from '@/components/home/ProductCarousel';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import UpsellSection from '@/components/home/UpsellSection';
import TrustSection from '@/components/home/TrustSection';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <ProductCarousel />
      <TestimonialCarousel />
      <UpsellSection />
      <TrustSection />
      <FinalCTA />
    </>
  );
}
