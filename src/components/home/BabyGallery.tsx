'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { motion } from 'framer-motion';

const babyImages = Array.from({ length: 9 }).map((_unused, i) => `/images/bebes/bebe-${i + 1}.jpg`);

export default function BabyGallery() {
    return (
        <section className="py-40 md:py-80 relative overflow-hidden w-full">
            <div className="max-w-[95%] 2xl:max-w-[1920px] mx-auto">
                <AnimatedSection blur>
                    <SectionTitle
                        title="Bebés ALICA"
                        subtitle="La comunidad más tierna del mundo"
                        className="mb-12"
                    />
                </AnimatedSection>

                <div className="w-full max-w-[1920px] mx-auto px-4">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={20}
                        slidesPerView={1.5}
                        loop={true}
                        centeredSlides={true}
                        freeMode={true}
                        speed={5000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2.5, spaceBetween: 24 },
                            1024: { slidesPerView: 4.5, spaceBetween: 32 },
                            1400: { slidesPerView: 5.5, spaceBetween: 40 },
                            1800: { slidesPerView: 6.5, spaceBetween: 48 },
                        }}
                        className="w-full !pb-12"
                    >
                        {babyImages.map((src, i) => (
                            <SwiperSlide key={i}>
                                <motion.div
                                    className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm group cursor-grab active:cursor-grabbing"
                                    whileHover={{
                                        scale: 1.04,
                                        rotate: i % 2 === 0 ? 1.5 : -1.5,
                                        boxShadow: '0 15px 40px -10px rgba(0,0,0,0.15)',
                                    }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <Image
                                        src={src}
                                        alt={`Bebé ALICA ${i + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700"
                                        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
