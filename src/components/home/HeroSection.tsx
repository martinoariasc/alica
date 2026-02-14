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

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
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
                {/* Overlays for readability - Lighter for natural look but keeping text legible */}
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-medium text-xs md:text-sm tracking-[0.2em] uppercase mb-8 border border-white/20 shadow-lg">
                        Confección bajo pedido · 100% Artesanal
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                    className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 drop-shadow-lg"
                    style={{ textShadow: '0 4px 60px rgba(0,0,0,0.7)' }}
                >
                    Zapatitos hechos <span className="italic font-light">con amor</span>
                    <br />
                    <span className="text-rose-light" style={{ textShadow: '0 4px 60px rgba(0,0,0,0.7)' }}>para sus primeros pasos</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="font-body text-base md:text-xl text-white font-normal mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                >
                    Sin stock, sin prisas. Cada par se confecciona exclusivamente para tu bebé,<br className="hidden md:block" /> cuidando cada detalle de su desarrollo.
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
                        Ver colección
                    </Button>
                    <Button
                        href="/como-comprar"
                        variant="outline"
                        size="lg"
                        className="!border-white !text-white hover:!bg-white hover:!text-charcoal min-w-[220px] backdrop-blur-sm"
                    >
                        ¿Cómo comprar?
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
            >
                <span className="text-white/60 text-[10px] font-body tracking-[0.2em] uppercase">
                    Descubre más
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
