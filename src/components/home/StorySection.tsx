'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import FloatingElement from '@/components/ui/FloatingElement';
import ParallaxLayer from '@/components/ui/ParallaxLayer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function StorySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

    return (
        <section ref={sectionRef} className="py-20 md:py-48 relative overflow-hidden w-full">
            {/* Soft Ambient Background Elements with Parallax */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <ParallaxLayer speed={0.2}>
                    <div className="absolute top-20 right-[10%] w-64 h-64 bg-rose/10 blur-[100px] rounded-full" />
                </ParallaxLayer>
            </div>

            <div className="max-w-[95%] xl:max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                    {/* The Emotional Visual */}
                    <div className="relative order-2 lg:order-1">
                        <AnimatedSection direction="left">
                            <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[4px] md:border-[8px] border-white/50 bg-stone-100">
                                <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-[115%] -top-[7.5%]">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/videos/video-seccion-3.mp4" type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
                                </motion.div>

                                <div className="absolute bottom-12 left-10 right-10 md:block hidden">
                                    <p className="font-heading text-xl md:text-3xl text-white italic leading-tight drop-shadow-lg text-center px-4">
                                        &quot;Verlo caminar es ver mi corazón fuera del cuerpo.&quot;
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* The Narrative */}
                    <div className="order-1 lg:order-2 flex flex-col justify-center items-center text-center">
                        <AnimatedSection blur>
                            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-rose-deep mb-6 block font-bold">
                                Crecen muy rápido
                            </span>
                            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal mb-8 leading-[1.2]">
                                Mañana esos piecitos<br />
                                <span className="italic text-stone-400 font-light block mt-2">ya no van a caber en tus manos.</span>
                            </h2>
                            <p className="font-body text-base md:text-lg text-stone-500 leading-relaxed font-light mb-10 max-w-xl mx-auto">
                                Sabemos que querés congelar el tiempo. No podemos hacer eso, pero podemos darte el zapato que vas a guardar en su caja de recuerdos para siempre.
                            </p>
                            <div className="mb-12 flex flex-col items-center">
                                <div className="w-10 h-px bg-rose-deep/20 mb-6" />
                                <p className="font-body text-lg md:text-xl text-stone-800 leading-relaxed font-medium italic">
                                    "Es el primer regalo que le hago a su futuro."
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center justify-center">
                                <Button href="/shop" variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px]">
                                    Ver Colección
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
