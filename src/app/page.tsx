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
  <div className="w-full py-8 md:py-24 flex items-center justify-center">
    <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-rose-deep/20 to-transparent" />
  </div>
);

export default function Home() {
  return (
    <main className="overflow-hidden min-h-screen w-full relative">

      {/* 1. HERO: The Emotional Hook */}
      <HeroSection />

      <LuxurySpacer />

      {/* 2. PROBLEM/SOLUTION: "Why soft sole?" */}
      <BarefootBenefits />

      <LuxurySpacer />

      {/* 3. BRAND VALUE: "Sin Prisas" (Video Interlude) */}
      <section className="w-full px-6 sm:px-12">
        <div className="max-w-[95%] 2xl:max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="w-full h-full">
              <VideoSection
                src="/videos/video-seccion-2.mp4"
                aspectRatio="aspect-[4/5]"
                rounded="rounded-[2.5rem]"
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="font-heading text-2xl md:text-4xl text-white/90 leading-tight drop-shadow-lg">
                    EL REFUGIO<br />
                    PERFECTO PARA<br />
                    <span className="italic font-light text-white">TU TESORO</span>
                  </span>
                </div>
              </VideoSection>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <span className="font-body text-xs md:text-sm tracking-[0.5em] uppercase text-rose-deep mb-6 block font-bold">Para mamás extraordinarias</span>
              <h3 className="font-heading text-4xl md:text-6xl lg:text-7xl text-charcoal mb-8 md:mb-12 leading-[1.2]">
                Lo elegís por su piel,<br />
                <span className="italic font-light text-stone-400">lo amás por su historia.</span>
              </h3>
              <p className="font-body text-muted leading-relaxed font-light text-lg md:text-xl max-w-2xl mx-auto text-center">
                Sabemos que cada decisión que tomás hoy es un "te amo" silencioso hacia su futuro. Por eso, nos tomamos el tiempo que el mundo ya no tiene: para coser a mano un calzado que respete su lenguaje y guarde para siempre la magia de sus primeros pasos. Porque tu bebé merece lo extraordinario, y vos mereces la paz de haberlo encontrado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LuxurySpacer />

      {/* 4. DESIRE: The Product Showcase */}
      <ProductCarousel />

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
