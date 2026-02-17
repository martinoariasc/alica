'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { buildWhatsAppURL } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Sparkles, HandHeart, Eye, Shield, Leaf } from 'lucide-react';

const timeline = [
    {
        year: '2022',
        title: 'Una idea nace',
        desc: 'Todo empezó con una mamá que no encontraba zapatitos suaves para su bebé.',
    },
    {
        year: '2023',
        title: 'Primeras puntadas',
        desc: 'Aprendimos el arte del calzado artesanal. Cada par era un experimento de amor.',
    },
    {
        year: '2024',
        title: 'ALICA crece',
        desc: 'Cientos de mamás confían en nosotros. Cada pedido viene con un abrazo.',
    },
    {
        year: '2025',
        title: 'El futuro',
        desc: 'Seguimos confeccionando a mano, porque la calidad no se apura.',
    },
];

const values = [
    {
        icon: Heart,
        title: 'Amor en cada puntada',
        desc: 'Cada par lleva 3 horas de confección manual. No hay máquinas, solo corazón.',
    },
    {
        icon: Shield,
        title: 'Seguridad primero',
        desc: 'Materiales certificados, libres de tóxicos. Porque la piel de tu bebé merece lo mejor.',
    },
    {
        icon: Leaf,
        title: 'Slow Fashion',
        desc: 'Producimos bajo pedido. Cero desperdicio, máxima calidad, mínimo impacto.',
    },
    {
        icon: Sparkles,
        title: 'Diseño con propósito',
        desc: 'Cada modelo está pensado para acompañar el desarrollo natural de sus piecitos.',
    },
    {
        icon: HandHeart,
        title: 'Comunidad maternal',
        desc: 'No somos una empresa, somos una familia de mamás que buscan lo mejor.',
    },
    {
        icon: Eye,
        title: 'Transparencia total',
        desc: 'Te mostramos el proceso completo. Sin secretos, sin intermediarios.',
    },
];

export default function NosotrosPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-soft/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px]" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
                    <AnimatedSection>
                        <span className="inline-block text-6xl mb-6">🤍</span>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
                            Detrás de cada par hay
                            <br />
                            <span className="gradient-text italic font-light">una mamá que entiende</span>
                        </h1>
                        <p className="font-body text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
                            ALICA nació del amor de una madre que quería algo mejor para su bebé.
                            Hoy es un emprendimiento familiar que confecciona a mano los zapatitos más suaves del Paraguay.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Origin Story */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2670&auto=format&fit=crop"
                                    alt="Fundadora de ALICA"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-6">
                                Nuestra Historia
                            </h2>
                            <div className="space-y-4 text-charcoal/80 leading-relaxed">
                                <p>
                                    Todo comenzó con una búsqueda simple: <strong>zapatitos blandos, seguros y bonitos</strong> para mi bebé.
                                    Después de no encontrar nada que me convenciera, decidí hacerlos yo misma.
                                </p>
                                <p>
                                    Las primeras puntadas fueron imperfectas, pero cada una llevaba todo mi amor.
                                    Hoy esa misma dedicación está en cada par de ALICA.
                                </p>
                                <p>
                                    <span className="text-rose-deep font-semibold">No somos una fábrica.</span> Somos
                                    un emprendimiento familiar que elige la lentitud del trabajo hecho a mano porque
                                    sabemos que los piecitos de tu bebé merecen lo mejor.
                                </p>
                                <p className="text-lg font-heading italic text-rose-deep border-l-4 border-rose-light pl-4">
                                    &ldquo;Cada par que sale de mis manos lleva la misma dedicación que le puse
                                    al primer par que hice para mi hijo.&rdquo;
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <SectionTitle
                            title="Nuestro Camino"
                            subtitle="Una historia que se escribe con cada par"
                        />
                    </AnimatedSection>

                    <div className="relative">
                        {/* Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-rose-light/50 -translate-x-1/2 hidden md:block" />

                        {timeline.map((item, i) => (
                            <AnimatedSection key={item.year} delay={i * 0.1}>
                                <div className={`flex flex-col md:flex-row items-center gap-6 mb-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={`flex-1 ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                                        <h3 className="font-heading text-xl font-semibold text-charcoal mb-1">{item.title}</h3>
                                        <p className="text-sm text-charcoal/70">{item.desc}</p>
                                    </div>
                                    <div className="relative z-10 flex-shrink-0">
                                        <motion.div
                                            className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-rose-light flex items-center justify-center"
                                            whileInView={{ scale: [0.8, 1.1, 1] }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                        >
                                            <span className="font-heading text-sm font-bold text-rose-deep">{item.year}</span>
                                        </motion.div>
                                    </div>
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <SectionTitle
                            title="Lo que nos mueve"
                            subtitle="Nuestros valores en cada puntada"
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <AnimatedSection key={value.title} delay={i * 0.1}>
                                    <motion.div
                                        className="p-6 rounded-2xl bg-bg-warm/50 border border-transparent hover:border-rose-light/50 transition-all duration-300"
                                        whileHover={{ y: -4 }}
                                    >
                                        <div className="w-12 h-12 rounded-full bg-rose-light/30 flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6 text-rose-deep" />
                                        </div>
                                        <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">{value.title}</h3>
                                        <p className="text-sm text-charcoal/70 leading-relaxed">{value.desc}</p>
                                    </motion.div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-rose-light/20 to-transparent">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                    <AnimatedSection>
                        <span className="text-5xl mb-6 inline-block">💛</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-6">
                            ¿Querés ser parte de esta historia?
                        </h2>
                        <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
                            Cada par de ALICA conecta a una mamá artesana con una mamá que quiere lo mejor.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button href="/shop" variant="primary" size="lg">
                                Ver colección
                            </Button>
                            <Button
                                href={buildWhatsAppURL('¡Hola! Quiero saber más sobre ALICA 🤍')}
                                variant="whatsapp"
                                external
                            >
                                Escribinos
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
