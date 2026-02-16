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
    <main className="overflow-hidden min-h-screen w-full relative">
      {/* 1. HERO: The Emotional Hook ("Make them eternal") */}
      <HeroSection />

      <Separator showLine={false} />

      {/* 2. PROBLEM/SOLUTION + SAFETY: "Why soft sole?" */}
      <BarefootBenefits />

      <Separator />

      {/* 3. SCARCITY + ARTISANAL VALUE: "Not a factory, a workshop." */}


      {/* Video Interlude 1: The Process */}
      <section className="py-40 md:py-80 w-full px-6 sm:px-12">
        <div className="max-w-[95%] 2xl:max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-40 items-center">
            <div className="w-full h-full">
              <div className="aspect-[4/5] w-full relative">
                <VideoSection src="/videos/video-seccion-2.mp4" />
              </div>
            </div>
            <div className="text-center md:text-left flex flex-col justify-center">
              <span className="font-body text-xs md:text-sm tracking-[0.5em] uppercase text-rose-deep mb-8 block font-bold">Sin Prisas</span>
              <h3 className="font-heading text-5xl md:text-7xl lg:text-8xl text-charcoal mb-10 leading-[0.9] italic">
                Coser memorias,<br />no solo zapatos.
              </h3>
              <p className="font-body text-muted leading-relaxed font-light text-xl md:text-2xl max-w-2xl mx-auto md:mx-0">
                En un mundo donde todo es rápido y desechable, nosotros elegimos la pausa. Cada par de ALICA lleva horas de manos pacientes que saben que están vistiendo los pies de alguien muy importante.
              </p>
            </div>
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
