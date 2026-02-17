'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import FloatingElement from '@/components/ui/FloatingElement';
import { useRef } from 'react';

export default function HeroSection() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={ref} className="relative h-[100dvh] w-screen overflow-hidden flex items-center justify-center bg-stone-900">
            {/* Video Background with Parallax */}
            <motion.div className="absolute inset-0 z-0 w-screen h-full" style={{ scale, willChange: 'transform' }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover opacity-80"
                >
                    <source src="/videos/hero-1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20" /> {/* Darker overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-80" />
            </motion.div>

            {/* Single Floating Orb (reduced from 3 to 1) */}
            <FloatingElement className="absolute top-[20%] left-[10%] w-40 h-40 rounded-full bg-rose-light/8 blur-[80px] pointer-events-none z-[1]" amplitude={15} duration={10}>
                <div />
            </FloatingElement>

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-[95%] xl:max-w-7xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center h-full"
                style={{ y, opacity, willChange: 'transform, opacity' }}
            >
                <div className="flex-1 flex flex-col items-center justify-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-medium text-[10px] md:text-sm tracking-[0.2em] uppercase mb-6 md:mb-8 border border-white/20 shadow-lg">
                            Cosidos a mano · Solo 15 pares por semana
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="font-body text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold !text-white leading-[1.1] mb-6 drop-shadow-2xl"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 5px 20px rgba(0,0,0,0.3)' }}
                    >
                        <span className="text-white block">Sus primeros pasos</span>
                        <span className="italic font-light text-white block mt-2">duran un suspiro...</span>
                        <span className="font-heading text-[#FFFDD0] italic font-medium tracking-normal block mt-4" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.8), 0 5px 20px rgba(0,0,0,0.5)' }}>
                            hacelos eternos.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="font-body text-sm md:text-lg text-white/90 font-light mb-12 max-w-xl mx-auto leading-relaxed drop-shadow-xl tracking-wide"
                    >
                        Zapatitos artesanales de suela blanda que abrazan sus piecitos con la ternura que solo una mamá entiende.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
                    >
                        <Button
                            href="/shop"
                            variant="outline"
                            size="lg"
                            className="border-white/40 hover:border-white w-full sm:w-auto max-w-xs"
                        >
                            Elegir su primer recuerdo
                        </Button>
                        <Button
                            href="/regalo"
                            variant="caviar"
                            size="lg"
                            className="text-white border-white/30 hover:border-white w-full sm:w-auto max-w-xs"
                        >
                            🎁 Regalar amor eterno
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
