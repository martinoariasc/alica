'use client';

import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { getProductBySlug, getFeaturedProducts } from '@/lib/products';
import { formatPrice, buildProductWhatsAppURL } from '@/lib/utils';
import { Clock, Shield, Sparkles, Truck, Heart } from 'lucide-react';
import Link from 'next/link';

export default function ProductPage() {
    const params = useParams();
    const slug = params.slug as string;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = getFeaturedProducts()
        .filter((p) => p.slug !== product.slug)
        .slice(0, 3);

    return (
        <>
            {/* Breadcrumb */}
            <div className="pt-28 pb-4 bg-bg-warm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <nav className="text-sm text-muted">
                        <Link href="/" className="hover:text-rose-deep transition-colors">
                            Inicio
                        </Link>
                        <span className="mx-2">/</span>
                        <Link
                            href="/shop"
                            className="hover:text-rose-deep transition-colors"
                        >
                            Tienda
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-charcoal">{product.name}</span>
                    </nav>
                </div>
            </div>

            {/* Product Detail */}
            <section className="pb-20 bg-bg-warm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left: Image */}
                        <AnimatedSection direction="left">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
                                <Swiper
                                    modules={[Pagination]}
                                    pagination={{ clickable: true }}
                                    className="aspect-square"
                                >
                                    {product.images.map((img, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="w-full h-full bg-gradient-to-br from-rose-light/30 to-cream flex items-center justify-center">
                                                <span className="text-8xl text-rose/30">🍼</span>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </AnimatedSection>

                        {/* Right: Product Info */}
                        <AnimatedSection direction="right" className="flex flex-col justify-center">
                            <span className="text-xs font-body uppercase tracking-[3px] text-rose-deep mb-3">
                                {product.category}
                            </span>

                            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-4">
                                {product.name}
                            </h1>

                            {/* Pricing */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-lg text-muted line-through">
                                    {formatPrice(product.oldPrice)}
                                </span>
                                <span className="text-3xl font-semibold text-charcoal">
                                    {formatPrice(product.price)}
                                </span>
                                <span className="px-3 py-1 rounded-full bg-rose-light text-rose-deep text-xs font-medium">
                                    -30%
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-charcoal/70 leading-relaxed mb-8">
                                {product.description}
                            </p>

                            {/* Benefits */}
                            <div className="space-y-3 mb-8">
                                {product.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-rose-light flex items-center justify-center flex-shrink-0">
                                            <Heart className="w-3 h-3 text-rose-deep" />
                                        </div>
                                        <span className="text-sm text-charcoal/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Production Time */}
                            <div className="inline-flex items-center gap-3 mb-8 p-4 rounded-xl bg-orange-50 border border-orange-200 shadow-sm w-full sm:w-auto">
                                <Clock className="w-6 h-6 text-orange-400" />
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-orange-800 uppercase tracking-wider">
                                        Confección Artesanal
                                    </span>
                                    <span className="text-sm text-orange-900/80 font-medium">
                                        Tiempo de producción: {product.productionTime}
                                    </span>
                                </div>
                            </div>

                            {/* CTA */}
                            <Button
                                href={buildProductWhatsAppURL(product.name)}
                                variant="whatsapp"
                                size="lg"
                                external
                                className="w-full sm:w-auto"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Pedir por WhatsApp
                            </Button>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Materials & Care */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AnimatedSection>
                            <div className="p-6 rounded-2xl bg-bg-warm text-center">
                                <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
                                <h3 className="font-heading text-lg font-semibold mb-2">
                                    Materiales
                                </h3>
                                <p className="text-sm text-muted">{product.materials}</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.1}>
                            <div className="p-6 rounded-2xl bg-bg-warm text-center">
                                <Shield className="w-8 h-8 text-gold mx-auto mb-4" />
                                <h3 className="font-heading text-lg font-semibold mb-2">
                                    Cuidados
                                </h3>
                                <ul className="text-sm text-muted space-y-1">
                                    {product.careInstructions.map((care, i) => (
                                        <li key={i}>{care}</li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="p-6 rounded-2xl bg-bg-warm text-center">
                                <Truck className="w-8 h-8 text-gold mx-auto mb-4" />
                                <h3 className="font-heading text-lg font-semibold mb-2">
                                    Envío
                                </h3>
                                <p className="text-sm text-muted">
                                    Envíos a todo Paraguay. Coordinamos por WhatsApp.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="py-16 bg-bg-warm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <AnimatedSection>
                            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal text-center mb-10">
                                También te puede gustar
                            </h2>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedProducts.map((p, i) => (
                                <AnimatedSection key={p.slug} delay={i * 0.1}>
                                    <Link href={`/producto/${p.slug}`} className="block group">
                                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                                            <div className="aspect-square bg-gradient-to-br from-rose-light/30 to-cream flex items-center justify-center">
                                                <span className="text-6xl text-rose/30">🍼</span>
                                            </div>
                                            <div className="p-5">
                                                <h3 className="font-heading text-lg font-semibold text-charcoal group-hover:text-rose-deep transition-colors">
                                                    {p.name}
                                                </h3>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <span className="text-sm text-muted line-through">
                                                        {formatPrice(p.oldPrice)}
                                                    </span>
                                                    <span className="text-base font-semibold">
                                                        {formatPrice(p.price)}
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
            )}
        </>
    );
}
