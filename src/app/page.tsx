'use client';

import HeroSection from '@/components/home/HeroSection';
import BarefootBenefits from '@/components/home/BarefootBenefits'; // Renamed
import ArtisanalUrgency from '@/components/home/ArtisanalUrgency';
import ProductCarousel from '@/components/home/ProductCarousel';
import StorySection from '@/components/home/StorySection'; // Refined
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import BabyGallery from '@/components/home/BabyGallery';
import SizeChart from '@/components/home/SizeChart';
import FinalCTA from '@/components/home/FinalCTA';
import Separator from '@/components/ui/Separator';
import VideoSection from '@/components/ui/VideoSection';

export default function Home() {
  return (
    <main className="overflow-hidden min-h-screen w-full flex flex-col items-center">
      {/* 1. HERO: The Emotional Hook ("Make them eternal") */}
      <HeroSection />

      <Separator showLine={false} />

      {/* 2. PROBLEM/SOLUTION + SAFETY: "Why soft sole?" */}
      <BarefootBenefits />

      <Separator />

      {/* 3. SCARCITY + ARTISANAL VALUE: "Not a factory, a workshop." */}


      {/* Video Interlude 1: The Process */}
      <section className="py-40 md:py-80 w-full max-w-[1800px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="w-full max-w-md mx-auto md:max-w-none">
            <VideoSection src="/videos/video-seccion-2.mp4" />
          </div>
          <div className="text-center md:text-left">
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-rose-deep mb-6 block font-bold">Sin Prisas</span>
            <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight italic">
              Coser memorias,<br />no solo zapatos.
            </h3>
            <p className="font-body text-muted leading-relaxed font-light text-lg md:text-xl max-w-lg mx-auto md:mx-0">
              En un mundo donde todo es rápido y desechable, nosotros elegimos la pausa. Cada par de ALICA lleva horas de manos pacientes que saben que están vistiendo los pies de alguien muy importante.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* 4. DESIRE: The Product Showcase */}
      <ProductCarousel />

      <Separator />

      {/* 5. MEMORY/EMOTION: "They grow too fast" */}
      <StorySection />



      <Separator />

      {/* 6. TRUST: Social Proof */}
      <TestimonialCarousel />

      <Separator />

      {/* 7. UTILITY & CLOSING */}
      <SizeChart />
      <BabyGallery />
      <Separator />
      <FinalCTA />
    </main >
  );
}
