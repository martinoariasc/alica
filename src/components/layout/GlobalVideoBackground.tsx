'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function GlobalVideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { scrollYProgress } = useScroll();

    // Smooth transform for paralax effect (optional but nice)
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

    return (
        <div className="fixed inset-0 w-full h-screen -z-50 overflow-hidden bg-[#FAF7F5]">
            {/* The Video Layer - Fabric Texture */}
            <motion.div
                className="absolute inset-0 w-full h-[110%]"
                style={{ y }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 mix-blend-multiply transition-opacity duration-1000"
                    preload="auto"
                >
                    <source src="/videos/fondo-1.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Premium Grainy Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            {/* Subtle Gradient to prevent harsh edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#FAF7F5]/80 pointer-events-none" />
        </div>
    );
}
