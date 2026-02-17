'use client';

import { useState, useMemo } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { products, type Gender, type AgeRange, type UseType } from '@/lib/products';
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
    const [age, setAge] = useState<AgeRange | 'todos'>('todos');
    const [use, setUse] = useState<UseType | 'todos'>('todos');
    const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

    const filtered = useMemo(() => {
        let result = [...products];
        if (gender !== 'todos') {
            result = result.filter((p) => p.gender === gender || p.gender === 'unisex');
        }
        if (age !== 'todos') {
            result = result.filter((p) => p.ageRange === age);
        }
        if (use !== 'todos') {
            result = result.filter((p) => p.use.includes(use));
        }

        if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
        if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);

        return result;
    }, [gender, age, use, sortBy]);

    const hasActiveFilters = gender !== 'todos' || age !== 'todos' || use !== 'todos';

    const clearFilters = () => {
        setGender('todos');
        setAge('todos');
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

                        {/* Dropdowns / Specifics - Removed Age and Use as per request */}
                        <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto no-scrollbar">
                            {hasActiveFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="text-[10px] font-bold tracking-[0.1em] uppercase text-rose-deep"
                                >
                                    Limpiar
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {filtered.length > 0 ? (
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 lg:gap-16"
                                layout
                            >
                                {filtered.map((product, i) => (
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

                                                {/* Sophisticated Overlays */}
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                                                {/* Badges */}
                                                <div className="absolute top-6 left-6 flex flex-col gap-2">
                                                    {product.isBestSeller && (
                                                        <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-charcoal shadow-sm">
                                                            Más amado
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="absolute top-6 right-6">
                                                    <span className="bg-rose-deep text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-rose-deep/20">
                                                        -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                                                    </span>
                                                </div>

                                                {/* Mini Tags - Higher Contrast */}
                                                <div className="absolute bottom-6 left-6 flex gap-2">
                                                    <span className="bg-white/80 backdrop-blur-md text-cacao border border-stone-100 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide shadow-sm">
                                                        {product.ageRange}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Product Info - High Contrast & Action Button */}
                                            <div className="mt-8 text-center space-y-4">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-rose-deep block">
                                                        {product.category}
                                                    </span>
                                                    <h3 className="font-heading text-2xl md:text-3xl text-cacao group-hover:text-rose-deep transition-colors duration-300 font-medium">
                                                        {product.emotionalName}
                                                    </h3>
                                                </div>

                                                <p className="font-body text-base text-cacao italic font-medium max-w-[260px] mx-auto line-clamp-1 opacity-90">
                                                    "{product.emotionalPhrase}"
                                                </p>

                                                <div className="flex flex-col items-center gap-4 pt-2">
                                                    <div className="flex items-center justify-center gap-3">
                                                        <span className="text-sm text-cacao/60 line-through font-medium decoration-rose-deep/40 decoration-2">
                                                            {formatPrice(product.oldPrice)}
                                                        </span>
                                                        <span className="text-2xl font-bold text-cacao tracking-tight">
                                                            {product.slug === 'accesorios-alica-catalogo' ? 'Desde ' : ''}
                                                            {formatPrice(product.price)}
                                                        </span>
                                                    </div>

                                                    {/* Dedicated Call to Action for Intuition */}
                                                    <div className="w-full pt-2">
                                                        <div className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-cacao text-white text-[11px] font-bold uppercase tracking-[0.2em] group-hover:bg-rose-deep transition-all duration-500 shadow-lg shadow-cacao/10 group-hover:shadow-rose-deep/20">
                                                            <span>Lo quiero</span>
                                                            <Heart className="w-3.5 h-3.5 fill-current" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="py-40 text-center"
                            >
                                <div className="text-5xl mb-6">✨</div>
                                <h3 className="font-heading text-2xl text-charcoal mb-2">Ese par está pronto a llegar</h3>
                                <p className="text-stone-400 font-light mb-8">No encontramos resultados para tu búsqueda.</p>
                                <Button onClick={clearFilters} variant="outline">Ver todo lo disponible</Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </main>
    );
}

