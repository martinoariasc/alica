'use client';

import { ReactNode } from 'react';

interface FloatingElementProps {
    children: ReactNode;
    className?: string;
    amplitude?: number;
    duration?: number;
    delay?: number;
    rotate?: number;
    horizontal?: number;
}

/**
 * Continuous organic floating motion using pure CSS animations.
 * Zero JS overhead — all animation runs on the compositor thread.
 */
export default function FloatingElement({
    children,
    className = '',
    amplitude = 12,
    duration = 6,
    delay = 0,
    rotate = 0,
    horizontal = 0,
}: FloatingElementProps) {
    const keyframes = rotate
        ? `@keyframes fe-${Math.abs(amplitude)}-${Math.abs(rotate)} { 0%,100% { transform: translateY(0) translateX(0) rotate(0deg); } 50% { transform: translateY(${-amplitude}px) translateX(${horizontal}px) rotate(${rotate}deg); } }`
        : `@keyframes fe-${Math.abs(amplitude)} { 0%,100% { transform: translateY(0); } 50% { transform: translateY(${-amplitude}px); } }`;

    const animName = rotate
        ? `fe-${Math.abs(amplitude)}-${Math.abs(rotate)}`
        : `fe-${Math.abs(amplitude)}`;

    return (
        <>
            <style>{keyframes}</style>
            <div
                className={className}
                style={{
                    animation: `${animName} ${duration}s ease-in-out ${delay}s infinite`,
                    willChange: 'transform',
                }}
            >
                {children}
            </div>
        </>
    );
}
