'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useRef } from 'react';

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Parallax Background Image */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop')`
                    }}
                />
                {/* Overlays for readability */}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs md:text-sm font-body tracking-[0.2em] uppercase mb-8 border border-white/20 shadow-lg">
                        Artesanal · Suave · Único
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                    className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                    Zapatitos hechos <span className="italic font-light">con amor</span>
                    <br />
                    <span className="text-rose-light" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>para sus primeros pasos</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="font-body text-lg md:text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Diseñados para cuidar el desarrollo natural del pie de tu bebé,<br className="hidden md:block" /> con materiales suaves que abrazan cada movimiento.
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
