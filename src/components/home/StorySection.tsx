'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import FloatingElement from '@/components/ui/FloatingElement';
import ParallaxLayer from '@/components/ui/ParallaxLayer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const momPillars = [
    {
        number: '01',
        title: 'Tu Paz Mental',
        desc: 'Sabés que estás eligiendo materiales naturales que cuidan su piel y permiten que sus pies se desarrollen sin límites ni deformaciones.'
    },
    {
        number: '02',
        title: 'Su Primer Tesoro',
        desc: 'No es algo que se tira. Es ese par que, dentro de 20 años, vas a encontrar en una caja y te va a recordar lo chiquito que era.'
    },
    {
        number: '03',
        title: 'Orgullo de Mamá',
        desc: 'Elegiste algo único. Hecho a su tiempo, con la misma paciencia con la que vos le enseñás a dar sus primeros pasos.'
    },
];

export default function StorySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

    return (
        <section ref={sectionRef} className="py-32 md:py-48 bg-[#FAF7F5] relative overflow-hidden">
            {/* Soft Ambient Background Elements with Parallax */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <ParallaxLayer speed={0.2}>
                    <div className="absolute top-20 right-[10%] w-64 h-64 bg-rose/10 blur-[100px] rounded-full" />
                </ParallaxLayer>
                <ParallaxLayer speed={0.4}>
                    <div className="absolute bottom-20 left-[10%] w-80 h-80 bg-gold/5 blur-[120px] rounded-full" />
                </ParallaxLayer>
            </div>

            <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">

                    {/* The Emotional Mirror (Image) */}
                    <div className="relative order-2 lg:order-1">
                        <AnimatedSection direction="left">
                            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                                <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-[110%] -top-[5%]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544126592-807daa2b567b?q=80&w=2670&auto=format&fit=crop"
                                        alt="Mom and baby's first steps"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
                                </motion.div>

                                <div className="absolute bottom-10 left-10 right-10">
                                    <p className="font-heading text-2xl text-white italic leading-tight drop-shadow-lg">
                                        &quot;Es el primer regalo que le hago a su futuro.&quot;
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Social Proof Badge — Floating */}
                        <FloatingElement amplitude={8} duration={5} className="absolute -right-8 -bottom-8 hidden md:block">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-full shadow-2xl border border-stone-100 flex flex-col items-center justify-center w-40 h-40 text-center"
                            >
                                <span className="text-3xl mb-1">⭐</span>
                                <span className="font-heading text-xl font-bold text-stone-800">800+</span>
                                <span className="text-[10px] uppercase tracking-tighter text-stone-500 font-bold">Reseñas de Mamás</span>
                            </motion.div>
                        </FloatingElement>
                    </div>

                    {/* The Sales Manifesto (Text) */}
                    <div className="order-1 lg:order-2">
                        <AnimatedSection blur>
                            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-rose-deep mb-8 block font-bold">
                                Entendemos tu mundo
                            </span>
                            <h2 className="font-heading text-4xl md:text-6xl text-stone-900 mb-10 leading-[1.1]">
                                <span className="italic block mb-2">Porque no buscás zapatitos,</span>
                                <span className="font-medium">buscás proteger su magia.</span>
                            </h2>
                            <p className="font-body text-lg text-stone-600 leading-relaxed font-light mb-12">
                                Sos la mujer que elige lo artesanal sobre lo masivo, lo seguro sobre lo barato, y el amor sobre la prisa. En ALICA creamos para vos, que valorás que cada puntada esté hecha con el mismo cuidado con el que vos lo alzás.
                            </p>

                            <div className="space-y-12 mb-16">
                                {momPillars.map((pillar, i) => (
                                    <AnimatedSection key={pillar.number} delay={i * 0.15} direction="right" blur>
                                        <div className="flex gap-6 items-start group">
                                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-stone-100 group-hover:border-rose-light transition-colors duration-500">
                                                <span className="font-heading text-rose-deep font-bold italic">{pillar.number}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-heading text-xl text-stone-800 mb-1">{pillar.title}</h4>
                                                <p className="text-stone-500 font-body leading-relaxed text-sm md:text-base font-light">
                                                    {pillar.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-8 mt-6">
                                <Button href="/shop" variant="primary" size="lg">
                                    Ver la Colección Actual
                                </Button>
                                <Button href="/testimonios" variant="caviar" size="lg">
                                    Historias de otras mamás
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>

            {/* Divider Decorative */}
            <div className="h-[1px] w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-stone-200 to-transparent mt-32 md:mt-48 opacity-50" />
        </section>
    );
}
