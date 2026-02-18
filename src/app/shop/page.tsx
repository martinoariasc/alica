'use client';

import { useState, useMemo } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { products, type Gender, type UseType } from '@/lib/products';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { Heart, Filter, X, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const genderFilters: { label: string; value: Gender | 'todos' }[] = [
    { label: 'Todas las piezas', value: 'todos' },
    { label: 'Para Nenes', value: 'nene' },
    { label: 'Para Nenas', value: 'nena' },
];

export default function ShopPage() {
    const [gender, setGender] = useState<Gender | 'todos'>('todos');
    const [use, setUse] = useState<UseType | 'todos'>('todos');

    const filtered = useMemo(() => {
        return products.filter((p) => {
            const genderMatch = gender === 'todos' || p.gender === gender || p.gender === 'unisex';
            const useMatch = use === 'todos' || p.use.includes(use);
            return genderMatch && useMatch;
        });
    }, [gender, use]);

    const individualProducts = useMemo(() => {
        return filtered.filter(p => !p.slug.includes('trio') && !p.slug.includes('capsula') && !p.slug.includes('set') && p.category !== 'Accesorios');
    }, [filtered]);

    const specialEditions = useMemo(() => {
        return filtered.filter(p => (p.category === 'Ediciones Especiales' || p.category === 'Colección Bautismo') && !p.slug.includes('accesorios'));
    }, [filtered]);

    return (
        <main className="min-h-screen bg-white">
            {/* Minimalist Header */}
            <section className="pt-40 pb-20 px-6 bg-bg-warm/10">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection direction="up" className="space-y-6">
                        <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-gold block">Showroom Virtual</span>
                        <h1 className="font-heading text-5xl md:text-8xl text-cacao leading-tight">Nuestra <br /><span className="italic font-light text-stone-300">Colección.</span></h1>
                    </AnimatedSection>
                </div>
            </section>

            {/* Elegant Filter Bar */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-linen/30">
                <div className="max-w-7xl mx-auto px-6 py-6 ring-1 ring-gold/5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-10 overflow-x-auto no-scrollbar py-2">
                            {genderFilters.map((f) => (
                                <button
                                    key={f.value}
                                    onClick={() => setGender(f.value)}
                                    className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 whitespace-nowrap ${gender === f.value ? 'text-cacao border-b border-gold/40' : 'text-stone-300 hover:text-stone-500'
                                        }`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-gold">{filtered.length} Modelos encontrados</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Individual Gallery - Editorial Style */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                        {individualProducts.map((product, i) => (
                            <AnimatedSection key={product.slug} delay={i * 0.05} blur>
                                <Link href={`/producto/${product.slug}`} className="group block">
                                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-bg-warm/20 transition-all duration-1000 group-hover:shadow-premium-gold group-hover:-translate-y-2">
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                                        />
                                        {/* Minimalist Badge */}
                                        <div className="absolute top-8 left-8 flex flex-col gap-3">
                                            {product.isBestSeller && (
                                                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                                                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gold">Favorito</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-10 text-center space-y-4">
                                        <div className="space-y-2">
                                            <h3 className="font-heading text-3xl text-cacao group-hover:text-gold transition-colors duration-500 tracking-tight">
                                                {product.emotionalName}
                                            </h3>
                                            <p className="font-body text-stone-400 text-sm font-light italic">&ldquo;{product.emotionalPhrase}&rdquo;</p>
                                        </div>
                                        <div className="flex flex-col items-center gap-4 pt-2">
                                            <div className="flex items-baseline gap-4">
                                                <span className="text-2xl font-light text-cacao tracking-tighter">{formatPrice(product.price)}</span>
                                                {product.oldPrice > product.price && (
                                                    <span className="text-sm text-stone-200 line-through font-extralight italic">{formatPrice(product.oldPrice)}</span>
                                                )}
                                            </div>
                                            <div className="w-8 h-px bg-gold/20" />
                                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700">Explorar Detalles</span>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Editions - Immersive Horizontal Banner Style */}
            {specialEditions.length > 0 && (
                <section className="py-40 bg-bg-warm/20 border-y border-linen/30">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-32 space-y-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-gold">Experiencias ALICA</span>
                            <h2 className="font-heading text-4xl md:text-7xl text-cacao">Packs & Cápsulas</h2>
                            <p className="font-body text-stone-400 italic font-light text-lg">Sets pensados para regalar o para prepararse para su llegada.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {specialEditions.map((product) => (
                                <Link key={product.slug} href={`/producto/${product.slug}`} className="group block h-full">
                                    <div className="bg-white rounded-[3rem] p-6 shadow-sm border border-linen/30 transition-all duration-1000 group-hover:shadow-2xl h-full flex flex-col items-center text-center">
                                        <div className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-10">
                                            <Image
                                                src={product.images[0]}
                                                alt={product.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-[3s]"
                                            />
                                        </div>
                                        <div className="space-y-6 flex-1 px-4">
                                            <h3 className="font-heading text-4xl text-cacao">{product.emotionalName}</h3>
                                            <p className="text-stone-400 font-light italic leading-relaxed">&ldquo;{product.description}&rdquo;</p>
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="flex items-baseline gap-4">
                                                    <span className="text-4xl font-light text-cacao">{formatPrice(product.price)}</span>
                                                    <span className="text-sm text-rose-deep font-bold uppercase tracking-widest">{product.scarcityText}</span>
                                                </div>
                                                <Button variant="luxury" size="md" className="w-full">Ver Detalles del Set</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Empty State */}
            {filtered.length === 0 && (
                <div className="py-60 text-center space-y-8">
                    <Sparkles className="w-12 h-12 text-gold/30 mx-auto" />
                    <h3 className="font-heading text-3xl text-cacao italic">Buscando la perfección...</h3>
                    <p className="text-stone-400 font-light">Prontos nuevas modelos disponibles para esta selección.</p>
                    <button onClick={() => setGender('todos')} className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold border-b border-gold/20 pb-2">Ver Toda la Tienda</button>
                </div>
            )}
        </main>
    );
}
