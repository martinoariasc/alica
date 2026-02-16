'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ParallaxLayer from '@/components/ui/ParallaxLayer';

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
        <section className="py-40 md:py-80 bg-[#FAF7F5] relative overflow-hidden w-full">
            {/* Parallax Paper Texture */}
            <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
                <div className="w-full h-[130%] opacity-[0.03]"
                    style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/paper.png")` }} />
            </ParallaxLayer>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                <AnimatedSection className="text-center mb-16" blur>
                    <h2 className="font-heading text-4xl md:text-5xl text-[#4E423C] mb-4">
                        Tabla de medidas
                    </h2>
                    <p className="font-body text-[#857A74] italic text-lg">
                        (Nos manejamos en centímetros)
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Visual Guide */}
                    <AnimatedSection delay={0.2} className="hidden md:block" direction="left" blur>
                        <div className="aspect-[4/5] rounded-2xl bg-white/50 backdrop-blur-sm p-8 border border-[#E8E2DE] shadow-inner flex flex-col justify-center items-center text-center">
                            <div className="w-32 h-32 mb-6 opacity-20">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#4E423C]">
                                    <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
                                    <circle cx="12" cy="12" r="9" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-2xl text-[#4E423C] mb-4">¿Cómo medir?</h3>
                            <p className="text-sm text-[#857A74] leading-relaxed">
                                Recomendamos medir el piecito de tu bebé desde el talón hasta el dedo más largo y sumar **0.5cm** para que esté cómodo.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* The Table */}
                    <AnimatedSection delay={0.3} direction="right">
                        <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 overflow-hidden border border-[#E8E2DE]">
                            <div className="grid grid-cols-2 bg-[#4E423C] p-4 text-white font-heading tracking-widest text-sm uppercase">
                                <div className="pl-4">Edad</div>
                                <div className="text-right pr-4">Medida</div>
                            </div>
                            <div className="divide-y divide-[#F0EAE6]">
                                {sizes.map((item, i) => (
                                    <motion.div
                                        key={item.range}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        whileHover={{ backgroundColor: '#FAF7F5' }}
                                        className="grid grid-cols-2 p-4 items-center group transition-colors"
                                    >
                                        <span className="font-body text-[#4E423C] font-medium pl-4 group-hover:translate-x-1 transition-transform">
                                            {item.range}
                                        </span>
                                        <span className="font-body text-[#857A74] text-right pr-4 font-semibold uppercase tracking-tighter">
                                            {item.measure}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <p className="text-[10px] text-[#857A74] mt-4 text-center uppercase tracking-widest opacity-60">
                            * Las medidas pueden variar levemente por ser un producto artesanal
                        </p>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
