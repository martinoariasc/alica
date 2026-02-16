'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/ui/Button';

export default function SecondaryHeroSection() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

    return (
        <section ref={ref} className="relative h-[50vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center my-0">
            {/* Parallax Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div style={{ y }} className="relative w-full h-[140%] -top-[20%]">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/videos/hero-2.mp4" type="video/mp4" />
                    </video>
                </motion.div>
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="font-heading text-3xl md:text-5xl lg:text-7xl text-white mb-6 drop-shadow-lg leading-tight">
                        Ese pasito tembloroso<br />
                        <span className="italic font-light text-rose-light">que te hizo llorar de felicidad...</span>
                    </h2>
                    <p className="font-body text-lg md:text-2xl text-white/90 font-light max-w-3xl mx-auto drop-shadow-sm leading-relaxed mb-10">
                        Merece ser protegido con la suavidad que solo el amor hecho a mano puede dar.
                    </p>
                    <div className="flex justify-center">
                        <Button
                            href="/shop"
                            variant="ghost"
                            size="lg"
                            className="bg-white/5 backdrop-blur-md border-white/20 hover:bg-white hover:text-stone-900"
                        >
                            Elegir su primer par
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
