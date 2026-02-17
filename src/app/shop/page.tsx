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

const ageFilters: { label: string; value: AgeRange | 'todos' }[] = [
    { label: 'Todas las edades', value: 'todos' },
    { label: '0-6 meses', value: '0-6 meses' },
    { label: '6-12 meses', value: '6-12 meses' },
    { label: '1-2 años', value: '1-2 años' },
];

const useFilters: { label: string; value: UseType | 'todos' }[] = [
    { label: 'Ocasión', value: 'todos' },
    { label: 'Primeros Pasos', value: 'primeros pasos' },
    { label: 'Gateo', value: 'gateo' },
    { label: 'Regalo', value: 'regalo' },
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
        <main className="min-h-screen bg-[#FDFCFB]">
            {/* Immersive Hero Header */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-neutral-50/50" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-light/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <AnimatedSection>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-rose-deep/5 text-rose-deep text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                            Colección Permanente
                        </span>
                        <h1 className="font-heading text-5xl md:text-7xl text-charcoal mb-6 tracking-tight">
                            Nuestra <span className="italic font-light text-stone-400">Colección</span>
                        </h1>
                        <p className="font-body text-stone-500 max-w-xl mx-auto text-lg font-light leading-relaxed">
                            Diseñados para respetar el crecimiento natural, <br className="hidden md:block" />
                            creados para ser guardados como un tesoro.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Sticky Filter Bar - Luxury Style */}
            <div className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-y border-stone-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Categories Desktop */}
                        <div className="hidden md:flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
                            {genderFilters.map((f) => (
                                <button
                                    key={f.value}
                                    onClick={() => setGender(f.value)}
                                    className={`px-6 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${gender === f.value
                                        ? 'bg-charcoal text-white shadow-lg'
                                        : 'text-stone-400 hover:text-charcoal hover:bg-stone-50'
                                        }`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Selector / Info */}
                        <div className="md:hidden flex items-center justify-center gap-4 w-full">
                            <span className="text-xs font-bold tracking-widest uppercase text-stone-400">Filtrar por</span>
                            <div className="h-px w-8 bg-stone-200" />
                        </div>

                        {/* Dropdowns / Specifics */}
                        <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto md:overflow-visible no-scrollbar">
                            <select
                                value={age}
                                onChange={(e) => setAge(e.target.value as any)}
                                className="appearance-none bg-stone-50 border border-stone-100 rounded-full px-6 py-2 text-xs font-medium text-stone-600 focus:outline-none focus:ring-2 focus:ring-rose-light/50 cursor-pointer min-w-[140px]"
                            >
                                {ageFilters.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                            </select>

                            <select
                                value={use}
                                onChange={(e) => setUse(e.target.value as any)}
                                className="appearance-none bg-stone-50 border border-stone-100 rounded-full px-6 py-2 text-xs font-medium text-stone-600 focus:outline-none focus:ring-2 focus:ring-rose-light/50 cursor-pointer min-w-[140px]"
                            >
                                {useFilters.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                            </select>

                            {hasActiveFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="p-2 rounded-full bg-rose-deep/10 text-rose-deep hover:bg-rose-deep/20 transition-colors"
                                    title="Limpiar filtros"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Slow Fashion Banner Reimagined */}
                    <AnimatedSection>
                        <div className="mb-16 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left bg-stone-900 text-stone-100 p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-rose-deep/20 transition-colors duration-700" />
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                <Sparkles className="w-6 h-6 text-rose-deep" />
                            </div>
                            <div>
                                <h4 className="font-heading text-xl mb-1">Tu par se cose exclusivamente para vos</h4>
                                <p className="font-body text-sm font-light text-stone-400">
                                    En un mundo industrial, nosotros elegimos lo artesanal. <span className="text-white font-medium">Entrega en 7-10 días hábiles.</span>
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

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

                                                {/* Mini Tags */}
                                                <div className="absolute bottom-6 left-6 flex gap-2">
                                                    <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-3 py-1 rounded-full text-[10px] font-medium tracking-wide">
                                                        {product.ageRange}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Product Info - Refined Typography */}
                                            <div className="mt-8 text-center space-y-3">
                                                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-rose-deep/60 block">
                                                    {product.category}
                                                </span>
                                                <h3 className="font-heading text-2xl md:text-3xl text-charcoal group-hover:text-rose-deep transition-colors duration-300">
                                                    {product.emotionalName}
                                                </h3>
                                                <p className="font-body text-sm text-stone-400 italic font-light max-w-[240px] mx-auto line-clamp-1">
                                                    "{product.emotionalPhrase}"
                                                </p>
                                                <div className="flex items-center justify-center gap-3 pt-2">
                                                    <span className="text-sm text-stone-300 line-through font-light">
                                                        {formatPrice(product.oldPrice)}
                                                    </span>
                                                    <span className="text-xl font-medium text-charcoal">
                                                        {formatPrice(product.price)}
                                                    </span>
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

            {/* Bottom Emotional CTA */}
            <section className="py-32 bg-stone-50 overflow-hidden relative">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <AnimatedSection blur>
                        <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-8 leading-tight">
                            ¿Dudas con el talle o el modelo?
                        </h2>
                        <p className="font-body text-lg text-stone-500 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                            No te preocupes. Escribinos ahora mismo y una mamá de nuestro equipo te ayudará a elegir el talle perfecto según el piecito de tu bebé.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button
                                href="https://wa.me/595981000000" // Replace with real number or utility
                                variant="primary"
                                size="lg"
                                className="min-w-[260px] shadow-2xl"
                                external
                            >
                                Escribir por WhatsApp 🍼
                            </Button>
                            <Button href="/contacto" variant="outline" size="lg" className="min-w-[260px]">
                                Ver guía de talles
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
