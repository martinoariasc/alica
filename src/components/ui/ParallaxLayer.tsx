'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxLayerProps {
    children: ReactNode;
    speed?: number;
    className?: string;
}

/**
 * Lightweight parallax wrapper. Uses transform: translate3d for GPU acceleration.
 */
export default function ParallaxLayer({
    children,
    speed = 0.3,
    className = '',
}: ParallaxLayerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const range = speed * 80;
    const y = useTransform(scrollYProgress, [0, 1], [`${range}px`, `${-range}px`]);

    return (
        <div ref={ref} className={`relative ${className}`}>
            <motion.div style={{ y, willChange: 'transform' }}>
                {children}
            </motion.div>
        </div>
    );
}
