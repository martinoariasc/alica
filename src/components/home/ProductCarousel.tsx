'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { getFeaturedProducts } from '@/lib/products';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

export default function ProductCarousel() {
    const featured = getFeaturedProducts();

    return (
        <section className="py-20 md:py-28 bg-bg-warm overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <AnimatedSection>
                    <SectionTitle
                        title="Nuestra Colección"
                        subtitle="Cada par es único, como tu bebé"
                    />
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1.2}
                        centeredSlides={false}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2.2 },
                            1024: { slidesPerView: 3.2 },
                            1280: { slidesPerView: 3.5 },
                        }}
                        className="!pb-14"
                    >
                        {featured.map((product) => (
                            <SwiperSlide key={product.slug}>
                                <Link href={`/producto/${product.slug}`} className="block group">
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                                        {/* Product Image */}
                                        <div className="aspect-square bg-gradient-to-br from-rose-light/30 to-cream relative overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="font-heading text-6xl text-rose/30">🍼</span>
                                            </div>
                                            {/* Sale Badge */}
                                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-rose-deep text-white text-xs font-medium">
                                                -30%
                                            </div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="p-5">
                                            <span className="text-xs font-body uppercase tracking-widest text-rose-deep mb-1 block">
                                                {product.category}
                                            </span>
                                            <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 group-hover:text-rose-deep transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-xs text-muted mb-3 line-clamp-2">
                                                {product.shortDescription}
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm text-muted line-through">
                                                    {formatPrice(product.oldPrice)}
                                                </span>
                                                <span className="text-lg font-semibold text-charcoal">
                                                    {formatPrice(product.price)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </AnimatedSection>

                <AnimatedSection delay={0.4} className="text-center mt-8">
                    <Button href="/shop" variant="outline" size="lg">
                        Ver toda la colección
                    </Button>
                </AnimatedSection>
            </div>
        </section>
    );
}
