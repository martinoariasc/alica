'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';

const sizes = [
    { range: 'Prematuros', measure: '8cm' },
    { range: '0-1 mes', measure: '9cm' },
    { range: '1-3 meses', measure: '10cm' },
    { range: '3-6 meses', measure: '11,5cm' },
    { range: '6-9 meses', measure: '12cm' },
    { range: '9-12 meses', measure: '12,5cm' },
    { range: '12-15 meses', measure: '13,5cm' },
    { range: '15-18 meses', measure: '14cm' },
    { range: '18-24 meses', measure: '14,5cm' },
];

export default function SizeChart() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden w-full">
            {/* Background - Clean Minimalist (No Texture) */}

            <div className="max-w-[95%] xl:max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <AnimatedSection className="text-center mb-12 md:mb-16" blur>
                    <h2 className="font-heading text-3xl md:text-5xl text-[#4E423C] mb-4">
                        Tabla de medidas
                    </h2>
                    <p className="font-body text-[#857A74] italic text-base md:text-lg">
                        (Nos manejamos en centímetros)
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Visual Guide - Simplified */}
                    <AnimatedSection delay={0.2} className="hidden lg:block sticky top-24" direction="left" blur>
                        <div className="rounded-2xl bg-white p-8 border border-stone-100 shadow-sm flex flex-col justify-center items-center text-center">
                            <div className="w-32 h-32 mb-6 opacity-80 p-4 bg-stone-50 rounded-full flex items-center justify-center">
                                {/* Simple Foot Icon */}
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 text-[#4E423C]">
                                    <path d="M4 10c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8z" />
                                    <path d="M9 10c0 1.657 1.343 3 3 3s3-1.343 3-3" strokeLinecap="round" />
                                    <path d="M12 14v4" strokeLinecap="round" strokeDasharray="2 2" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl text-[#4E423C] mb-3">¿Cómo medir?</h3>
                            <p className="text-sm text-[#857A74] leading-relaxed max-w-xs mx-auto">
                                Medí el piecito desde el talón hasta el dedo más largo y sumá <strong className="text-rose-deep font-medium">0.5cm</strong> para mayor comodidad.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* The Table - Clean List for Mobile */}
                    <AnimatedSection delay={0.3} direction="right" className="w-full">
                        <div className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm">
                            <div className="grid grid-cols-2 bg-stone-100/50 p-5 border-b border-stone-100 text-stone-500 font-heading tracking-widest text-xs uppercase">
                                <div className="pl-2">Edad Aproximada</div>
                                <div className="text-right pr-2">Largo del Pie</div>
                            </div>
                            <div className="divide-y divide-stone-100">
                                {sizes.map((item, i) => (
                                    <motion.div
                                        key={item.range}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.03 }}
                                        className="grid grid-cols-2 p-5 items-center hover:bg-[#FAF7F5] transition-colors duration-300"
                                    >
                                        <span className="font-body text-stone-600 font-medium pl-2 text-sm md:text-base">
                                            {item.range}
                                        </span>
                                        <span className="font-body text-stone-800 text-right pr-2 font-bold text-sm md:text-base tracking-tight">
                                            {item.measure}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Mobile visual guide note included inside the card */}
                            <div className="lg:hidden p-6 bg-stone-50 text-center border-t border-stone-100">
                                <p className="text-xs text-[#857A74] leading-relaxed">
                                    💡 Tip: Sumá <strong>0.5cm</strong> a la medida del piecito.
                                </p>
                            </div>
                        </div>
                        <p className="text-[10px] text-[#857A74] mt-4 text-center uppercase tracking-widest opacity-60">
                            * Producto artesanal, medidas aproximadas.
                        </p>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
