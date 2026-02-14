'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { products, getAllCategories, type Category } from '@/lib/products';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function ShopPage() {
    const categories = getAllCategories();
    const [activeCategory, setActiveCategory] = useState<string>('Todos');

    const filtered =
        activeCategory === 'Todos'
            ? products
            : products.filter((p) => p.category === activeCategory);

    return (
        <>
            {/* Hero Banner */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-rose-light/30 to-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <SectionTitle
                            title="Nuestra Tienda"
                            subtitle="Encontrá los zapatitos perfectos para tu bebé"
                        />
                    </AnimatedSection>
                </div>
            </section>

            {/* Filters & Grid */}
            <section className="pb-20 bg-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Filter Tabs */}
                    <AnimatedSection>
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeCategory === cat
                                        ? 'bg-rose-deep text-white shadow-md shadow-rose/20'
                                        : 'bg-cream text-charcoal/60 hover:bg-cream-dark hover:text-charcoal'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filtered.map((product, i) => (
                            <AnimatedSection key={product.slug} delay={i * 0.05}>
                                <Link
                                    href={`/producto/${product.slug}`}
                                    className="block group"
                                >
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
                                        {/* Image */}
                                        <div className="aspect-square bg-gradient-to-br from-rose-light/30 to-cream relative overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <ShoppingBag className="w-16 h-16 text-rose/30 group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-rose-deep text-white text-xs font-medium">
                                                -30%
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="p-5">
                                            <span className="text-[10px] font-body uppercase tracking-[2px] text-rose-deep block mb-1">
                                                {product.category}
                                            </span>
                                            <h3 className="font-heading text-lg font-semibold text-charcoal mb-1 group-hover:text-rose-deep transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-xs text-muted mb-3 line-clamp-1">
                                                {product.shortDescription}
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
                                                    Ver →
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Empty state */}
                    {filtered.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted text-lg">
                                No hay productos en esta categoría aún.
                            </p>
                        </div>
                    )}

                    {/* Bottom CTA */}
                    <AnimatedSection className="text-center mt-16">
                        <p className="text-muted mb-4">
                            ¿No encontrás lo que buscás?
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
