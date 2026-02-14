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
import { Heart } from 'lucide-react';

export default function ProductCarousel() {
    const featured = getFeaturedProducts();

    return (
        <section className="py-20 md:py-28 bg-bg-warm overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <AnimatedSection>
                    <SectionTitle
                        title="Galería de Tesoros"
                        subtitle="Cada par tiene una historia esperándote."
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
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col border border-transparent hover:border-rose-light">
                                        {/* Product Image */}
                                        <div className="aspect-square relative overflow-hidden bg-bg-warm">
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            {/* Sale Badge */}
                                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-rose-deep text-white text-xs font-medium z-10">
                                                -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                                            </div>
                                            {/* Wishlist */}
                                            <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-rose-light cursor-pointer">
                                                <Heart className="w-4 h-4 text-rose-deep" />
                                            </div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="p-5 flex-1 flex flex-col items-center text-center">
                                            <span className="text-[10px] font-body uppercase tracking-[2px] text-rose-deep mb-1 block">
                                                {product.category}
                                            </span>
                                            <h3 className="font-heading text-lg font-semibold text-charcoal mb-1 group-hover:text-rose-deep transition-colors line-clamp-1">
                                                {product.emotionalName}
                                            </h3>
                                            <p className="text-xs text-muted mb-3 line-clamp-1 italic">
                                                {product.emotionalPhrase}
                                            </p>
                                            <div className="flex items-center justify-center gap-3 mt-auto mb-3">
                                                <span className="text-sm text-muted line-through">
                                                    {formatPrice(product.oldPrice)}
                                                </span>
                                                <span className="text-lg font-semibold text-charcoal">
                                                    {formatPrice(product.price)}
                                                </span>
                                            </div>
                                            <span className="text-xs text-rose-deep font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                Ver detalle →
                                            </span>
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
