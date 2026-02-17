'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Heart, Gift } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export default function BaptismCollection() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-cream-light/30 to-white">
            {/* Heavenly Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <AnimatedSection className="text-center mb-16" blur>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Sparkles className="w-5 h-5 text-gold animate-pulse" />
                        <span className="font-body text-[11px] tracking-[0.5em] uppercase text-cacao/40 font-bold">Colección Sagrada</span>
                        <Sparkles className="w-5 h-5 text-gold animate-pulse" />
                    </div>
                    <h2 className="font-heading text-4xl md:text-7xl text-cacao mb-8 leading-[1.1]">
                        Para su <br className="hidden md:block" />
                        <span className="italic font-light text-stone-400">Primer Sacramento</span>
                    </h2>
                    <p className="font-body text-cacao/60 text-lg md:text-xl max-w-2xl mx-auto italic">
                        Porque el día de su Bautismo merece ser recordado con la elegancia y pureza que solo ALICA puede ofrecer.
                    </p>
                </AnimatedSection>

                {/* Hero Product Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl">
                            <Image
                                src="/images/products/unisex/1/077af128-0170-4b78-9f31-02166a759043.png"
                                alt="Zapatito Bautismo ALICA"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-gold">Edición Ceremonial</span>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="font-heading text-3xl md:text-5xl text-cacao mb-4 italic">
                                Pureza Sagrada
                            </h3>
                            <p className="font-body text-cacao/70 text-lg leading-relaxed">
                                Cada puntada de este zapatito blanco lleva la intención de honrar el momento más sagrado de su infancia.
                                Confeccionado en <strong>cuero blanco inmaculado</strong> con suela ceremonial ultra-suave,
                                es el recuerdo perfecto que guardarás para siempre.
                            </p>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: '✨', text: 'Blanco Inmaculado' },
                                { icon: '🤍', text: 'Suela Ceremonial' },
                                { icon: '📜', text: 'Certificado Incluido' },
                                { icon: '🎁', text: 'Packaging Premium' }
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/60 border border-gold/10">
                                    <span className="text-2xl">{benefit.icon}</span>
                                    <span className="text-sm font-body font-medium text-cacao/80">{benefit.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons - Centered and Premium */}
                        <div className="flex flex-col sm:flex-row gap-5 pt-8 justify-start">
                            <Button
                                href="/producto/zapatito-bautismo-blanco-pureza"
                                variant="primary"
                                size="lg"
                                className="min-w-[220px]"
                            >
                                Ver Zapatito Individual
                            </Button>
                            <Button
                                href="/producto/kit-primer-sacramento-bautismo"
                                variant="outline"
                                size="lg"
                                className="min-w-[220px] border-2 border-gold text-gold hover:bg-gold hover:text-white"
                            >
                                <Gift className="w-4 h-4" />
                                Ver Kit Completo
                            </Button>
                        </div>

                        {/* Trust Badge */}
                        <div className="pt-6 border-t border-cacao/10">
                            <p className="text-xs text-cacao/50 italic flex items-center gap-2">
                                <Heart className="w-3 h-3 text-rose-deep fill-current" />
                                Hecho con devoción · Tiempo de preparación: 7-10 días
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Kit Highlight Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cacao via-cacao-light to-cacao p-12 md:p-16 text-center"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                            <Gift className="w-4 h-4 text-gold" />
                            <span className="text-[10px] tracking-[0.4em] uppercase text-white font-bold">Regalo Perfecto para Padrinos</span>
                        </div>

                        <h3 className="font-heading text-3xl md:text-5xl text-white italic leading-tight">
                            Kit &ldquo;Primer Sacramento&rdquo;
                        </h3>

                        <p className="font-body text-white/80 text-lg md:text-xl leading-relaxed">
                            Zapatito Ceremonial + Vincha Especial + <strong className="text-gold">Vela Artesanal</strong> + Tarjeta Personalizada + <strong className="text-gold">Ebook de Regalo</strong>
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-6">
                            <div className="text-center md:text-left">
                                <p className="text-white/40 text-sm line-through tracking-wider">420.000 Gs</p>
                                <p className="text-white text-4xl md:text-5xl font-bold tracking-tight">285.000 Gs</p>
                            </div>
                            <Button
                                href="/producto/kit-primer-sacramento-bautismo"
                                variant="primary"
                                size="lg"
                                className="bg-white text-cacao hover:bg-gold-muted px-12 h-16 rounded-full shadow-xl"
                            >
                                Ver Kit Completo
                            </Button>
                        </div>

                        <p className="text-xs text-gold/80 tracking-wider uppercase font-bold">
                            ⏱️ Solo 3 kits disponibles por mes
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
