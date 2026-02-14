import HeroSection from '@/components/home/HeroSection';
import SecondaryHeroSection from '@/components/home/SecondaryHeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import ProductCarousel from '@/components/home/ProductCarousel';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import UpsellSection from '@/components/home/UpsellSection';
import TrustSection from '@/components/home/TrustSection';
import FinalCTA from '@/components/home/FinalCTA';
import StorySection from '@/components/home/StorySection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <ProductCarousel />
      <BenefitsSection />
      <SecondaryHeroSection />
      <StorySection />
      <TestimonialCarousel />
      <UpsellSection />
      <TrustSection />
      <FinalCTA />
    </main>
  );
}
