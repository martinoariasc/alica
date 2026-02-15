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
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            href={buildWhatsAppURL('¡Hola! Quiero elegir los zapatitos de mi bebé 🍼')}
                            variant="whatsapp"
                            size="lg"
                            external
                            className="text-lg px-12"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Quiero elegir los suyos 💛
                        </Button>
                        <Button href="/shop" variant="secondary" size="lg">
                            Ver toda la colección
                        </Button>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
