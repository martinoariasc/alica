'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { buildWhatsAppURL } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Sparkles, HandHeart, Eye, Shield, Leaf } from 'lucide-react';

// Custom Luxury Spacer - Consistent across pages
const LuxurySpacer = () => (
    <div className="w-full py-16 md:py-24 flex items-center justify-center pointer-events-none">
        <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
    </div>
);

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
        <main className="w-full flex flex-col items-center bg-transparent">
            {/* Hero */}
            <section className="pt-40 pb-20 relative overflow-hidden w-full">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-soft/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px]" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
                    <AnimatedSection>
                        <span className="inline-block text-5xl mb-8">🤍</span>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-charcoal mb-8 leading-[1.1]">
                            Detrás de cada par hay
                            <br />
                            <span className="italic font-light text-stone-400">una mamá que entiende.</span>
                        </h1>
                        <p className="font-body text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-light">
                            ALICA nació del amor de una madre que quería algo mejor para su bebé.
                            Hoy es un emprendimiento familiar que confecciona a mano los zapatitos más suaves del Paraguay.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <LuxurySpacer />

            {/* Origin Story */}
            <section className="py-20 w-full">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                        <AnimatedSection direction="left">
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2670&auto=format&fit=crop"
                                    alt="Fundadora de ALICA"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2} direction="right">
                            <span className="font-heading text-rose-deep text-sm tracking-[0.3em] uppercase block mb-6">Desde el corazón</span>
                            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-charcoal mb-8 leading-tight">
                                Nuestra Historia
                            </h2>
                            <div className="space-y-6 text-stone-500 font-light text-lg leading-relaxed">
                                <p>
                                    Todo comenzó con una búsqueda simple: <strong className="text-charcoal font-medium">zapatitos blandos, seguros y bonitos</strong> para mi bebé.
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
                                <div className="pt-4 border-l-2 border-rose-deep/30 pl-8">
                                    <p className="text-xl font-heading italic text-charcoal leading-relaxed">
                                        &ldquo;Cada par que sale de mis manos lleva la misma dedicación que le puse
                                        al primer par que hice para mi hijo.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <LuxurySpacer />

            {/* Timeline */}
            <section className="py-20 w-full bg-stone-50/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <SectionTitle
                            title="Nuestro Camino"
                            subtitle="Una historia que se escribe con cada par"
                        />
                    </AnimatedSection>

                    <div className="relative mt-20">
                        {/* Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2 hidden md:block" />

                        {timeline.map((item, i) => (
                            <AnimatedSection key={item.year} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                                <div className={`flex flex-col md:flex-row items-center gap-10 mb-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={`flex-1 ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                                        <h3 className="font-heading text-2xl font-semibold text-charcoal mb-3">{item.title}</h3>
                                        <p className="text-stone-500 font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                    <div className="relative z-10 flex-shrink-0">
                                        <motion.div
                                            className="w-20 h-20 rounded-full bg-white shadow-xl shadow-stone-200 border-border flex items-center justify-center"
                                            whileInView={{ scale: [0.8, 1.1, 1] }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                        >
                                            <span className="font-heading text-lg font-bold text-rose-deep">{item.year}</span>
                                        </motion.div>
                                    </div>
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <LuxurySpacer />

            {/* Values */}
            <section className="py-20 w-full">
                <div className="max-w-6xl mx-auto px-6">
                    <AnimatedSection blur>
                        <SectionTitle
                            title="Lo que nos mueve"
                            subtitle="Nuestros valores en cada puntada"
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {values.map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <AnimatedSection key={value.title} delay={i * 0.1}>
                                    <motion.div
                                        className="p-10 rounded-[2.5rem] bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 group"
                                        whileHover={{ y: -8 }}
                                    >
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-rose-light/20 flex items-center justify-center mb-8 group-hover:bg-rose-deep group-hover:text-white transition-colors duration-500">
                                            <Icon className="w-7 h-7 text-rose-deep group-hover:text-white transition-colors duration-500" />
                                        </div>
                                        <h3 className="font-heading text-2xl font-semibold text-charcoal mb-4 tracking-tight">{value.title}</h3>
                                        <p className="text-stone-500 font-light leading-relaxed text-base">{value.desc}</p>
                                    </motion.div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            <LuxurySpacer />

            {/* CTA */}
            <section className="py-24 w-full bg-[#2A2421] overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-light rounded-full blur-[100px]" />
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <AnimatedSection blur>
                        <span className="inline-block px-4 py-2 rounded-full border border-white/20 text-white/60 text-xs tracking-[0.3em] uppercase mb-8">
                            Unite a la historia
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl font-semibold text-white mb-8 leading-[1.2]">
                            ¿Querés ser parte<br />
                            <span className="italic font-light text-rose-light/80">de esta historia?</span>
                        </h2>
                        <p className="text-xl text-stone-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                            Cada par de ALICA conecta a una mamá artesana con una mamá que busca proteger lo más valioso que tiene.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <Button href="/shop" variant="primary" size="lg" className="w-full sm:w-auto h-16 px-12 bg-white text-stone-900 border-white hover:bg-stone-100 capitalize">
                                Ver colección
                            </Button>
                            <Button
                                href={buildWhatsAppURL('¡Hola! Quiero ser parte de la historia de ALICA 🤍')}
                                variant="outline"
                                size="lg"
                                external
                                className="w-full sm:w-auto h-16 px-12 border-white/20 text-white hover:bg-white/10 capitalize"
                            >
                                Escribinos
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <LuxurySpacer />
        </main>
    );
}
