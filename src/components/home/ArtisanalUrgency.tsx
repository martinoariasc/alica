'use client';

import { motion } from 'framer-motion';

const tickerItems = [
    '⏳ Slow Fashion',
    '✋ Solo 15 pares por semana',
    '🤍 100% Artesanal',
    '🧵 Cosido a mano',
    '📦 Envío a todo Paraguay',
    '🎁 Empaque de regalo premium',
    '🍼 Suela blanda certificada',
    '💛 Hecho con amor de mamá',
];

export default function ArtisanalUrgency() {
    const duplicatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

    return (
        <section className="py-4 bg-charcoal text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 pointer-events-none" />
            <motion.div
                className="flex whitespace-nowrap gap-8"
                animate={{ x: ['0%', '-33.33%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: 'linear',
                }}
            >
                {duplicatedItems.map((item, i) => (
                    <span
                        key={i}
                        className="font-heading text-sm md:text-base tracking-wide font-light flex-shrink-0 flex items-center gap-2"
                    >
                        <span>{item}</span>
                        <span className="text-gold/60 text-xs">✦</span>
                    </span>
                ))}
            </motion.div>
        </section>
    );
}
