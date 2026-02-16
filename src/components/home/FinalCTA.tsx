'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { buildWhatsAppURL } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function FinalCTA() {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-br from-rose-light/40 via-bg-warm to-rose-light/20 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-rose/10 blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-soft/10 blur-[120px]" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
                <AnimatedSection>
                    {/* Urgency Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal/5 border border-charcoal/10 mb-8"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    >
                        <Clock className="w-4 h-4 text-rose-deep" />
                        <span className="text-sm text-charcoal/80 font-medium">
                            Esta semana solo podemos tomar 8 pedidos más
                        </span>
                    </motion.div>

                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-6 leading-tight">
                        Cerrá los ojos e imaginá
                        <br />
                        <span className="gradient-text italic">su primer pasito hacia vos...</span>
                    </h2>
                    <p className="text-lg text-muted font-light mb-3 max-w-xl mx-auto">
                        Ahora imaginalo con los zapatitos más suaves que existen.
                    </p>
                    <p className="text-base text-muted font-light mb-10 max-w-xl mx-auto">
                        Escribinos por WhatsApp y en 2 minutos te ayudamos a elegir el par perfecto para tu bebé. Sin compromiso.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            href={buildWhatsAppURL('¡Hola! Quiero elegir los zapatitos de mi bebé 🍼')}
                            variant="primary"
                            size="lg"
                            external
                            className="text-lg px-12 shadow-2xl"
                        >
                            Quiero elegir los suyos 💛
                        </Button>
                        <Button href="/shop" variant="caviar" size="lg">
                            Ver toda la colección
                        </Button>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
