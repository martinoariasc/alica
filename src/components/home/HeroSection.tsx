'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
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
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Video Background with Parallax */}
            <motion.div className="absolute inset-0 z-0" style={{ scale }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/images/hero-poster.jpg"
                >
                    <source src="/videos/hero-1.mp4" type="video/mp4" />
                </video>
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center"
                style={{ y, opacity }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <span className="inline-block px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-white font-medium text-xs md:text-sm tracking-[0.2em] uppercase mb-8 border border-white/20 shadow-lg">
                        Cosidos a mano · Solo 15 pares por semana
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                    className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.05] mb-6 drop-shadow-2xl"
                    style={{ textShadow: '0 2px 5px rgba(0,0,0,0.8), 0 5px 20px rgba(0,0,0,0.5)' }}
                >
                    Sus primeros pasos
                    <br />
                    <span className="italic text-white">duran un suspiro...</span>
                    <br />
                    <span className="text-[#FFFDD0] font-medium" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.8), 0 5px 20px rgba(0,0,0,0.5)' }}>
                        hacelos eternos.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="font-body text-base md:text-xl text-white font-light mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-xl tracking-wide"
                >
                    Zapatitos artesanales de suela blanda que abrazan sus piecitos con la ternura que solo una mamá entiende.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5"
                >
                    <Button
                        href="/shop"
                        variant="primary"
                        size="lg"
                        className="!bg-rose-deep !text-white hover:!bg-rose hover:!scale-105 min-w-[220px] shadow-xl shadow-rose-deep/20"
                    >
                        Elegir su primer recuerdo
                    </Button>
                    <Button
                        href="/regalo"
                        variant="outline"
                        size="lg"
                        className="!border-white !text-white hover:!bg-white hover:!text-charcoal min-w-[220px] backdrop-blur-sm"
                    >
                        🎁 Regalar amor eterno
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
            >
                <span className="text-white/60 text-[10px] font-body tracking-[0.2em] uppercase">
                    Descubrí más
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="w-6 h-10 rounded-full border border-white/40 flex items-start justify-center p-1.5 backdrop-blur-sm"
                >
                    <div className="w-1 h-2 rounded-full bg-white" />
                </motion.div>
            </motion.div>
        </section>
    );
}
