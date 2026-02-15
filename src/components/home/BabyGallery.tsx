'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const babyImages = Array.from({ length: 8 }).map((_, i) => `/images/bebes/bebe-${i + 1}.jpg`);

export default function BabyGallery() {
    return (
        <section className="py-20 bg-bg-warm/30 overflow-hidden">
            <div className="max-w-[1920px] mx-auto">
                <AnimatedSection>
                    <SectionTitle
                        title="Bebés ALICA"
                        subtitle="La comunidad más tierna del mundo"
                        className="mb-12"
                    />
                </AnimatedSection>

                <div className="px-4">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={20}
                        slidesPerView={1.5}
                        loop={true}
                        freeMode={true}
                        speed={5000} // Linear continuous scroll
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true, // Allow user to pause by hovering
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2.5, spaceBetween: 24 },
                            1024: { slidesPerView: 4.5, spaceBetween: 32 },
                        }}
                        className="w-full"
                    >
                        {babyImages.map((src, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-grab active:cursor-grabbing">
                                    <Image
                                        src={src}
                                        alt={`Bebé ALICA ${i + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 25vw"
                                    />
                                    {/* Subtle overlay on hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
