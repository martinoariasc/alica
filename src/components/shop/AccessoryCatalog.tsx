'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check, Heart, ShoppingBag } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface AccessoryOption {
    name: string;
    price: number;
    oldPrice: number;
    description: string;
    icon: string;
}

const accessoryOptions: AccessoryOption[] = [
    {
        name: 'Vincha Clásica',
        price: 20000,
        oldPrice: 30000,
        description: 'Elástica suave, no aprieta. Perfecta para el día a día.',
        icon: '🎀'
    },
    {
        name: 'Vincha Especial',
        price: 30000,
        oldPrice: 45000,
        description: 'Con detalles artesanales. Para ocasiones especiales.',
        icon: '👑'
    },
    {
        name: 'Pack x3 Vinchas',
        price: 45000,
        oldPrice: 60000,
        description: 'Ahorrás 15.000 Gs. Un color para cada día.',
        icon: '🎁'
    },
    {
        name: 'Baberito/Bandana',
        price: 35000,
        oldPrice: 50000,
        description: 'Doble capa absorbente. Mantiene seco con estilo.',
        icon: '🤍'
    },
    {
        name: 'Pack x3 Baberitos',
        price: 85000,
        oldPrice: 105000,
        description: 'Ahorrás 20.000 Gs. Máxima suavidad por triplicado.',
        icon: '🎁'
    },

];

export default function AccessoryCatalog() {
    const handleWhatsAppOrder = (itemName: string, price: number) => {
        const message = `Hola! Me interesa el accesorio: *${itemName}* (${price.toLocaleString()} Gs)`;
        const whatsappUrl = `https://wa.me/595984328246?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="py-24 md:py-40 bg-white relative overflow-hidden">
            {/* Soft decorative elements */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-rose-light/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gold-muted/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <AnimatedSection className="text-center mb-28" blur>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-8 bg-gold-muted" />
                        <span className="font-body text-[10px] tracking-[0.6em] uppercase text-gold font-bold">Detalles Boutique</span>
                        <div className="h-[1px] w-8 bg-gold-muted" />
                    </div>
                    <h1 className="font-heading text-5xl md:text-8xl text-cacao mb-10 leading-[1] tracking-tight">
                        Los Detalles que <br className="hidden md:block" />
                        <span className="italic font-light text-rose-deep drop-shadow-sm">Enamoran</span>
                    </h1>
                    <p className="font-body text-charcoal/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Complementos artesanales diseñados para armonizar con cada paso. <br className="hidden md:block" />
                        Suavidad táctil y elegancia atemporal para la piel más delicada.
                    </p>
                </AnimatedSection>

                {/* Main Feature Image - Full Width Aesthetic */}
                <div className="mb-32">
                    <div className="relative aspect-[16/9] md:aspect-[24/10] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(42,31,27,0.15)] group">
                        <Image
                            src="/images/products/accesorios/Accesorios/f8fb2468-c130-4f46-8952-ec5918a890b7.jpg"
                            alt="Accesorios ALICA"
                            fill
                            className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cacao/40 via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-12 left-12 text-white">
                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block opacity-80">Catálogo Completo</span>
                            <h2 className="font-heading text-4xl md:text-6xl italic leading-none">Esenciales ALICA</h2>
                        </div>
                    </div>
                </div>

                {/* Luxury Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-40">
                    {accessoryOptions.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="flex flex-col h-full bg-white/40 backdrop-blur-sm border-b border-linen/50 pb-12 transition-all duration-700 hover:border-gold/30">
                                {/* Elegant Badge Alternative */}
                                {item.oldPrice > item.price && (
                                    <div className="mb-6">
                                        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-rose-deep bg-rose-light/20 px-4 py-1.5 rounded-full">
                                            Pieza Selecta
                                        </span>
                                    </div>
                                )}

                                {/* Header Section */}
                                <div className="space-y-4 mb-10">
                                    <h3 className="font-heading text-4xl text-cacao tracking-tight group-hover:text-gold transition-colors duration-500">
                                        {item.name}
                                    </h3>
                                    <div className="w-8 h-[1px] bg-gold/40 group-hover:w-16 transition-all duration-700" />
                                </div>

                                {/* Content Section */}
                                <div className="flex-grow mb-12">
                                    <p className="font-body text-charcoal/50 text-[14px] leading-relaxed font-light tracking-wide max-w-[90%]">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Pricing & Actions */}
                                <div className="space-y-10 pt-8 border-t border-linen/30">
                                    <div className="flex items-baseline gap-4">
                                        <span className="text-3xl font-light text-cacao tracking-tighter">
                                            Gs. {item.price.toLocaleString()}
                                        </span>
                                        {item.oldPrice > item.price && (
                                            <span className="text-xs text-stone-300 line-through font-extralight tracking-widest">
                                                {item.oldPrice.toLocaleString()}
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => handleWhatsAppOrder(item.name, item.price)}
                                        className="inline-flex items-center justify-center h-14 px-10 border border-cacao text-cacao text-[10px] font-bold uppercase tracking-[0.4em] rounded-full hover:bg-cacao hover:text-white transition-all duration-500 group-hover:shadow-[0_15px_30px_rgba(33,26,23,0.1)] relative overflow-hidden"
                                    >
                                        <span className="relative z-10">Solicitar Información</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Elevated Quote / Philosphy Section */}
                <div className="max-w-4xl mx-auto mb-32 border-y border-linen py-16 text-center">
                    <p className="font-heading text-3xl md:text-4xl text-cacao italic font-light leading-snug">
                        "En <span className="text-gold">ALICA</span>, creemos que los detalles <br className="hidden md:block" /> no son el complemento, son la esencia del alma."
                    </p>
                </div>

                {/* Why Section - Redesigned to be more Boutique */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    {[
                        { icon: '✨', title: 'Curación Artesanal', desc: 'Cada puntada es ejecutada con precisión y amor por manos paraguayas.' },
                        { icon: '🌿', title: 'Pureza Orgánica', desc: 'Sustentabilidad y suavidad: utilizamos solo las fibras más nobles para su piel.' },
                        { icon: '🕯️', title: 'Diseño Ceremonial', desc: 'Piezas que trascienden el tiempo para convertirse en herencia familiar.' }
                    ].map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="w-12 h-12 rounded-full border border-gold/30 mx-auto flex items-center justify-center mb-6 group-hover:bg-gold/5 transition-colors duration-500 text-gold font-bold italic">
                                0{i + 1}
                            </div>
                            <h4 className="font-heading text-2xl text-cacao mb-4 tracking-tight">{benefit.title}</h4>
                            <p className="text-charcoal/50 text-sm leading-relaxed px-4">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Final Trust Badge */}
                <div className="mt-28 flex justify-center">
                    <div className="inline-flex items-center gap-4 px-10 py-5 bg-bg-warm/50 rounded-full border border-linen/50 backdrop-blur-sm group hover:border-gold/30 transition-all duration-500">
                        <div className="w-2 h-2 rounded-full bg-gold animate-soft-pulse" />
                        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-cacao/70">
                            Tiempo de confección: <span className="text-cacao">2-3 días hábiles</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

