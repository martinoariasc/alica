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
        <section className="py-24 md:py-32 relative overflow-hidden w-full bg-transparent">
            <div className="max-w-[95%] xl:max-w-7xl mx-auto px-6 relative z-10">
                <AnimatedSection className="text-center mb-16 md:mb-20" blur>
                    <h2 className="font-heading text-4xl md:text-6xl text-charcoal mb-4">
                        Tabla de medidas
                    </h2>
                    <p className="font-body text-muted italic text-lg md:text-xl">
                        (Nos manejamos en centímetros)
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Visual Guide */}
                    <AnimatedSection delay={0.2} className="w-full" direction="left" blur>
                        <div className="rounded-[2.5rem] bg-white p-10 md:p-12 border border-stone-100 shadow-xl shadow-stone-200/40 text-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-light/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-rose-light/20 transition-colors duration-700" />

                            <div className="w-24 h-24 mb-8 mx-auto p-6 bg-stone-50 rounded-full flex items-center justify-center border border-stone-100 shadow-inner">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-rose-deep">
                                    <path d="M4 10c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8z" />
                                    <path d="M9 10c0 1.657 1.343 3 3 3s3-1.343 3-3" strokeLinecap="round" />
                                    <path d="M12 14v4" strokeLinecap="round" strokeDasharray="2 2" />
                                </svg>
                            </div>

                            <h3 className="font-heading text-2xl text-charcoal mb-4">¿Cómo medir?</h3>
                            <p className="text-base text-muted leading-relaxed max-w-sm mx-auto font-light">
                                Colocá su piecito sobre una hoja de papel, marcá el talón y el dedo más largo. Medí esa distancia y <strong className="text-rose-deep font-semibold">sumá 0.5cm</strong> para que tenga el espacio ideal para crecer.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* The Table - Refined for readability */}
                    <AnimatedSection delay={0.3} direction="right" className="w-full">
                        <div className="bg-white rounded-[2.5rem] overflow-hidden border border-stone-100 shadow-2xl shadow-stone-200/50">
                            {/* High Contrast Header - Premium Look */}
                            <div className="grid grid-cols-2 bg-cacao px-6 md:px-10 py-6 text-cream-light font-heading tracking-[0.3em] text-[11px] uppercase font-bold">
                                <span className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-gold" />
                                    Edad Aproximada
                                </span>
                                <span className="text-right flex items-center justify-end gap-2">
                                    Largo del Pie
                                    <div className="w-1 h-1 rounded-full bg-gold" />
                                </span>
                            </div>

                            <div className="divide-y divide-stone-100">
                                {sizes.map((item, i) => (
                                    <motion.div
                                        key={item.range}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="grid grid-cols-2 p-6 md:p-8 items-center hover:bg-stone-50 transition-all duration-500 group"
                                    >
                                        <div className="flex flex-col">
                                            <span className="font-body text-cacao font-semibold text-lg md:text-xl group-hover:text-rose-deep transition-colors">
                                                {item.range}
                                            </span>
                                            <span className="text-[10px] text-cacao/40 uppercase tracking-widest font-bold">Respetuoso</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="font-heading text-cacao font-bold text-xl md:text-2xl tracking-tighter">
                                                {item.measure}
                                            </span>
                                            <span className="block text-[10px] text-rose-deep/60 font-bold uppercase tracking-wider">Interior</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <p className="text-[11px] text-cacao/60 mt-8 text-center uppercase tracking-[0.4em] font-bold italic">
                            * Producto artesanal, medidas aproximadas.
                        </p>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
