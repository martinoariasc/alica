'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

const upsellProducts = [
    {
        slug: 'vincha-especial',
        name: 'Vinchas Especiales',
        price: 30000,
        oldPrice: 39000,
        emoji: '🎀',
        description: 'El toque perfecto para cualquier outfit.',
    },
    {
        slug: 'baberito-clasico',
        name: 'Baberitos',
        price: 35000,
        oldPrice: 45500,
        emoji: '✨',
        description: 'Estilo y funcionalidad para tu bebé.',
    },
    {
        slug: 'bandana-bebe',
        name: 'Bandanas',
        price: 35000,
        oldPrice: 45500,
        emoji: '🧣',
        description: 'La opción más trendy para los peques.',
    },
];

export default function UpsellSection() {
    return (
        <section className="py-20 md:py-28 bg-bg-warm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <AnimatedSection>
                    <SectionTitle
                        title="Completá el look"
                        subtitle="Accesorios que hacen la diferencia"
                    />
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {upsellProducts.map((product, i) => (
                        <AnimatedSection key={product.slug} delay={i * 0.15}>
                            <Link href={`/producto/${product.slug}`} className="block group">
                                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                                    <div className="aspect-[4/3] bg-gradient-to-br from-cream to-rose-light/30 flex items-center justify-center relative overflow-hidden">
                                        <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                                            {product.emoji}
                                        </span>
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="font-heading text-xl font-semibold text-charcoal mb-2 group-hover:text-rose-deep transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-muted mb-4">
                                            {product.description}
                                        </p>
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-sm text-muted line-through">
                                                {formatPrice(product.oldPrice)}
                                            </span>
                                            <span className="text-lg font-semibold text-charcoal">
                                                {formatPrice(product.price)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
