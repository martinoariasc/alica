'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface VideoSectionProps {
    src: string;
    className?: string;
    aspectRatio?: string;
    rounded?: string;
}

/**
 * Premium vertical video component with lazy loading,
 * autoplay on viewport entry, and graceful fallback.
 */
export default function VideoSection({
    src,
    className = '',
    aspectRatio = 'aspect-[9/16]',
    rounded = 'rounded-3xl',
}: VideoSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const isInView = useInView(ref, { once: false, margin: '-100px' });
    const [hasError, setHasError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isInView) {
            video.play().catch(() => { });
        } else {
            video.pause();
        }
    }, [isInView]);

    if (hasError) return null;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`relative ${aspectRatio} ${rounded} overflow-hidden shadow-2xl shadow-stone-300/30 border border-stone-100 ${className}`}
        >
            {/* Loading skeleton */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-stone-100 animate-pulse" />
            )}

            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onLoadedData={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
                className="w-full h-full object-cover object-center"
            >
                <source src={src} type="video/mp4" />
            </video>

            {/* Premium soft vignette */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-black/5" />
        </motion.div>
    );
}
