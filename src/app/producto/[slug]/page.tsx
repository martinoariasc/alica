'use client';

import { use, useState, useEffect } from 'react';
import { getProductBySlug, products } from '@/lib/products';
import { formatPrice, buildWhatsAppURL } from '@/lib/utils';
import { notFound } from 'next/navigation';
import AccessoryCatalog from '@/components/shop/AccessoryCatalog';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import {
    Shield, Clock, Truck, Heart, Award, ChevronRight, ArrowLeft,
    Star, Sparkles, MessageCircle, Ruler, Info, Box, Gift, Check
} from 'lucide-react';
import SizeChart from '@/components/home/SizeChart';
import BarefootBenefits from '@/components/home/BarefootBenefits';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import { motion, AnimatePresence } from 'framer-motion';

const LuxurySpacer = () => (
    <div className="w-full py-16 md:py-32 flex items-center justify-center pointer-events-none">
        <div className="w-px h-24 md:h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
    </div>
);

export default function ProductoPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const product = getProductBySlug(slug);
    const [showSticky, setShowSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const buyButton = document.getElementById('main-buy-button');
            if (buyButton) {
                const rect = buyButton.getBoundingClientRect();
                setShowSticky(rect.bottom < 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!product) {
        notFound();
    }

    // If this is the accessory catalog, render the special catalog view
    if (slug === 'accesorios-alica-catalogo') {
        return (
            <main className="bg-white min-h-screen">
                <div className="pt-32 pb-8 text-center">
                    <div className="max-w-7xl mx-auto px-6">
                        <nav className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-8">
                            <Link href="/" className="hover:text-gold transition-colors">Inicio</Link>
                            <span className="opacity-30">/</span>
                            <Link href="/shop" className="hover:text-gold transition-colors">Tienda</Link>
                            <span className="opacity-30">/</span>
                            <span className="text-stone-900 font-bold">Accesorios</span>
                        </nav>
                    </div>
                </div>
                <AccessoryCatalog />
            </main>
        );
    }

    const whatsappMsg = `¡Hola! Me interesa conocer más sobre el modelo "${product.emotionalName}" (${product.name}) 🍼`;
    const relatedProducts = products
        .filter((p) => p.slug !== product.slug && (p.category === product.category || p.gender === product.gender))
        .slice(0, 4);

    const isCombo = product.category === 'Ediciones Especiales' || product.slug.includes('trio') || product.slug.includes('capsula');

    return (
        <main className="bg-white min-h-screen selection:bg-rose-light/30">
            {/* Sticky Mobile Buy Bar */}
            <AnimatePresence>
                {showSticky && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        className="fixed bottom-0 left-0 w-full z-[100] bg-white/95 backdrop-blur-xl border-t border-linen/30 p-4 md:px-12 flex items-center justify-between shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]"
                    >
                        <div className="hidden md:flex flex-col text-left">
                            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{product.name}</span>
                            <span className="text-xl font-heading text-cacao">{formatPrice(product.price)}</span>
                        </div>
                        <Button
                            href={buildWhatsAppURL(whatsappMsg)}
                            variant="primary"
                            size="md"
                            external
                            className="w-full md:w-auto h-12 text-[10px]"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Consultar Disponibilidad
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Elevated Navigation */}
            <nav className="fixed top-0 left-0 w-full z-[60] px-6 py-6 bg-white/80 backdrop-blur-md border-b border-linen/20">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/shop" className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] font-bold text-cacao/60 hover:text-cacao transition-colors">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Tienda</span>
                    </Link>
                    <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.4em] text-stone-300">
                        <Link href="/" className="hover:text-gold transition-colors">ALICA</Link>
                    </div>
                </div>
            </nav>

            <div className="pt-24">
                <div className="max-w-[1500px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* LEFT: Media Gallery */}
                        <div className="relative">
                            <div className="lg:sticky lg:top-24">
                                <Swiper
                                    modules={[Pagination, Autoplay, Navigation]}
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 8000 }}
                                    className="w-full aspect-[4/5] product-swiper"
                                >
                                    {product.images.map((src, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="w-full h-full relative overflow-hidden bg-bg-warm/30">
                                                <img
                                                    src={src}
                                                    alt={`${product.name} - Vista ${i + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                        {/* RIGHT: Product Details */}
                        <div className="px-6 py-12 md:px-16 lg:px-24 xl:px-32">
                            <AnimatedSection direction="up" className="space-y-16">
                                {/* Header */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold">{product.category}</span>
                                        <div className="w-1 h-1 rounded-full bg-linen" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-300">Respetuoso</span>
                                    </div>

                                    <div className="space-y-4">
                                        <h1 className="font-heading text-5xl md:text-7xl text-cacao leading-tight tracking-tight text-left ml-0">
                                            {product.emotionalName}
                                        </h1>
                                        <p className="font-body text-xl text-stone-400 italic font-light text-left ml-0">
                                            &ldquo;{product.emotionalPhrase}&rdquo;
                                        </p>
                                    </div>

                                    <div className="pt-4 flex items-end gap-6 text-left">
                                        <span className="text-5xl font-light text-cacao tracking-tighter">
                                            {formatPrice(product.price)}
                                        </span>
                                        {product.oldPrice > product.price && (
                                            <span className="text-xl text-stone-300 line-through font-extralight italic mb-2">
                                                {formatPrice(product.oldPrice)}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Purchase Box */}
                                <div id="main-buy-button" className="space-y-8 bg-bg-warm/20 p-8 md:p-12 rounded-[2.5rem] border border-linen/30">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Sparkles className="w-4 h-4 text-gold" />
                                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cacao">{product.scarcityText}</span>
                                        </div>
                                        <p className="text-sm text-stone-500 font-light leading-relaxed text-left ml-0">
                                            Confeccionamos cada par artesanalmente siguiendo el ritmo de la naturaleza. Solicitá tu par exclusivo vía WhatsApp.
                                        </p>
                                    </div>

                                    <Button
                                        href={buildWhatsAppURL(whatsappMsg)}
                                        variant="primary"
                                        size="lg"
                                        external
                                        className="w-full h-20 text-[11px]"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Lo Quiero 🤍
                                    </Button>

                                    <div className="grid grid-cols-2 gap-6 pt-4">
                                        <div className="flex items-center gap-3">
                                            <Truck className="w-4 h-4 text-stone-400" />
                                            <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400">Envíos Nacionales</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Shield className="w-4 h-4 text-stone-400" />
                                            <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400">Calidad Boutique</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Info Blocks */}
                                <div className="space-y-12 divide-y divide-linen/30">
                                    {/* Description */}
                                    <div className="pt-4 space-y-6">
                                        <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold text-left ml-0">La Historia</h3>
                                        <p className="text-stone-500 font-light text-lg leading-relaxed text-left ml-0">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Benefits & Materials */}
                                    <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                                        <div className="space-y-6">
                                            <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold text-left ml-0">Beneficios</h3>
                                            <ul className="space-y-4">
                                                {product.benefits.map((b, i) => (
                                                    <li key={i} className="flex gap-3 text-sm text-stone-400 font-light">
                                                        <Check className="w-4 h-4 text-gold flex-shrink-0" />
                                                        {b}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-6">
                                            <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold text-left ml-0">Composición</h3>
                                            <ul className="space-y-4">
                                                {product.materials.map((m, i) => (
                                                    <li key={i} className="flex gap-3 text-sm text-stone-400 font-light">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-linen mt-1.5 flex-shrink-0" />
                                                        {m}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </div>

            <LuxurySpacer />
            <BarefootBenefits />
            <LuxurySpacer />
            <SizeChart />
            <LuxurySpacer />

            <div className="py-24 text-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-300 block mb-12">Experiencias Alica</span>
                <TestimonialCarousel />
            </div>

            <LuxurySpacer />

            {/* Related */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-20 space-y-4 text-center">
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold">Continuá el Viaje</span>
                        <h2 className="font-heading text-4xl md:text-5xl text-cacao">Otras Piezas que Podrían Encantarte</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {relatedProducts.map((p, idx) => (
                            <Link key={idx} href={`/producto/${p.slug}`} className="group block">
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                                </div>
                                <div className="space-y-3 text-center">
                                    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-stone-400">{p.category}</span>
                                    <h3 className="font-heading text-xl text-cacao group-hover:text-gold transition-colors">{p.emotionalName}</h3>
                                    <p className="text-sm font-light text-stone-400">{formatPrice(p.price)}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
