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
import SizeChart from '@/components/home/SizeChart';
import FinalCTA from '@/components/home/FinalCTA';
import Separator from '@/components/ui/Separator';

export default function Home() {
  return (
    <main className="overflow-hidden bg-bg">
      <HeroSection />
      <Separator showLine={false} />
      <StorySection />
      <Separator />
      <ArtisanalUrgency />
      <Separator />
      <BenefitsSection />
      <Separator />
      <SplitCategory />
      <Separator />
      <ProductCarousel />
      <Separator />
      <SecondaryHeroSection />
      <Separator />
      <TestimonialCarousel />
      <Separator />
      <GiftExperience />
      <Separator />
      <BabyGallery />
      <Separator />
      <SizeChart />
      <Separator />
      <FinalCTA />
    </main>
  );
}
