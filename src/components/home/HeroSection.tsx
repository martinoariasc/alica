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
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-stone-900">
            {/* Video Background with Parallax */}
            <motion.div className="absolute inset-0 z-0" style={{ scale }}>
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
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-black/15" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
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
                    className="font-body text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold !text-white leading-tight mb-6 drop-shadow-2xl tracking-tight"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 5px 20px rgba(0,0,0,0.3)' }}
                >
                    <span className="text-white">Sus primeros pasos</span>
                    <br />
                    <span className="italic font-normal text-white opacity-100">duran un suspiro...</span>
                    <br />
                    <span className="font-heading text-[#FFFDD0] italic font-medium tracking-normal" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.8), 0 5px 20px rgba(0,0,0,0.5)' }}>
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
                    >
                        Elegir su primer recuerdo
                    </Button>
                    <Button
                        href="/regalo"
                        variant="caviar"
                        size="lg"
                        className="text-white border-white/30 hover:border-white"
                    >
                        🎁 Regalar amor eterno
                    </Button>
                </motion.div>
            </motion.div>

        </section>
    );
}
