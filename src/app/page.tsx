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
import VideoSection from '@/components/ui/VideoSection';

export default function Home() {
  return (
    <main className="overflow-hidden bg-bg">
      {/* Sección 1 */}
      <HeroSection />
      <Separator showLine={false} />

      {/* Sección 2 — with video */}
      <StorySection />
      <div className="max-w-md mx-auto px-6 py-8 md:py-16">
        <VideoSection src="/videos/video-seccion-2.mp4" />
      </div>
      <Separator />

      {/* Sección 3 — with video */}
      <ArtisanalUrgency />
      <div className="max-w-md mx-auto px-6 py-8 md:py-16">
        <VideoSection src="/videos/video-seccion-3.mp4" />
      </div>
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
