'use client';

import { use } from 'react';
import { getProductBySlug, products, getFeaturedProducts } from '@/lib/products';
import { formatPrice, buildWhatsAppURL } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Clock, Truck, Heart, Award, ChevronRight, ArrowLeft, Star } from 'lucide-react';

export default function ProductoPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    const discount = Math.round((1 - product.price / product.oldPrice) * 100);
    const whatsappMsg = `¡Hola! Me interesa el modelo "${product.emotionalName}" (${product.name}) 🍼`;
    const relatedProducts = products
        .filter((p) => p.slug !== product.slug && (p.category === product.category || p.gender === product.gender))
        .slice(0, 4);

    const trustBadges = [
        { icon: Shield, label: 'Garantía de satisfacción' },
        { icon: Clock, label: product.productionTime },
        { icon: Truck, label: 'Envío a todo Paraguay' },
        { icon: Award, label: '100% Artesanal' },
    ];

    return (
        <>
            {/* Breadcrumb */}
            <div className="pt-28 pb-4 bg-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <nav className="flex items-center gap-2 text-sm text-muted">
                        <Link href="/" className="hover:text-charcoal transition-colors">Inicio</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/shop" className="hover:text-charcoal transition-colors">Tienda</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-charcoal font-medium">{product.emotionalName}</span>
                    </nav>
                </div>
            </div>

            {/* Main Product Section */}
            <section className="pb-12 bg-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Image Gallery */}
                        <AnimatedSection>
                            <div className="sticky top-28">
                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 5000, disableOnInteraction: true }}
                                    className="rounded-3xl overflow-hidden shadow-lg !pb-10"
                                >
                                    {product.images.map((src, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="aspect-square bg-bg-warm">
                                                <img
                                                    src={src}
                                                    alt={`${product.name} - Imagen ${i + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </AnimatedSection>

                        {/* Product Info — Conversion Column */}
                        <div className="space-y-8">
                            <AnimatedSection delay={0.1}>
                                {/* Category & Gender */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs uppercase tracking-[3px] text-rose-deep font-medium">
                                        {product.category}
                                    </span>
                                    <span className="text-xs text-muted">•</span>
                                    <span className="text-xs text-muted capitalize">{product.gender}</span>
                                    <span className="text-xs text-muted">•</span>
                                    <span className="text-xs text-muted">{product.ageRange}</span>
                                </div>

                                {/* Emotional Name */}
                                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-2 leading-tight">
                                    {product.emotionalName}
                                </h1>

                                {/* Emotional Phrase */}
                                <p className="font-heading text-lg md:text-xl text-rose-deep italic mb-6">
                                    &ldquo;{product.emotionalPhrase}&rdquo;
                                </p>

                                {/* Price Block */}
                                <div className="flex items-end gap-4 mb-2">
                                    <span className="text-3xl md:text-4xl font-bold text-charcoal">
                                        {formatPrice(product.price)}
                                    </span>
                                    <span className="text-lg text-muted line-through mb-1">
                                        {formatPrice(product.oldPrice)}
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-rose-deep text-white text-sm font-semibold mb-1">
                                        -{discount}%
                                    </span>
                                </div>

                                {/* Scarcity */}
                                <motion.p
                                    className="text-sm text-rose-deep font-medium flex items-center gap-2"
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    🔥 {product.scarcityText}
                                </motion.p>
                            </AnimatedSection>

                            {/* Description */}
                            <AnimatedSection delay={0.2}>
                                <p className="text-charcoal/80 leading-relaxed text-base">
                                    {product.description}
                                </p>
                            </AnimatedSection>

                            {/* CTA Buttons */}
                            <AnimatedSection delay={0.25}>
                                <div className="space-y-3">
                                    <Button
                                        href={buildWhatsAppURL(whatsappMsg)}
                                        variant="whatsapp"
                                        size="lg"
                                        external
                                        className="w-full text-lg py-5 justify-center shadow-xl shadow-green-900/20"
                                    >
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Pedilo por WhatsApp
                                    </Button>
                                    <Button
                                        href="/shop"
                                        variant="outline"
                                        className="w-full"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Seguir descubriendo
                                    </Button>
                                </div>
                            </AnimatedSection>

                            {/* Trust Badges */}
                            <AnimatedSection delay={0.3}>
                                <div className="grid grid-cols-2 gap-3">
                                    {trustBadges.map((badge) => {
                                        const Icon = badge.icon;
                                        return (
                                            <div key={badge.label} className="flex items-center gap-2.5 p-3 rounded-xl bg-bg-warm/50 border border-rose-light/30">
                                                <Icon className="w-5 h-5 text-rose-deep flex-shrink-0" />
                                                <span className="text-xs text-charcoal/70 font-medium">{badge.label}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </AnimatedSection>

                            {/* Guarantee */}
                            <AnimatedSection delay={0.35}>
                                <div className="rounded-2xl bg-gradient-to-r from-gold/10 to-rose-light/20 p-5 border border-gold/20 text-center">
                                    <Star className="w-6 h-6 text-gold mx-auto mb-2" />
                                    <p className="font-heading text-base font-semibold text-charcoal mb-1">
                                        Nuestra Promesa
                                    </p>
                                    <p className="text-sm text-charcoal/70 italic">
                                        &ldquo;{product.guaranteeText}&rdquo;
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Benefits */}
                        <AnimatedSection>
                            <div className="bg-bg-warm/50 rounded-2xl p-6">
                                <h3 className="font-heading text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
                                    <Heart className="w-5 h-5 text-rose-deep" />
                                    Beneficios
                                </h3>
                                <ul className="space-y-3">
                                    {product.benefits.map((b) => (
                                        <li key={b} className="flex items-start gap-2 text-sm text-charcoal/80">
                                            <span className="text-rose-deep mt-0.5">✓</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Materials */}
                        <AnimatedSection delay={0.1}>
                            <div className="bg-bg-warm/50 rounded-2xl p-6">
                                <h3 className="font-heading text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-gold" />
                                    Materiales
                                </h3>
                                <ul className="space-y-3">
                                    {product.materials.map((m) => (
                                        <li key={m} className="flex items-start gap-2 text-sm text-charcoal/80">
                                            <span className="text-gold mt-0.5">◆</span>
                                            {m}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Care Instructions */}
                        <AnimatedSection delay={0.2}>
                            <div className="bg-bg-warm/50 rounded-2xl p-6">
                                <h3 className="font-heading text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-blue-soft" />
                                    Cuidados
                                </h3>
                                <ul className="space-y-3">
                                    {product.care.map((c) => (
                                        <li key={c} className="flex items-start gap-2 text-sm text-charcoal/80">
                                            <span className="text-blue-soft mt-0.5">●</span>
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="py-16 bg-bg-warm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <AnimatedSection>
                            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal text-center mb-10">
                                También te puede enamorar
                            </h2>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {relatedProducts.map((rp, i) => (
                                <AnimatedSection key={rp.slug} delay={i * 0.1}>
                                    <Link href={`/producto/${rp.slug}`} className="block group">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                                            <div className="aspect-square overflow-hidden bg-bg-warm">
                                                <img
                                                    src={rp.images[0]}
                                                    alt={rp.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                            </div>
                                            <div className="p-4 text-center">
                                                <span className="text-[9px] uppercase tracking-[2px] text-rose-deep block mb-1">{rp.category}</span>
                                                <h3 className="font-heading text-sm font-semibold text-charcoal mb-1 group-hover:text-rose-deep transition-colors line-clamp-1">
                                                    {rp.emotionalName}
                                                </h3>
                                                <span className="text-sm font-semibold text-charcoal">
                                                    {formatPrice(rp.price)}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
