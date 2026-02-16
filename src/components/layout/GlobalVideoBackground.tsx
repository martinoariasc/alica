'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function GlobalVideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { scrollYProgress } = useScroll();

    // Smooth transform for paralax effect (optional but nice)
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

    return (
        <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-bg-warm/80">
            {/* The Video Layer */}
            <motion.div
                className="absolute inset-0 w-full h-[120%]" // 120% height for parallax
                style={{ y }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40 mix-blend-multiply filter contrast-[0.9] saturate-[0.8]"
                    preload="auto"
                >
                    <source src="/videos/fondo-1.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Texture/Noise Overlay (Kept for premium feel + video combo) */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48ZmlsdGVyIGlkPSJnoiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2cpIiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-40 mix-blend-overlay pointer-events-none" />

            {/* Gradient Overlay to fade bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-warm/90 via-bg-warm/20 to-bg-warm/10 pointer-events-none" />
        </div>
    );
}
