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
      <HeroSection />
      <Separator showLine={false} />

      {/* Sección 2 — StorySection + Video */}
      <StorySection />
      <section className="py-16 md:py-24 bg-bg-warm/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-sm mx-auto md:max-w-none">
              <VideoSection src="/videos/video-seccion-2.mp4" />
            </div>
            <div className="text-center md:text-left">
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-rose-deep mb-4 block font-bold">Mirá esto</span>
              <h3 className="font-heading text-3xl md:text-4xl text-charcoal mb-6 leading-tight italic">
                Cada puntada cuenta una historia de amor
              </h3>
              <p className="font-body text-muted leading-relaxed font-light">
                Nuestros zapatitos se hacen uno a uno, con la misma paciencia y delicadeza con la que cuidás a tu bebé. Mirá el proceso artesanal que hace de cada par algo único e irrepetible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Separator />

      {/* Sección 3 — ArtisanalUrgency + Video */}
      <ArtisanalUrgency />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-rose-deep mb-4 block font-bold">El detalle importa</span>
              <h3 className="font-heading text-3xl md:text-4xl text-charcoal mb-6 leading-tight italic">
                Suavidad que se siente, calidad que se ve
              </h3>
              <p className="font-body text-muted leading-relaxed font-light">
                Materiales 100% naturales, costuras invisibles y una suela blanda que abraza sus piecitos. Cada detalle está pensado para la comodidad y seguridad de tu bebé.
              </p>
            </div>
            <div className="order-1 md:order-2 max-w-sm mx-auto md:max-w-none">
              <VideoSection src="/videos/video-seccion-3.mp4" />
            </div>
          </div>
        </div>
      </section>
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
