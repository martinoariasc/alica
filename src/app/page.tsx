import HeroSection from '@/components/home/HeroSection';
import StorySection from '@/components/home/StorySection';
import SplitCategory from '@/components/home/SplitCategory';
import ProductCarousel from '@/components/home/ProductCarousel';
import BenefitsSection from '@/components/home/BenefitsSection';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import BabyGallery from '@/components/home/BabyGallery';
import GiftExperience from '@/components/home/GiftExperience';
import ArtisanalUrgency from '@/components/home/ArtisanalUrgency';
import SecondaryHeroSection from '@/components/home/SecondaryHeroSection';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <main className="overflow-hidden bg-bg">
      <HeroSection />
      <ArtisanalUrgency />
      <StorySection />
      <SplitCategory />
      <ProductCarousel />
      <SecondaryHeroSection />
      <TestimonialCarousel />
      <GiftExperience />
      <BenefitsSection />
      <BabyGallery />
      <FinalCTA />
    </main>
  );
}
