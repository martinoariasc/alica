import HeroSection from '@/components/home/HeroSection';
import StorySection from '@/components/home/StorySection';
import SplitCategory from '@/components/home/SplitCategory';
import ProductCarousel from '@/components/home/ProductCarousel';
import BenefitsSection from '@/components/home/BenefitsSection'; // Renamed conceptually to "The Logic" but keeping component name
import PolaroidTestimonials from '@/components/home/PolaroidTestimonials';
import GiftExperience from '@/components/home/GiftExperience';
import ArtisanalUrgency from '@/components/home/ArtisanalUrgency';
import SecondaryHeroSection from '@/components/home/SecondaryHeroSection';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <main className="overflow-hidden bg-bg">
      <HeroSection />
      <ArtisanalUrgency /> {/* Urgent message strip right after hero */}
      <StorySection />
      <SplitCategory />
      <ProductCarousel />
      <SecondaryHeroSection /> {/* Sensory Break */}
      <GiftExperience />
      <BenefitsSection />
      <PolaroidTestimonials />
      <FinalCTA />
    </main>
  );
}
