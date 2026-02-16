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
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductCarousel() {
    const featured = getFeaturedProducts();

    return (
        <section className="py-24 md:py-48 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <AnimatedSection blur>
                    <SectionTitle
                        title="Tesoros de Edición Limitada"
                        subtitle="Cada par es único. Cuando se va, se va para siempre."
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
                                    <motion.div
                                        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-stone-100 hover:border-rose-light relative"
                                        whileHover={{ y: -6, rotate: 0.5, scale: 1.02 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        {/* Product Image */}
                                        <div className="aspect-[4/5] relative overflow-hidden bg-bg-warm">
                                            <Image
                                                src={product.images[0]}
                                                alt={product.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            {/* Badges Container */}
                                            <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                                                <div className="flex flex-col gap-2">
                                                    <div className="px-3 py-1 rounded-full bg-[#BE3B4F] text-white text-[10px] uppercase font-bold shadow-md">
                                                        -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                                                    </div>
                                                    {product.isBestSeller && (
                                                        <div className="px-3 py-1 rounded-full bg-stone-900 text-white text-[10px] uppercase font-bold shadow-md flex items-center gap-1">
                                                            <span>★</span> MÁS VENDIDO
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-rose-light cursor-pointer shadow-sm">
                                                    <Heart className="w-4 h-4 text-[#BE3B4F]" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="p-6 flex-1 flex flex-col items-center text-center">
                                            <span className="text-[10px] font-body uppercase tracking-[2px] text-stone-400 mb-2 block">
                                                {product.category}
                                            </span>
                                            <h3 className="font-heading text-xl font-bold text-stone-800 mb-1 group-hover:text-[#BE3B4F] transition-colors line-clamp-1">
                                                {product.emotionalName}
                                            </h3>
                                            <p className="text-sm text-stone-500 mb-3 line-clamp-1 italic font-light">
                                                {product.emotionalPhrase}
                                            </p>

                                            <div className="flex items-center gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className="text-xs text-yellow-500">★</span>
                                                ))}
                                                <span className="text-[10px] text-stone-400 ml-1">(12 reseñas)</span>
                                            </div>

                                            <div className="flex items-center justify-center gap-3 mt-auto">
                                                <span className="text-sm text-stone-400 line-through">
                                                    {formatPrice(product.oldPrice)}
                                                </span>
                                                <span className="text-xl font-bold text-stone-900">
                                                    {formatPrice(product.price)}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="h-1 bg-[#BE3B4F]/10 w-0 group-hover:w-full transition-all duration-500" />
                                    </motion.div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </AnimatedSection>

                <AnimatedSection delay={0.4} className="text-center mt-12">
                    <Button href="/shop" variant="caviar" size="lg" className="px-20 border-stone-200">
                        Explorar toda la colección
                    </Button>
                </AnimatedSection>
            </div>
        </section>
    );
}
