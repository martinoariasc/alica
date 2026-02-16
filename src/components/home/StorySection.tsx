'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';

const processSteps = [
    { number: '01', title: 'Diseño Dedicado', desc: 'Cada curva está pensada para respetar la anatomía real de los pies que están descubriendo el mundo.' },
    { number: '02', title: 'Corte de Grano', desc: 'Seleccionamos solo fibras naturales de alta suavidad que permiten que la piel respire sin irritaciones.' },
    { number: '03', title: 'Costura Infinita', desc: '3 horas de trabajo manual. No es rapidez, es la precisión de una mamá cuidando cada puntada.' },
    { number: '04', title: 'Presentación', desc: 'Cada par llega en un empaque diseñado para ser el primer gran tesoro en su caja de recuerdos.' },
];

/**
 * StorySection Redesign: Artisanal Manifesto
 * Focuses on high-end storytelling, spacious layout, and intentional conversion.
 */
export default function StorySection() {
    return (
        <section className="py-32 md:py-48 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FAF7F5] -z-0 opacity-50" />

            <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
                {/* Manifesto Header */}
                <div className="max-w-3xl mx-auto text-center mb-24 md:mb-40">
                    <AnimatedSection>
                        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-rose-deep mb-8 block font-bold">
                            Nuestra Devoción
                        </span>
                        <h2 className="font-heading text-4xl md:text-7xl text-stone-900 mb-10 leading-[1.1] italic">
                            No fabricamos zapatitos,<br />
                            <span className="not-italic font-medium">custodiamos sus primeros pasos.</span>
                        </h2>
                        <p className="font-body text-lg md:text-xl text-stone-600 leading-relaxed font-light max-w-2xl mx-auto">
                            Mientras el mundo produce a la velocidad de las máquinas, en <span className="text-black font-medium">ALICA</span> nos detenemos. Invertimos 3 horas de devoción manual en cada par porque sabemos que esos piecitos cargarán con el peso de todos sus sueños futuros.
                        </p>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center mb-32">
                    {/* The Visual Proof */}
                    <div className="relative">
                        <AnimatedSection direction="left">
                            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669&auto=format&fit=crop"
                                    alt="El arte de ALICA"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-stone-900/5 hover:bg-transparent transition-colors duration-700" />
                            </div>
                        </AnimatedSection>

                        {/* Floating Micro-Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -right-8 top-1/4 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 max-w-[180px] hidden md:block"
                        >
                            <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-3 font-bold">Hecho a mano</p>
                            <p className="font-heading text-xl italic text-stone-800 leading-tight">3 horas de devoción por par</p>
                        </motion.div>
                    </div>

                    {/* The Stages */}
                    <div className="space-y-16 lg:space-y-24">
                        {processSteps.map((step, i) => (
                            <AnimatedSection key={step.number} delay={i * 0.1} direction="right">
                                <div className="flex gap-10 group">
                                    <span className="font-heading text-5xl md:text-6xl text-stone-100 group-hover:text-rose-light transition-colors duration-700 select-none">
                                        {step.number}
                                    </span>
                                    <div className="pt-2">
                                        <h4 className="font-heading text-2xl text-stone-800 mb-3 italic">{step.title}</h4>
                                        <p className="text-stone-500 font-body leading-relaxed text-base md:text-lg font-light">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}

                        <AnimatedSection delay={0.5} className="pt-10">
                            <Button
                                href="/nosotros"
                                variant="ghost"
                                size="lg"
                                className="w-full md:w-auto shadow-2xl"
                            >
                                Descubrí nuestro atelier
                            </Button>
                        </AnimatedSection>
                    </div>
                </div>
            </div>

            {/* Subtle Divider Decoration */}
            <div className="h-[px] w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-stone-100 to-transparent" />
        </section>
    );
}
