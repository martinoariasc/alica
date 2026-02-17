'use client';

import { useState, useMemo } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { products, type Gender, type UseType } from '@/lib/products';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { Heart, Filter, X, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const genderFilters: { label: string; value: Gender | 'todos' }[] = [
    { label: 'Todo', value: 'todos' },
    { label: 'Nenes', value: 'nene' },
    { label: 'Nenas', value: 'nena' },
];

export default function ShopPage() {
    const [gender, setGender] = useState<Gender | 'todos'>('todos');
    const [use, setUse] = useState<UseType | 'todos'>('todos');
    const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

    const filtered = useMemo(() => {
        let result = products.filter((p) => {
            const genderMatch = gender === 'todos' || p.gender === gender || p.gender === 'unisex';
            const useMatch = use === 'todos' || p.use.includes(use);
            return genderMatch && useMatch;
        });

        if (sortBy === 'price-asc') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [gender, use, sortBy]);

    const individualProducts = useMemo(() => {
        return filtered.filter(p => p.category !== 'Ediciones Especiales' && p.category !== 'Colección Bautismo');
    }, [filtered]);

    const comboProducts = useMemo(() => {
        return filtered.filter(p => p.category === 'Ediciones Especiales' || p.category === 'Colección Bautismo');
    }, [filtered]);

    const hasActiveFilters = gender !== 'todos' || use !== 'todos';

    const clearFilters = () => {
        setGender('todos');
        setUse('todos');
        setSortBy('default');
    };

    return (
        <main className="min-h-screen bg-transparent">
            {/* Header Spacer */}
            <div className="h-20" />

            {/* Sticky Filter Bar - Minimalist */}
            <div className="sticky top-[72px] md:top-[80px] z-30 bg-bg/60 backdrop-blur-md border-b border-stone-100">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Categories Desktop */}
                        <div className="hidden md:flex items-center gap-6">
                            {genderFilters.map((f) => (
                                <button
                                    key={f.value}
                                    onClick={() => setGender(f.value)}
                                    className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${gender === f.value
                                        ? 'text-cacao border-b-2 border-cacao pb-1'
                                        : 'text-cacao/40 hover:text-cacao/70'
                                        }`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>

                        {/* Dropdowns / Specifics */}
                        <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto no-scrollbar">
                            {hasActiveFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="text-[10px] font-bold tracking-[0.1em] uppercase text-rose-deep"
                                >
                                    Limpiar filtros
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Individual Collection Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-rose-deep block opacity-60 mb-2">Selección Individual</span>
                        <h2 className="font-heading text-4xl md:text-5xl text-charcoal text-left ml-0">Nuestra Colección</h2>
                    </div>

                    <AnimatePresence mode="popLayout">
                        {individualProducts.length > 0 ? (
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
                                layout
                            >
                                {individualProducts.map((product, i) => (
                                    <motion.div
                                        key={product.slug}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5, delay: i * 0.05 }}
                                    >
                                        <Link href={`/producto/${product.slug}`} className="group block">
                                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-stone-100 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]">
                                                <Image
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="absolute top-6 left-6">
                                                    {product.isBestSeller && (
                                                        <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-charcoal shadow-sm">
                                                            Favorito
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="absolute top-6 right-6">
                                                    <span className="bg-rose-deep text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-rose-deep/20">
                                                        -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="mt-8 text-center space-y-4">
                                                <div className="space-y-1">
                                                    <h3 className="font-heading text-2xl text-cacao group-hover:text-rose-deep transition-colors duration-500 font-light tracking-tight">
                                                        {product.emotionalName}
                                                    </h3>
                                                    <p className="text-xs text-stone-400 italic font-light truncate px-4">
                                                        "{product.emotionalPhrase}"
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-center gap-3">
                                                    <span className="text-xs text-cacao/40 line-through font-medium">
                                                        {formatPrice(product.oldPrice)}
                                                    </span>
                                                    <span className="text-xl font-bold text-cacao tracking-tight">
                                                        {formatPrice(product.price)}
                                                    </span>
                                                </div>
                                                <div className="pt-2">
                                                    <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cacao text-white text-[10px] font-bold uppercase tracking-[0.2em] group-hover:bg-gold transition-all duration-500">
                                                        <span>Ver detalle</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <div className="py-20 text-center opacity-50 italic">Pronto más modelos disponibles...</div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Special Editions / Combos Section - PREMIUM STYLE */}
            {comboProducts.length > 0 && (
                <section className="py-32 bg-bg-warm relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-20">
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <Sparkles className="w-5 h-5 text-gold animate-pulse" />
                                <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-gold">Sets Exclusivos</span>
                                <Sparkles className="w-5 h-5 text-gold animate-pulse" />
                            </div>
                            <h2 className="font-heading text-5xl md:text-7xl text-cacao italic">Experiencias ALICA</h2>
                            <p className="font-body text-cacao/50 mt-6 max-w-2xl mx-auto text-lg italic">
                                Combinaciones diseñadas para acompañar cada etapa con la elegancia y suavidad que tu bebé merece.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                            {comboProducts.map((product) => (
                                <motion.div
                                    key={product.slug}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <Link href={`/producto/${product.slug}`} className="block">
                                        <div className="bg-white rounded-[2.5rem] p-4 shadow-xl border border-stone-100 transition-all duration-700 group-hover:shadow-rose-light/20 relative overflow-hidden">
                                            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden">
                                                <Image
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </div>

                                            <div className="p-8 text-center sm:text-left">
                                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
                                                    <div>
                                                        <h3 className="font-heading text-3xl text-cacao group-hover:text-rose-deep transition-colors duration-500 tracking-tight">
                                                            {product.emotionalName}
                                                        </h3>
                                                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold mt-1">Edición de Autor</p>
                                                    </div>
                                                    <div className="flex flex-col items-center sm:items-end">
                                                        <span className="text-sm text-cacao/30 line-through font-medium leading-none">{formatPrice(product.oldPrice)}</span>
                                                        <span className="text-3xl font-bold text-cacao tracking-tighter">{formatPrice(product.price)}</span>
                                                    </div>
                                                </div>

                                                <p className="text-sm text-cacao/60 italic leading-relaxed mb-8 line-clamp-2">
                                                    "{product.description}"
                                                </p>

                                                <div className="w-full flex items-center justify-between pt-6 border-t border-stone-50">
                                                    <span className="text-[10px] font-bold tracking-widest uppercase text-rose-deep">{product.scarcityText}</span>
                                                    <div className="text-gold group-hover:translate-x-2 transition-transform duration-500">
                                                        <Sparkles className="w-5 h-5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {filtered.length === 0 && (
                <div className="py-40 text-center">
                    <div className="text-5xl mb-6">✨</div>
                    <h3 className="font-heading text-2xl text-charcoal mb-2">Buscando el par ideal</h3>
                    <p className="text-stone-400 font-light mb-8">No encontramos resultados con esos filtros.</p>
                    <Button onClick={clearFilters} variant="outline">Ver todo</Button>
                </div>
            )}
        </main>
    );
}
