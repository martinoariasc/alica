'use client';

import HeroSection from '@/components/home/HeroSection';
import BarefootBenefits from '@/components/home/BarefootBenefits';
import ProductCarousel from '@/components/home/ProductCarousel';
import StorySection from '@/components/home/StorySection';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import BabyGallery from '@/components/home/BabyGallery';
import SizeChart from '@/components/home/SizeChart';
import FinalCTA from '@/components/home/FinalCTA';
import Separator from '@/components/ui/Separator';
import VideoSection from '@/components/ui/VideoSection';

// Custom Luxury Spacer - "The Art of the Pause"
const LuxurySpacer = () => (
  <div className="w-full py-24 md:py-32 lg:py-40 flex items-center justify-center">
    <div className="w-px h-20 md:h-32 bg-gradient-to-b from-transparent via-rose-deep/30 to-transparent" />
  </div>
);

export default function Home() {
  return (
    <main className="overflow-hidden min-h-screen w-full relative bg-[#FAF7F5]">

      {/* 1. HERO: The Emotional Hook */}
      <HeroSection />

      <LuxurySpacer />

      {/* 2. PROBLEM/SOLUTION: "Why soft sole?" */}
      <BarefootBenefits />

      <LuxurySpacer />

      {/* 3. BRAND VALUE: "Sin Prisas" (Video Interlude) */}
      <section className="w-full px-6 sm:px-12">
        <div className="max-w-[95%] 2xl:max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-48 items-center">
            <div className="w-full h-full">
              <div className="aspect-[4/5] w-full relative overflow-hidden rounded-[2rem] shadow-2xl">
                <VideoSection src="/videos/video-seccion-2.mp4" />
              </div>
            </div>
            <div className="text-center md:text-left flex flex-col justify-center">
              <span className="font-body text-xs md:text-sm tracking-[0.5em] uppercase text-rose-deep mb-8 block font-bold">Sin Prisas</span>
              <h3 className="font-heading text-5xl md:text-7xl lg:text-8xl text-charcoal mb-12 leading-[0.9] italic">
                Coser memorias,<br />no solo zapatos.
              </h3>
              <p className="font-body text-muted leading-relaxed font-light text-xl md:text-2xl max-w-2xl mx-auto md:mx-0">
                En un mundo donde todo es rápido y desechable, nosotros elegimos la pausa. Cada par de ALICA lleva horas de manos pacientes que saben que están vistiendo los pies de alguien muy importante.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LuxurySpacer />

      {/* 4. DESIRE: The Product Showcase */}
      <div className="relative">
        <h2 className="text-center font-heading text-4xl md:text-5xl text-charcoal mb-16">
          Favoritos de la semana
        </h2>
        <ProductCarousel />
      </div>

      <LuxurySpacer />

      {/* 5. CONNECTION: "They grow too fast" */}
      <StorySection />

      <LuxurySpacer />

      {/* 6. TRUST: Social Proof */}
      <div className="text-center mb-16">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-stone-400">Mamás Alica</span>
      </div>
      <TestimonialCarousel />

      <LuxurySpacer />

      {/* 7. UTILITY: Size Chart */}
      <SizeChart />

      <LuxurySpacer />

      {/* 8. VISUALS: Gallery */}
      <BabyGallery />

      <LuxurySpacer />

      {/* 9. ACTION: Final CTA */}
      <FinalCTA />
    </main >
  );
}
