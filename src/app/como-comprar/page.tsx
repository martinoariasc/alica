import { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { buildWhatsAppURL } from '@/lib/utils';
import { ShoppingBag, MessageCircle, CreditCard, Hammer, Truck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Cómo Comprar',
    description:
        'Conocé el proceso de compra en Alica Bebés. Elegí tu producto, coordinamos por WhatsApp, y recibí tus zapatitos artesanales.',
};

const steps = [
    {
        icon: ShoppingBag,
        number: '01',
        title: 'Elegí tu producto',
        description: 'Explorá nuestra tienda y elegí los zapatitos o accesorios que más te gusten.',
    },
    {
        icon: MessageCircle,
        number: '02',
        title: 'Contactanos por WhatsApp',
        description: 'Escribinos y te asesoramos sobre talles, colores y disponibilidad.',
    },
    {
        icon: CreditCard,
        number: '03',
        title: 'Pagá el 50% de seña',
        description: 'Confirmá tu pedido con un depósito del 50%. Aceptamos transferencias.',
    },
    {
        icon: Hammer,
        number: '04',
        title: 'Producción artesanal',
        description: 'Hacemos tu pedido a mano con dedicación. Tarda entre 3 a 7 días hábiles.',
    },
    {
        icon: Truck,
        number: '05',
        title: 'Entrega',
        description: 'Te enviamos tu pedido a cualquier parte de Paraguay. ¡Listo para usar!',
    },
];

export default function ComoComprarPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-rose-light/30 to-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <AnimatedSection>
                        <SectionTitle
                            title="¿Cómo Comprar?"
                            subtitle="Es muy fácil. Solo 5 pasos para tener los zapatitos de tu bebé."
                        />
                    </AnimatedSection>
                </div>
            </section>

            {/* Steps */}
            <section className="pb-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="space-y-12">
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <AnimatedSection key={i} delay={i * 0.1}>
                                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-white/50 backdrop-blur-sm rounded-[2rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-white/20 text-center md:text-left">
                                        <div className="flex-shrink-0">
                                            <div className="w-20 h-20 rounded-[1.5rem] bg-rose-light/50 flex items-center justify-center relative">
                                                <Icon className="w-8 h-8 text-rose-deep" />
                                                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-deep text-white text-sm flex items-center justify-center font-bold">
                                                    {step.number}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-heading text-2xl font-semibold text-charcoal mb-4 leading-relaxed">
                                                {step.title}
                                            </h3>
                                            <p className="text-muted leading-[2.2] font-light text-lg">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <AnimatedSection className="text-center mt-32">
                        <h3 className="font-heading text-3xl font-semibold text-charcoal mb-8">
                            ¿Lista para empezar?
                        </h3>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                            <Button href="/shop" variant="primary" size="lg" className="min-w-[240px]">
                                Ver productos
                            </Button>
                            <Button
                                href={buildWhatsAppURL('¡Hola! Quiero hacer mi pedido 🍼')}
                                variant="whatsapp"
                                size="lg"
                                external
                                className="min-w-[300px]"
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
