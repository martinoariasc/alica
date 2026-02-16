'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    blur?: boolean;
    scale?: number;
    once?: boolean;
}

const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
    none: { y: 0, x: 0 },
};

export default function AnimatedSection({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    blur = false,
    scale = 1,
    once = true,
}: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-50px' });

    const offset = directionMap[direction];

    const hidden = {
        opacity: 0,
        ...offset,
        scale,
        ...(blur ? { filter: 'blur(10px)' } : {}),
    };

    const visible = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1],
        },
    };

    return (
        <motion.div
            ref={ref}
            initial={hidden}
            animate={isInView ? visible : hidden}
            className={className}
            style={{ willChange: 'opacity, transform' }}
        >
            {children}
        </motion.div>
    );
}
