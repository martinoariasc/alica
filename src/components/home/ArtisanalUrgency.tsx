'use client';

import { motion } from 'framer-motion';

const tickerItems = [
    '💛 Hechos con amor de mamá',
    '✋ Solo 15 pares por semana',
    '🧵 3 horas de puntadas a mano',
    '🍃 Materiales que cuidan su piel',
    '📦 Envío con empaque de regalo',
    '🐾 Suela blanda para piecitos libres',
    '⏳ Slow Fashion consciente',
    '🤍 Cada par es único, como tu bebé',
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
