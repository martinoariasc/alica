'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function HeroSection() {
    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const videos = ['/videos/hero-1.mp4', '/videos/hero-2.mp4'];

    useEffect(() => {
        const currentVideoEl = videoRefs.current[currentVideo];
        if (currentVideoEl) {
            currentVideoEl.play().catch(() => { });
        }
    }, [currentVideo]);

    const handleVideoEnd = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            {videos.map((src, i) => (
                <video
                    key={src}
                    ref={(el) => { videoRefs.current[i] = el; }}
                    src={src}
                    muted
                    playsInline
                    preload={i === 0 ? 'auto' : 'none'}
                    onEnded={handleVideoEnd}
                    className={`hero-video transition-opacity duration-1000 ${i === currentVideo ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-sm font-body tracking-widest uppercase mb-6 border border-white/20">
                            Artesanal · Suave · Único
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6 drop-shadow-lg"
                    >
                        Zapatitos hechos con amor
                        <br />
                        <span className="text-rose-light drop-shadow-md">para los primeros pasos</span>
                        <br />
                        de tu bebé
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                        className="font-body text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto"
                    >
                        Diseño artesanal · Materiales suaves · Confort real
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            href="/shop"
                            variant="primary"
                            size="lg"
                            className="!bg-white !text-charcoal hover:!bg-rose-light hover:!text-charcoal min-w-[200px]"
                        >
                            Ver colección
                        </Button>
                        <Button
                            href="/como-comprar"
                            variant="outline"
                            size="lg"
                            className="!border-white/40 !text-white hover:!bg-white/15 hover:!border-white/60 min-w-[200px]"
                        >
                            ¿Cómo comprar?
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/50 text-xs font-body tracking-widest uppercase">
                    Deslizá
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
                >
                    <div className="w-1 h-2 rounded-full bg-white/60" />
                </motion.div>
            </motion.div>
        </section>
    );
}
