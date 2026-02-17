'use client';

import { useState, useMemo } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { products, type Gender, type AgeRange, type UseType } from '@/lib/products';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { Heart, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const genderFilters: { label: string; value: Gender | 'todos' }[] = [
    { label: 'Todos', value: 'todos' },
    { label: '👦 Nenes', value: 'nene' },
    { label: '👧 Nenas', value: 'nena' },
    { label: '🤍 Unisex', value: 'unisex' },
];

const ageFilters: { label: string; value: AgeRange | 'todos' }[] = [
    { label: 'Todas las edades', value: 'todos' },
    { label: '0-6 meses', value: '0-6 meses' },
    { label: '6-12 meses', value: '6-12 meses' },
    { label: '1-2 años', value: '1-2 años' },
];

const useFilters: { label: string; value: UseType | 'todos' }[] = [
    { label: 'Todos los usos', value: 'todos' },
    { label: '👣 Primeros pasos', value: 'primeros pasos' },
    { label: '🐛 Gateo', value: 'gateo' },
    { label: '🎁 Regalo', value: 'regalo' },
    { label: '☀️ Día a día', value: 'día a día' },
    { label: '✨ Ocasión especial', value: 'ocasión especial' },
];

export default function ShopPage() {
    const [gender, setGender] = useState<Gender | 'todos'>('todos');
    const [age, setAge] = useState<AgeRange | 'todos'>('todos');
    const [use, setUse] = useState<UseType | 'todos'>('todos');
    const [showFilters, setShowFilters] = useState(false);

    const filtered = useMemo(() => {
        let result = products;
        if (gender !== 'todos') {
            result = result.filter((p) => p.gender === gender || p.gender === 'unisex');
        }
        if (age !== 'todos') {
            result = result.filter((p) => p.ageRange === age);
        }
        if (use !== 'todos') {
            result = result.filter((p) => p.use.includes(use));
        }
        return result;
    }, [gender, age, use]);

    const hasActiveFilters = gender !== 'todos' || age !== 'todos' || use !== 'todos';

    const clearFilters = () => {
        setGender('todos');
        setAge('todos');
        setUse('todos');
    };

    return (
        <>
            {/* Hero Banner */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-rose-light/10 to-transparent relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-pink-soft/20 rounded-full blur-[120px] -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-soft/20 rounded-full blur-[100px] translate-y-1/2" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                    <AnimatedSection>
                        <SectionTitle
                            title="Nuestra Colección"
                            subtitle="Cada par tiene una historia esperándote"
                        />
                        <p className="text-center text-muted mt-4 max-w-lg mx-auto">
                            Descubrí el zapatito perfecto para tu bebé. Todos hechos a mano con amor y materiales premium.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Filters & Grid */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Production Time Banner */}
                    <AnimatedSection>
                        <div className="bg-charcoal text-white rounded-2xl p-4 mb-10 text-center max-w-2xl mx-auto">
                            <p className="text-sm md:text-base font-light">
                                ⏳ <strong>Slow Fashion:</strong> Todos nuestros zapatitos son hechos a mano bajo pedido.
                                <span className="block sm:inline"> El tiempo de confección es de <strong>7 a 10 días hábiles</strong>.</span>
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Filter Toggle (Mobile) */}
                    <div className="md:hidden mb-6">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white border border-rose-light text-charcoal font-medium text-sm transition-all hover:border-rose-deep cursor-pointer"
                        >
                            <Filter className="w-4 h-4" />
                            {showFilters ? 'Ocultar filtros' : 'Filtrar productos'}
                            {hasActiveFilters && (
                                <span className="w-5 h-5 rounded-full bg-rose-deep text-white text-[10px] flex items-center justify-center">
                                    !
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Filter Sections */}
                    <AnimatedSection>
                        <div className={`space-y-4 mb-10 ${showFilters ? 'block' : 'hidden md:block'}`}>
                            {/* Gender Filter */}
                            <div className="flex flex-wrap justify-center gap-2">
                                {genderFilters.map((f) => (
                                    <button
                                        key={f.value}
                                        onClick={() => setGender(f.value)}
                                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${gender === f.value
                                            ? 'bg-rose-deep text-white shadow-md shadow-rose/20'
                                            : 'bg-white text-charcoal/60 hover:bg-rose-light hover:text-charcoal border border-transparent hover:border-rose-light'
                                            }`}
                                    >
                                        {f.label}
                                    </button>
                                ))}
                            </div>

                            {/* Age Filter */}
                            <div className="flex flex-wrap justify-center gap-2">
                                {ageFilters.map((f) => (
                                    <button
                                        key={f.value}
                                        onClick={() => setAge(f.value)}
                                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${age === f.value
                                            ? 'bg-charcoal text-white shadow-md'
                                            : 'bg-white text-charcoal/50 hover:bg-bg-warm hover:text-charcoal border border-transparent hover:border-charcoal/10'
                                            }`}
                                    >
                                        {f.label}
                                    </button>
                                ))}
                            </div>

                            {/* Use Filter */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {useFilters.map((f) => (
                                    <button
                                        key={f.value}
                                        onClick={() => setUse(f.value)}
                                        className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-500 cursor-pointer ${use === f.value
                                            ? 'bg-stone-900 text-white shadow-xl scale-105'
                                            : 'bg-white/40 backdrop-blur-sm text-stone-500 hover:bg-white hover:text-stone-900 border border-stone-200/50 shadow-sm'
                                            }`}
                                    >
                                        {f.label}
                                    </button>
                                ))}
                            </div>

                            {/* Clear Filters */}
                            {hasActiveFilters && (
                                <div className="text-center">
                                    <button
                                        onClick={clearFilters}
                                        className="inline-flex items-center gap-1 text-xs text-muted hover:text-rose-deep transition-colors cursor-pointer"
                                    >
                                        <X className="w-3 h-3" />
                                        Limpiar filtros
                                    </button>
                                </div>
                            )}
                        </div>
                    </AnimatedSection>

                    {/* Results count */}
                    <p className="text-center text-sm text-muted mb-8">
                        {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
                    </p>

                    {/* Product Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        layout
                    >
                        <AnimatePresence mode="popLayout">
                            {filtered.map((product, i) => (
                                <motion.div
                                    key={product.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: i * 0.03 }}
                                >
                                    <Link
                                        href={`/producto/${product.slug}`}
                                        className="block group"
                                    >
                                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-rose-light/50">
                                            {/* Image */}
                                            <div className="aspect-square bg-bg-warm relative overflow-hidden">
                                                <img
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-rose-deep text-white text-xs font-medium">
                                                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                                                </div>
                                                {/* Wishlist */}
                                                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-rose-light cursor-pointer">
                                                    <Heart className="w-4 h-4 text-rose-deep" />
                                                </div>
                                                {/* Gender/Age badge */}
                                                <div className="absolute bottom-3 left-3 flex gap-1">
                                                    <span className="px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-sm text-[10px] text-charcoal/70 font-medium">
                                                        {product.ageRange}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Info */}
                                            <div className="p-5">
                                                <span className="text-[9px] font-body uppercase tracking-[3px] text-rose-deep/60 block mb-2">
                                                    {product.category}
                                                </span>
                                                <h3 className="font-heading text-xl font-medium text-charcoal mb-2 group-hover:text-rose-deep transition-colors">
                                                    {product.emotionalName}
                                                </h3>
                                                <p className="text-[11px] text-muted mb-4 line-clamp-1 italic font-light">
                                                    {product.emotionalPhrase}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xs text-muted line-through">
                                                            {formatPrice(product.oldPrice)}
                                                        </span>
                                                        <span className="text-base font-semibold text-charcoal">
                                                            {formatPrice(product.price)}
                                                        </span>
                                                    </div>
                                                    <span className="text-xs text-rose-deep font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        Ver detalle →
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty state */}
                    {filtered.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-20"
                        >
                            <span className="text-5xl mb-4 block">🔍</span>
                            <p className="text-muted text-lg mb-4">
                                No encontramos productos con estos filtros.
                            </p>
                            <button
                                onClick={clearFilters}
                                className="text-rose-deep font-medium hover:underline cursor-pointer"
                            >
                                Ver todos los productos
                            </button>
                        </motion.div>
                    )}

                    {/* Bottom CTA */}
                    <AnimatedSection className="text-center mt-16">
                        <p className="text-muted mb-4">
                            ¿No encontrás lo que buscás? ¡Te ayudamos!
                        </p>
                        <Button
                            href="/contacto"
                            variant="outline"
                        >
                            Consultanos por WhatsApp
                        </Button>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
