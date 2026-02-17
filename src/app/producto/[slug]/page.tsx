'use client';

import { use } from 'react';
import { getProductBySlug, products } from '@/lib/products';
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
import { Shield, Clock, Truck, Heart, Award, ChevronRight, ArrowLeft, Star, Sparkles } from 'lucide-react';

const LuxurySpacer = () => (
    <div className="w-full py-12 md:py-20 flex items-center justify-center pointer-events-none">
        <div className="w-px h-12 md:h-16 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
    </div>
);

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
    const whatsappMsg = `¡Hola! Me interesa conocer más sobre el modelo "${product.emotionalName}" (${product.name}) 🍼`;
    const relatedProducts = products
        .filter((p) => p.slug !== product.slug && (p.category === product.category || p.gender === product.gender))
        .slice(0, 4);

    const trustBadges = [
        { icon: Shield, label: 'Garantía Total' },
        { icon: Clock, label: product.productionTime },
        { icon: Truck, label: 'Envío Nacional' },
        { icon: Award, label: 'Handcrafted' },
    ];

    return (
        <main className="bg-white min-h-screen">
            {/* Breadcrumb - More subtle and high-up */}
            <div className="pt-32 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-stone-400">
                        <Link href="/" className="hover:text-rose-deep transition-colors">Inicio</Link>
                        <span className="opacity-30">/</span>
                        <Link href="/shop" className="hover:text-rose-deep transition-colors">Tienda</Link>
                        <span className="opacity-30">/</span>
                        <span className="text-stone-900 font-bold">{product.category}</span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                        {/* Column 1: Gallery (7 cols) */}
                        <div className="lg:col-span-7">
                            <AnimatedSection direction="none">
                                <div className="rounded-[2.5rem] overflow-hidden bg-stone-50 shadow-2xl shadow-stone-200/50 relative group">
                                    <Swiper
                                        modules={[Pagination, Autoplay]}
                                        pagination={{ clickable: true }}
                                        autoplay={{ delay: 6000 }}
                                        className="w-full aspect-square md:aspect-[4/4.5]"
                                    >
                                        {product.images.map((src, i) => (
                                            <SwiperSlide key={i}>
                                                <img
                                                    src={src}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {/* Subtle Best Seller Badge */}
                                    {product.isBestSeller && (
                                        <div className="absolute top-8 left-8 z-10 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full border border-stone-100 shadow-sm flex items-center gap-2">
                                            <Sparkles className="w-3.5 h-3.5 text-gold" />
                                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-900">Más Favorito</span>
                                        </div>
                                    )}
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Column 2: Buy Details (5 cols) */}
                        <div className="lg:col-span-5 pt-4">
                            <div className="sticky top-32 space-y-12">

                                {/* Identification */}
                                <AnimatedSection delay={0.1}>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="bg-rose-light/30 text-rose-deep px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                                {product.gender}
                                            </span>
                                            <span className="text-stone-300 text-xs tracking-widest uppercase">
                                                {product.ageRange}
                                            </span>
                                        </div>
                                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
                                            {product.emotionalName}
                                        </h1>
                                        <p className="font-body text-xl md:text-2xl text-stone-400 font-light italic leading-relaxed">
                                            &ldquo;{product.emotionalPhrase}&rdquo;
                                        </p>
                                    </div>
                                </AnimatedSection>

                                {/* Pricing & Scarcity */}
                                <AnimatedSection delay={0.2}>
                                    <div className="flex flex-col gap-6 p-8 rounded-[2rem] bg-stone-50 border border-stone-100">
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-4xl font-bold text-stone-900">{formatPrice(product.price)}</span>
                                            <span className="text-lg text-stone-400 line-through opacity-60 font-light">{formatPrice(product.oldPrice)}</span>
                                            <span className="ml-auto bg-rose-deep text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                                                SALE -{discount}%
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3 text-rose-deep">
                                            <div className="w-2 h-2 rounded-full bg-rose-deep animate-pulse" />
                                            <span className="text-xs font-bold uppercase tracking-[0.1em]">{product.scarcityText}</span>
                                        </div>
                                    </div>
                                </AnimatedSection>

                                {/* Description */}
                                <AnimatedSection delay={0.3}>
                                    <p className="text-lg text-stone-500 font-light leading-relaxed">
                                        {product.description}
                                    </p>
                                </AnimatedSection>

                                {/* Actions - High Contrast */}
                                <AnimatedSection delay={0.4}>
                                    <div className="flex flex-col gap-5">
                                        <Button
                                            href={buildWhatsAppURL(whatsappMsg)}
                                            variant="whatsapp"
                                            size="lg"
                                            external
                                            className="w-full h-20 text-lg flex items-center justify-center gap-4 rounded-full shadow-2xl shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-500"
                                        >
                                            <MessageCircle className="w-6 h-6" />
                                            Gestionar Pedido Personalizado
                                        </Button>

                                        <Button
                                            href="/shop"
                                            variant="outlineDark"
                                            size="lg"
                                            className="w-full h-16 rounded-full font-bold uppercase tracking-[0.1em] text-xs"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            Seguir Explorando Colección
                                        </Button>
                                    </div>
                                </AnimatedSection>

                                {/* Trust Attributes */}
                                <div className="grid grid-cols-2 gap-4">
                                    {trustBadges.map((badge, i) => (
                                        <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-100 shadow-sm transition-all hover:border-rose-light/50">
                                            <badge.icon className="w-5 h-5 text-rose-deep opacity-60" />
                                            <span className="text-xs font-bold tracking-widest uppercase text-stone-900">{badge.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LuxurySpacer />

            {/* Feature Tabs (Static for now but refined) */}
            <section className="py-24 bg-[#FAF9F6]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                        {/* Column: Benefits */}
                        <div className="space-y-8">
                            <div className="w-12 h-12 rounded-2xl bg-rose-light/20 flex items-center justify-center">
                                <Heart className="w-6 h-6 text-rose-deep" />
                            </div>
                            <h3 className="font-heading text-2xl font-semibold text-charcoal">Salud y Confort</h3>
                            <ul className="space-y-4">
                                {product.benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3 text-stone-500 font-light">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-deep/30 mt-2 flex-shrink-0" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column: Materials */}
                        <div className="space-y-8">
                            <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                                <Award className="w-6 h-6 text-gold" />
                            </div>
                            <h3 className="font-heading text-2xl font-semibold text-charcoal">Nobleza de Origen</h3>
                            <ul className="space-y-4">
                                {product.materials.map((m, i) => (
                                    <li key={i} className="flex items-start gap-3 text-stone-500 font-light">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold/30 mt-2 flex-shrink-0" />
                                        {m}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column: Care */}
                        <div className="space-y-8">
                            <div className="w-12 h-12 rounded-2xl bg-charcoal/5 flex items-center justify-center">
                                <Shield className="w-6 h-6 text-blue-soft" />
                            </div>
                            <h3 className="font-heading text-2xl font-semibold text-charcoal">Cuidado Sugerido</h3>
                            <ul className="space-y-4">
                                {product.care.map((c, i) => (
                                    <li key={i} className="flex items-start gap-3 text-stone-500 font-light">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-soft/30 mt-2 flex-shrink-0" />
                                        {c}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <LuxurySpacer />

            {/* Detailed Brand Promise */}
            <section className="py-24">
                <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
                    <Star className="w-10 h-10 text-gold mx-auto opacity-40" />
                    <h2 className="font-heading text-3xl md:text-4xl text-charcoal italic">Nuestra Garantía Maternal</h2>
                    <p className="text-xl text-stone-400 font-light leading-relaxed">
                        &ldquo;{product.guaranteeText}&rdquo;
                    </p>
                    <div className="pt-8">
                        <Button
                            href={buildWhatsAppURL(whatsappMsg)}
                            variant="luxury"
                            size="lg"
                            className="h-16 px-12 rounded-full uppercase tracking-widest text-[11px]"
                        >
                            Quiero hablar con alguien 📞
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}

// Fixed import of MessageCircle
import { MessageCircle } from 'lucide-react';
