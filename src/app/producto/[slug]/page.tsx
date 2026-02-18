'use client';

import { use } from 'react';
import { getProductBySlug, products } from '@/lib/products';
import { formatPrice, buildWhatsAppURL } from '@/lib/utils';
import { notFound } from 'next/navigation';
import AccessoryCatalog from '@/components/shop/AccessoryCatalog';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Clock, Truck, Heart, Award, ChevronRight, ArrowLeft, Star, Sparkles, MessageCircle } from 'lucide-react';

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

    // If this is the accessory catalog, render the special catalog view
    if (slug === 'accesorios-alica-catalogo') {
        return (
            <main className="bg-transparent min-h-screen">
                <div className="pt-32 pb-8">
                    <div className="max-w-7xl mx-auto px-6">
                        <nav className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-stone-400">
                            <Link href="/" className="hover:text-rose-deep transition-colors">Inicio</Link>
                            <span className="opacity-30">/</span>
                            <Link href="/shop" className="hover:text-rose-deep transition-colors">Tienda</Link>
                            <span className="opacity-30">/</span>
                            <span className="text-stone-900 font-bold">Accesorios</span>
                        </nav>
                    </div>
                </div>
                <AccessoryCatalog />
            </main>
        );
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
        <main className="bg-bg min-h-screen relative">
            {/* Ambient Background Element */}
            <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-champagne/40 to-transparent pointer-events-none" />

            {/* Breadcrumb - Further down and more elegant */}
            <div className="pt-40 pb-12 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-stone-400/80">
                        <Link href="/" className="hover:text-rose-deep transition-all duration-300">Inicio</Link>
                        <div className="w-1 h-1 rounded-full bg-stone-200" />
                        <Link href="/shop" className="hover:text-rose-deep transition-all duration-300">Tienda</Link>
                        <div className="w-1 h-1 rounded-full bg-stone-200" />
                        <span className="text-stone-900 font-bold tracking-[0.4em]">{product.category}</span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <section className="pb-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                        {/* Column 1: Gallery (7 cols) - Vertical Scroll Aesthetic or Refined Swiper */}
                        <div className="lg:col-span-7">
                            <AnimatedSection direction="none" className="space-y-12">
                                <div className="space-y-8">
                                    <div className="rounded-[3rem] overflow-hidden bg-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] relative group border border-linen/30">
                                        <Swiper
                                            modules={[Pagination, Autoplay]}
                                            pagination={{
                                                clickable: true,
                                                dynamicBullets: true
                                            }}
                                            autoplay={{ delay: 8000 }}
                                            className="w-full aspect-square md:aspect-[5/6] product-gallery-swiper"
                                        >
                                            {product.images.map((src, i) => (
                                                <SwiperSlide key={i} className="flex items-center justify-center bg-white">
                                                    <div className="w-full h-full relative p-4 md:p-8">
                                                        <img
                                                            src={src}
                                                            alt={`${product.name} visualización ${i + 1}`}
                                                            className="w-full h-full object-contain hover:scale-105 transition-transform duration-[2s] ease-out"
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>

                                        {/* Luxury Badge */}
                                        {product.isBestSeller && (
                                            <div className="absolute top-8 left-8 z-10 bg-white/80 backdrop-blur-xl px-6 py-2.5 rounded-full border border-white/50 shadow-2xl flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-cacao">Edición Seleccionada</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Intuitive Navigation Bar */}
                                    <div className="flex flex-col items-center gap-4">
                                        <p className="text-[10px] uppercase tracking-[0.4em] text-cacao/30 font-bold mb-2">Deslizá para ver el alma de la pieza</p>
                                        <div className="flex gap-3">
                                            {product.images.map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-rose-deep/20" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Column 2: Buy Details (5 cols) */}
                        <div className="lg:col-span-5 pt-8 lg:pt-0">
                            <div className="sticky top-40 space-y-16">

                                {/* Identification & Emotional Hook */}
                                <AnimatedSection delay={0.1}>
                                    <div className="space-y-8">
                                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-nude/30 border border-gold/10">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                                            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-gold-deep">
                                                Colección {product.category}
                                            </span>
                                        </div>
                                        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-cacao leading-[1.1] tracking-tight">
                                            {product.emotionalName}
                                        </h1>
                                        <div className="relative pl-10">
                                            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/40 via-gold/10 to-transparent" />
                                            <p className="font-body text-xl md:text-2xl text-stone-400 italic font-extralight leading-relaxed italic">
                                                &ldquo;{product.emotionalPhrase}&rdquo;
                                            </p>
                                        </div>
                                    </div>
                                </AnimatedSection>

                                {/* Pricing & Exclusive Offer */}
                                <AnimatedSection delay={0.2}>
                                    <div className="flex flex-col gap-10 p-12 rounded-[3.5rem] bg-white border border-linen/20 shadow-[0_45px_100px_-40px_rgba(42,31,27,0.12)] relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-[60px] -mr-16 -mt-16 group-hover:bg-gold/10 transition-colors duration-700" />

                                        <div className="flex flex-col gap-4">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-300">Inversión en Ternura</span>
                                            <div className="flex items-baseline gap-6 flex-wrap">
                                                <span className="text-6xl md:text-7xl font-normal text-cacao tracking-tighter">{formatPrice(product.price)}</span>
                                                {product.oldPrice > product.price && (
                                                    <div className="flex flex-col">
                                                        <span className="text-xl text-stone-300 line-through font-light decoration-gold/30">{formatPrice(product.oldPrice)}</span>
                                                        <span className="text-[9px] font-bold text-rose-deep uppercase tracking-[0.3em]">Precio de Galería</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-5 py-4 border-t border-linen/30">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-deep animate-pulse" />
                                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cacao/70">{product.scarcityText}</span>
                                        </div>
                                    </div>
                                </AnimatedSection>

                                {/* Crafted Journey */}
                                <AnimatedSection delay={0.3}>
                                    <div className="space-y-6">
                                        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">La Historia detrás del par</h3>
                                        <p className="text-lg md:text-xl text-cacao/80 font-light leading-relaxed tracking-wide first-letter:text-4xl first-letter:font-heading first-letter:mr-1 first-letter:float-left first-letter:text-gold">
                                            {product.description}
                                        </p>
                                    </div>
                                </AnimatedSection>

                                {/* Actions - High Contrast */}
                                <AnimatedSection delay={0.4}>
                                    <div className="flex flex-col gap-5">
                                        <Button
                                            href={buildWhatsAppURL(whatsappMsg)}
                                            variant="whatsapp"
                                            size="lg"
                                            external
                                            className="w-full h-20 text-lg flex items-center justify-center gap-4 rounded-full shadow-2xl shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-500 animate-soft-pulse"
                                        >
                                            <MessageCircle className="w-6 h-6" />
                                            Lo Quiero 🤍
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
            <section className="py-24 bg-bg-warm/40 backdrop-blur-sm">
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

