'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const processSteps = [
    { number: '01', title: 'Diseño', desc: 'Imaginamos cada modelo pensando en los deditos de tu bebé.' },
    { number: '02', title: 'Corte', desc: 'Manos de mamá seleccionan y cortan el cuero más suave.' },
    { number: '03', title: 'Costura', desc: '3 horas de puntadas llenas de amor y paciencia infinita.' },
    { number: '04', title: 'Entrega', desc: 'Envuelto con ternura, listo para hacerte llorar de emoción.' },
];

export default function StorySection() {
    return (
        <section className="py-20 md:py-28 bg-bg-warm/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <AnimatedSection>
                            <SectionTitle
                                title="Cada puntada lleva el nombre de tu bebé"
                                subtitle="No es producción, es devoción"
                                className="!text-center lg:!text-left !items-center lg:!items-start mb-8"
                            />
                            <p className="font-body text-lg text-stone-600 leading-loose mb-6 font-light">
                                Cuando sostenés un par de ALICA, vas a sentir algo diferente.
                                No es solo tela e hilo — es la <span className="italic font-medium text-stone-800">misma dedicación</span> que
                                vos ponés al vestirlo cada mañana.
                            </p>
                            <p className="font-body text-lg text-stone-600 leading-loose mb-12 font-light">
                                Mientras las fábricas producen miles por hora, nosotros invertimos
                                <strong className="text-rose-deep font-medium"> 3 horas de manos que aman</strong> en cada par.
                                Porque los piecitos que van a dar los pasos más importantes de su vida
                                no merecen algo hecho a las apuradas.
                            </p>

                            {/* Process Steps - Spacious & Clean */}
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-12">
                                {processSteps.map((step, i) => (
                                    <AnimatedSection key={step.number} delay={i * 0.1}>
                                        <div className="group">
                                            <span className="block font-heading text-4xl text-rose-deep/20 mb-2 group-hover:text-rose-deep/40 transition-colors">{step.number}</span>
                                            <h4 className="font-heading text-lg text-stone-800 mb-1">{step.title}</h4>
                                            <p className="text-sm text-stone-500 font-light leading-relaxed">{step.desc}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>

                            <Link
                                href="/nosotros"
                                className="inline-block border-b border-rose-deep pb-1 text-rose-deep font-heading text-lg hover:text-stone-800 hover:border-stone-800 transition-all"
                            >
                                Conocé a la mamá detrás de cada par
                            </Link>
                        </AnimatedSection>
                    </div>

                    {/* Image / Video Container - Clean & Minimalist */}
                    <div className="order-1 lg:order-2">
                        <AnimatedSection delay={0.2}>
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-stone-100">
                                {/* NOTE: User will upload video here. Currently placeholder image. */}
                                <Image
                                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669&auto=format&fit=crop"
                                    alt="Proceso artesanal ALICA"
                                    fill
                                    className="object-cover opacity-90"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                {/* Soft overlay for elegance */}
                                <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
