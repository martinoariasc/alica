'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const processSteps = [
    { number: '01', title: 'Diseño', desc: 'Cada modelo nace de la inspiración maternal.' },
    { number: '02', title: 'Corte', desc: 'Manos expertas cortan el cuero pieza a pieza.' },
    { number: '03', title: 'Costura', desc: '3 horas de puntadas llenas de amor.' },
    { number: '04', title: 'Entrega', desc: 'Empacado con cariño, listo para emocionar.' },
];

export default function StorySection() {
    return (
        <section className="py-20 md:py-28 bg-bg-warm/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <AnimatedSection>
                            <SectionTitle
                                title="Manos que crean recuerdos"
                                subtitle="Más que una marca, somos una familia"
                                className="!text-center lg:!text-left !items-center lg:!items-start"
                            />
                            <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-4">
                                En un mundo de prisa, nosotros elegimos la <span className="italic text-charcoal font-medium">pausa</span>.
                                Cada par de ALICA se corta, cose y amolda a mano, pensando en los deditos que protegerá.
                            </p>
                            <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-10">
                                Cada par lleva <strong className="text-rose-deep">3 horas de manos que aman</strong>.
                                No es solo confección, es una promesa de cuidado para los pies que darán los pasos más importantes.
                            </p>

                            {/* Process Steps */}
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                {processSteps.map((step, i) => (
                                    <AnimatedSection key={step.number} delay={i * 0.1}>
                                        <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/60 transition-colors duration-300">
                                            <span className="font-heading text-2xl font-bold text-rose-deep/30">{step.number}</span>
                                            <div>
                                                <h4 className="font-heading text-sm font-semibold text-charcoal">{step.title}</h4>
                                                <p className="text-xs text-muted">{step.desc}</p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>

                            <Link
                                href="/nosotros"
                                className="inline-flex items-center gap-2 text-rose-deep font-heading font-semibold hover:text-charcoal transition-colors group"
                            >
                                Conocé nuestra historia
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </AnimatedSection>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2">
                        <AnimatedSection delay={0.2}>
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700">
                                <Image
                                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669&auto=format&fit=crop"
                                    alt="Proceso artesanal ALICA"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                <div className="absolute inset-0 border-[1px] border-white/30 m-4 rounded-2xl" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
