'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { getProductsByCategory } from '@/lib/products';

export default function ExclusiveKits() {
    const kits = getProductsByCategory('Ediciones Especiales');

    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[95%] xl:max-w-7xl mx-auto px-6 relative z-10">
                <AnimatedSection className="text-center mb-20 md:mb-28" blur>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Zap className="w-5 h-5 text-rose-deep fill-current animate-pulse" />
                        <span className="font-body text-[11px] tracking-[0.5em] uppercase text-rose-deep font-bold">Oportunidades Únicas</span>
                        <Zap className="w-5 h-5 text-rose-deep fill-current animate-pulse" />
                    </div>
                    <h2 className="font-heading text-4xl md:text-7xl text-cacao mb-8 leading-[1.1]">
                        Kits de Bienvenida <br className="hidden md:block" />
                        <span className="italic font-light text-stone-400">Ediciones Coleccionista</span>
                    </h2>
                    <p className="font-body text-cacao/60 text-lg md:text-xl max-w-2xl mx-auto italic">
                        Selecciones curadas con beneficios exclusivos, diseñadas para resolver todas las necesidades de tu bebé mientras ahorrás en el proceso.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
                    {kits.map((kit, index) => (
                        <AnimatedSection
                            key={kit.slug}
                            delay={index * 0.2}
                            className="flex"
                        >
                            <div className="bg-white rounded-[2.5rem] overflow-hidden border border-stone-100 shadow-2xl flex flex-col group hover:shadow-gold/10 transition-all duration-700 relative h-full">
                                {/* Scarcity Badge */}
                                <div className="absolute top-6 right-6 z-20">
                                    <div className="bg-rose-deep text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg animate-bounce">
                                        {kit.scarcityText}
                                    </div>
                                </div>

                                {/* Main Visual */}
                                <div className="relative h-72 md:h-80 w-full overflow-hidden">
                                    <Image
                                        src={kit.images[0]}
                                        alt={kit.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                                </div>

                                {/* Content: The Value Stack */}
                                <div className="p-8 md:p-10 flex flex-col flex-grow">
                                    <div className="mb-8">
                                        <h3 className="font-heading text-3xl text-cacao mb-2 group-hover:text-rose-deep transition-colors duration-500">
                                            {kit.emotionalName}
                                        </h3>
                                        <p className="text-sm text-cacao/40 uppercase tracking-[0.2em] font-bold mb-4">{kit.name}</p>
                                        <div className="h-px w-12 bg-gold/30 mb-6" />
                                        <p className="text-cacao/70 italic text-base leading-relaxed mb-8">
                                            "{kit.emotionalPhrase}"
                                        </p>
                                    </div>

                                    {/* Features List (Hormozi Stacking) */}
                                    <div className="space-y-4 mb-10 flex-grow">
                                        {kit.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-3 h-3 text-cacao" />
                                                </div>
                                                <p className="text-sm font-body font-medium text-cacao/80">{benefit}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Price & Action */}
                                    <div className="pt-8 border-t border-stone-50 mt-auto">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="flex flex-col">
                                                <span className="text-sm text-cacao/30 line-through font-medium decoration-rose-deep/30 decoration-2">
                                                    Gs. {kit.oldPrice.toLocaleString()}
                                                </span>
                                                <span className="text-3xl font-bold text-cacao tracking-tighter">
                                                    Gs. {kit.price.toLocaleString()}
                                                </span>
                                            </div>
                                            <div className="ml-auto bg-cream-light border border-gold/20 px-4 py-2 rounded-xl">
                                                <span className="block text-[10px] text-gold/60 uppercase tracking-widest font-bold">Ahorro</span>
                                                <span className="text-lg font-bold text-cacao">
                                                    Gs. {(kit.oldPrice - kit.price).toLocaleString()}
                                                </span>
                                            </div>
                                        </div>

                                        <Link
                                            href={`/producto/${kit.slug}`}
                                            className="w-full h-16 bg-cacao text-white rounded-full flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em] text-[11px] group-hover:bg-rose-deep transition-all duration-500 shadow-xl shadow-cacao/10 hover:shadow-rose-deep/30"
                                        >
                                            <span>Aprovechar Oferta</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Boutique Guarantee Stamp */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-20 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-bold text-cacao">
                                        <ShieldCheck className="w-3 h-3" />
                                        {kit.guaranteeText}
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* The "Why Now" Section (Risk Reversal & Scarcity) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-10 md:p-14 bg-cream-light rounded-[3rem] border border-gold/10 text-center relative overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
                        <div className="text-left md:w-2/3">
                            <h4 className="font-heading text-2xl md:text-3xl text-cacao mb-4">La Garantía Boutique ALICA</h4>
                            <p className="text-cacao/60 text-lg leading-relaxed italic">
                                "Si al recibir tu kit sentís que no es lo más suave y puro que ha tocado sus pies, te devolvemos tu inversión sin preguntas. Nuestro compromiso no es solo con el estilo, es con la paz mental de cada mamá."
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border border-gold/30 shadow-inner">
                                <Sparkles className="w-10 h-10 text-gold" />
                            </div>
                            <span className="text-[10px] tracking-[0.4em] uppercase text-cacao/40 font-bold">Hecho con Amor Puro</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
