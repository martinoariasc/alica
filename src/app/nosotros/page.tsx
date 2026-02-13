import { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { Heart, Star, Gem, Eye } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Nosotros',
    description:
        'Conocé la historia de Alica Bebés. Zapatitos artesanales de suela blanda, diseñados con amor para los primeros pasos de tu bebé en Paraguay.',
};

const values = [
    {
        icon: Heart,
        title: 'Amor',
        text: 'Cada par es hecho con dedicación, como si fuera para nuestros propios bebés.',
    },
    {
        icon: Star,
        title: 'Calidad',
        text: 'Materiales premium, costuras seguras y acabados impecables.',
    },
    {
        icon: Gem,
        title: 'Artesanal',
        text: 'No somos una fábrica. Somos manos que crean con pasión.',
    },
    {
        icon: Eye,
        title: 'Detalle',
        text: 'Cada detalle importa cuando se trata de la comodidad de tu bebé.',
    },
];

export default function NosotrosPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-rose-light/30 to-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <AnimatedSection>
                        <SectionTitle
                            title="Nuestra Historia"
                            subtitle="Detrás de cada zapatito hay una historia de amor"
                        />
                    </AnimatedSection>
                </div>
            </section>

            {/* Story */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <div className="text-center space-y-6 text-lg text-charcoal/80 leading-relaxed">
                            <p>
                                <span className="font-heading text-2xl text-charcoal font-semibold">
                                    Alica
                                </span>{' '}
                                nació de un sueño simple: crear zapatitos que realmente cuiden
                                los pies de los bebés.
                            </p>
                            <p>
                                Nos dimos cuenta de que la mayoría del calzado infantil es duro,
                                caluroso y no respeta el desarrollo natural del pie. Así que
                                decidimos hacer las cosas diferente.
                            </p>
                            <p>
                                Cada par de zapatitos Alica es{' '}
                                <strong className="text-rose-deep">cosido a mano</strong>, con
                                materiales suaves e hipoalergénicos, pensados para que tu bebé
                                se sienta libre y cómodo en cada paso.
                            </p>
                            <p className="font-heading text-xl text-charcoal font-medium italic">
                                &ldquo;No solo hacemos zapatitos. Creamos recuerdos.&rdquo;
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-bg-warm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <SectionTitle
                            title="Nuestros Valores"
                            subtitle="Lo que nos hace únicos"
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <AnimatedSection key={v.title} delay={i * 0.1}>
                                    <div className="text-center p-6">
                                        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-rose-light/50 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-rose-deep" />
                                        </div>
                                        <h3 className="font-heading text-xl font-semibold mb-2">
                                            {v.title}
                                        </h3>
                                        <p className="text-sm text-muted">{v.text}</p>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                    <AnimatedSection>
                        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-6">
                            ¿Querés conocer nuestra colección?
                        </h2>
                        <Button href="/shop" variant="primary" size="lg">
                            Ver la tienda
                        </Button>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
