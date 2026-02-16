'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';

const testimonials = Array.from({ length: 9 }).map((_unused, i) => `/images/testimonials/testimonio-${i + 1}.jpg`);

export default function TestimonialCarousel() {
    return (
        <section className="py-40 md:py-80 relative overflow-hidden w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
                <AnimatedSection blur>
                    <SectionTitle
                        title="Ellos ya caminan con ALICA"
                        subtitle="Historias reales de mamás (y bebés) felices"
                    />
                </AnimatedSection>
            </div>

            <div className="w-full max-w-[1920px] mx-auto px-4">
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
                        640: { slidesPerView: 2.2, spaceBetween: 24 },
                        1024: { slidesPerView: 3.2, spaceBetween: 32 },
                        1280: { slidesPerView: 4.2, spaceBetween: 40 },
                        1600: { slidesPerView: 5.2, spaceBetween: 48 },
                    }}
                    className="!pb-20"
                >
                    {testimonials.map((src, i) => (
                        <SwiperSlide key={i} className="h-auto">
                            <motion.div
                                className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg border border-stone-100 bg-stone-50 group"
                                whileHover={{
                                    rotate: i % 2 === 0 ? 1 : -1,
                                    scale: 1.03,
                                    boxShadow: '0 20px 60px -15px rgba(0,0,0,0.15)',
                                }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Image
                                    src={src}
                                    alt={`Testimonio ALICA ${i + 1}`}
                                    fill
                                    className="object-contain transition-transform duration-700 p-1"
                                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
