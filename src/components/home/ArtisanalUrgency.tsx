'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ArtisanalUrgency() {
    return (
        <section className="py-32 md:py-48 relative overflow-hidden">
            {/* Ticker - Moved to top as a subtle border */}
            <div className="absolute top-0 left-0 w-full overflow-hidden py-4 border-b border-rose-deep/10 bg-rose-light/20 backdrop-blur-sm">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                    className="flex whitespace-nowrap gap-12 items-center"
                >
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12 opacity-60">
                            <span className="text-xs uppercase tracking-[0.3em] text-rose-deep font-semibold">
                                Solo 15 Pares Semanales
                            </span>
                            <span className="text-[10px] text-gold">✦</span>
                            <span className="text-xs uppercase tracking-[0.3em] text-rose-deep font-semibold">
                                Hecho a Mano en Asunción
                            </span>
                            <span className="text-[10px] text-gold">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
                <AnimatedSection blur>
                    <div className="inline-block p-6 border border-stone-300/50 rounded-tr-[40px] rounded-bl-[40px] bg-white/40 backdrop-blur-md relative">
                        <span className="absolute -top-3 left-8 bg-rose-deep text-white text-[10px] uppercase font-bold px-3 py-1 tracking-widest leading-none">
                            El valor de la espera
                        </span>

                        <h2 className="font-heading text-3xl md:text-5xl text-charcoal mb-6 mt-4 italic">
                            No somos una fábrica.<br />
                            Somos un taller de memorias.
                        </h2>

                        <p className="font-body text-base md:text-lg text-muted font-light leading-relaxed mb-6">
                            Cada par de Alica toma días en hacerse. No tenemos un depósito lleno de cajas idénticas. Tenemos una mesa de corte, manos que eligen las telas más nobles, y el tiempo necesario para que quede perfecto.
                        </p>

                        <p className="font-heading text-xl text-rose-deep">
                            A veces hay lista de espera. <br />
                            <span className="text-sm font-body text-muted italic">(Pero las cosas buenas siempre se hacen esperar)</span>
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
