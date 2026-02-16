'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import FloatingElement from '@/components/ui/FloatingElement';
import ParallaxLayer from '@/components/ui/ParallaxLayer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function StorySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

    return (
        <section ref={sectionRef} className="py-24 md:py-48 relative overflow-hidden">
            {/* Soft Ambient Background Elements with Parallax */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <ParallaxLayer speed={0.2}>
                    <div className="absolute top-20 right-[10%] w-64 h-64 bg-rose/10 blur-[100px] rounded-full" />
                </ParallaxLayer>
            </div>

            <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* The Emotional Visual */}
                    <div className="relative order-2 lg:order-1">
                        <AnimatedSection direction="left">
                            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-white/50">
                                <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-[110%] -top-[5%]">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/videos/video-seccion-3.mp4" type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
                                </motion.div>

                                <div className="absolute bottom-10 left-10 right-10">
                                    <p className="font-heading text-2xl text-white italic leading-tight drop-shadow-lg">
                                        &quot;Verlo caminar es ver mi corazón fuera del cuerpo.&quot;
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* The Narrative */}
                    <div className="order-1 lg:order-2">
                        <AnimatedSection blur>
                            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-rose-deep mb-8 block font-bold">
                                Crecen muy rápido
                            </span>
                            <h2 className="font-heading text-4xl md:text-6xl text-charcoal mb-8 leading-[1.1]">
                                Mañana esos piecitos<br />
                                <span className="italic text-muted">ya no van a caber en tus manos.</span>
                            </h2>
                            <p className="font-body text-lg text-muted leading-relaxed font-light mb-8">
                                Sabemos que querés congelar el tiempo. No podemos hacer eso, pero podemos darte el zapato que vas a guardar en su caja de recuerdos para siempre.
                            </p>
                            <p className="font-body text-lg text-charcoal leading-relaxed font-medium mb-12 italic border-l-2 border-rose-deep pl-6">
                                "Es el primer regalo que le hago a su futuro."
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <Button href="/shop" variant="primary" size="lg">
                                    Ver Colección
                                </Button>
                                <Button href="/regalo" variant="caviar" size="lg">
                                    Un regalo eterno
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
