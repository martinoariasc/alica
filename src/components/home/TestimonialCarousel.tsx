'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = Array.from({ length: 9 }).map((_, i) => `/images/testimonials/testimonio-${i + 1}.jpg`);

export default function TestimonialCarousel() {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
                <AnimatedSection>
                    <SectionTitle
                        title="Ellos ya caminan con ALICA"
                        subtitle="Historias reales de mamás (y bebés) felices"
                    />
                </AnimatedSection>
            </div>

            <div className="w-full">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3.5, spaceBetween: 30 },
                        1280: { slidesPerView: 4.5, spaceBetween: 40 },
                    }}
                    className="!pb-10 !px-4"
                >
                    {testimonials.map((src, i) => (
                        <SwiperSlide key={i} className="h-auto">
                            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg border border-stone-100 bg-stone-50 hover:shadow-xl transition-all duration-500 group">
                                <Image
                                    src={src}
                                    alt={`Testimonio ALICA ${i + 1}`}
                                    fill
                                    className="object-contain transition-transform duration-700 p-1"
                                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                                />
                                {/* Optional: Subtle overlay if needed */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
