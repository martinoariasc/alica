import { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { buildWhatsAppURL } from '@/lib/utils';
import { MapPin, Phone, Clock, Instagram, Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contacto',
    description:
        'Contactá a Alica Bebés por WhatsApp. Zapatitos artesanales de suela blanda para bebés en Paraguay.',
};

const contactInfo = [
    {
        icon: Phone,
        title: 'WhatsApp',
        text: 'Escribinos para consultar o hacer tu pedido',
        action: 'Abrir WhatsApp',
        href: buildWhatsAppURL('¡Hola! Quiero más información sobre Alica 🍼'),
    },
    {
        icon: Instagram,
        title: 'Instagram',
        text: '@alicapy_',
        action: 'Ver perfil',
        href: 'https://instagram.com/alicapy_',
    },
    {
        icon: Mail,
        title: 'Email',
        text: 'alicabebes@gmail.com',
        action: 'Enviar correo',
        href: 'mailto:alicabebes@gmail.com',
    },
    {
        icon: MapPin,
        title: 'Ubicación',
        text: 'Paraguay',
        action: null,
        href: null,
    },
    {
        icon: Clock,
        title: 'Horario',
        text: 'Lunes a Sábado, 8:00 a 20:00',
        action: null,
        href: null,
    },
];

export default function ContactoPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <AnimatedSection>
                        <SectionTitle
                            title="Contacto"
                            subtitle="Estamos para ayudarte. Escribinos y te respondemos al instante."
                        />
                    </AnimatedSection>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                        {contactInfo.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <AnimatedSection key={i} delay={i * 0.1}>
                                    <div className="bg-white rounded-3xl p-8 shadow-sm text-center hover:shadow-md transition-shadow duration-300">
                                        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-rose-light/50 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-rose-deep" />
                                        </div>
                                        <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-muted mb-4">{item.text}</p>
                                        {item.action && item.href && (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-rose-deep font-medium hover:underline"
                                            >
                                                {item.action} →
                                            </a>
                                        )}
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>

                    {/* Main CTA */}
                    <AnimatedSection className="text-center">
                        <div className="bg-gradient-to-br from-rose-light/20 to-transparent rounded-3xl p-12 backdrop-blur-sm border border-rose-light/20 shadow-xl">
                            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal mb-4">
                                ¿Tenés alguna pregunta?
                            </h2>
                            <p className="text-muted mb-8 max-w-md mx-auto">
                                No dudes en escribirnos. Respondemos rápido y con mucho gusto.
                            </p>
                            <Button
                                href={buildWhatsAppURL('¡Hola! Tengo una consulta sobre Alica 🍼')}
                                variant="whatsapp"
                                size="lg"
                                external
                            >
                                Escribir por WhatsApp
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
