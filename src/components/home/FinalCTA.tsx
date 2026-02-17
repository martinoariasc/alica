'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import FloatingElement from '@/components/ui/FloatingElement';
import { buildWhatsAppURL } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function FinalCTA() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-rose-light/20 via-transparent to-rose-light/10 relative overflow-hidden w-full">
            {/* Reduced to 2 floating blobs (from 6+) */}
            <FloatingElement className="absolute top-10 left-10 pointer-events-none" amplitude={15} duration={10}>
                <div className="w-40 h-40 rounded-full bg-rose/10 blur-3xl" />
            </FloatingElement>
            <FloatingElement className="absolute bottom-10 right-10 pointer-events-none" amplitude={12} duration={12} delay={3}>
                <div className="w-48 h-48 rounded-full bg-gold/8 blur-3xl" />
            </FloatingElement>

            <div className="max-w-[90%] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 text-center relative z-10 flex flex-col items-center">
                <AnimatedSection blur className="w-full flex flex-col items-center">
                    {/* Urgency Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal/5 border border-charcoal/10 mb-8"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    >
                        <Clock className="w-4 h-4 text-rose-deep" />
                        <span className="text-sm text-charcoal/80 font-medium">
                            Esta semana solo podemos tomar 8 pedidos más
                        </span>
                    </motion.div>

                    <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-8 leading-[1.2] text-center">
                        Cerrá los ojos e imaginá
                        <br />
                        <span className="gradient-text italic">su primer pasito hacia vos...</span>
                    </h2>

                    {/* Centered paragraphs as requested */}
                    <div className="space-y-4 mb-12">
                        <p className="text-lg md:text-xl text-muted font-light max-w-2xl mx-auto text-center leading-relaxed">
                            Ahora imaginalo con los zapatitos más suaves que existen.
                        </p>
                        <p className="text-base md:text-lg text-muted font-light max-w-2xl mx-auto text-center leading-relaxed">
                            Escribinos por WhatsApp y en 2 minutos te ayudamos a elegir el par perfecto para tu bebé. Sin compromiso.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                        <Button
                            href={buildWhatsAppURL('¡Hola! Quiero elegir los zapatitos de mi bebé 🍼')}
                            variant="luxury"
                            size="lg"
                            external
                            className="text-lg px-12 w-full sm:w-auto min-w-[240px]"
                        >
                            Quiero elegir los suyos 💛
                        </Button>
                        <Button href="/shop" variant="outlineDark" size="lg" className="w-full sm:w-auto min-w-[240px]">
                            Ver toda la colección
                        </Button>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
