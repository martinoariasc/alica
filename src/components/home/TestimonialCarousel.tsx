'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { testimonials } from '@/lib/testimonials';
import { Star } from 'lucide-react';

export default function TestimonialCarousel() {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-4">
                            Mamás reales. Bebés reales.{' '}
                            <span className="gradient-text">Amor real.</span>
                        </h2>
                        <div className="mt-6 h-[2px] w-16 rounded-full bg-rose mx-auto" />
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {testimonials.map((t) => (
                            <SwiperSlide key={t.id}>
                                <div className="bg-bg-warm rounded-3xl p-8 h-full">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 text-gold fill-current"
                                            />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="font-body text-charcoal/80 leading-relaxed mb-6 text-sm">
                                        &ldquo;{t.text}&rdquo;
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center">
                                            <span className="text-rose-deep font-heading font-semibold text-sm">
                                                {t.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-charcoal text-sm">
                                                {t.name}
                                            </p>
                                            <p className="text-xs text-muted">
                                                {t.product} · Bebé de {t.babyAge}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </AnimatedSection>
            </div>
        </section>
    );
}
