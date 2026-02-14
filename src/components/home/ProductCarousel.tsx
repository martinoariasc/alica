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
                        subtitle="Sin stock. Confeccionamos cada par especialmente para vos."
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
                                <Link href={`/producto/${product.slug}`} className="block group h-full">
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                                        {/* Product Image */}
                                        <div className="aspect-square relative overflow-hidden bg-bg-warm">
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                                            />
                                            {/* Sale Badge */}
                                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-rose-deep text-white text-xs font-medium z-10">
                                                -30%
                                            </div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="p-5 flex-1 flex flex-col items-center text-center">
                                            <span className="text-xs font-body uppercase tracking-[2px] text-rose-deep mb-2 block">
                                                {product.category}
                                            </span>
                                            <h3 className="font-heading text-xl font-semibold text-charcoal mb-2 group-hover:text-rose-deep transition-colors line-clamp-1">
                                                {product.name}
                                            </h3>
                                            <p className="text-xs text-muted mb-4 line-clamp-2 max-w-[200px] mx-auto">
                                                {product.shortDescription}
                                            </p>
                                            <div className="flex items-center justify-center gap-3 mt-auto">
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
