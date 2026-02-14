'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useRef } from 'react';

export default function SecondaryHeroSection() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

    return (
        <section ref={ref} className="relative h-[50vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center my-12 md:my-24">
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
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-md">
                        Comodidad que se siente
                    </h2>
                    <p className="font-body text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto drop-shadow-sm">
                        Materiales tan suaves que tu bebé ni notará que los lleva puestos.
                    </p>
                    <Button
                        href="/shop"
                        variant="primary"
                        className="!bg-white !text-charcoal hover:!bg-cream shadow-xl"
                    >
                        Descubrir Modelos
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
