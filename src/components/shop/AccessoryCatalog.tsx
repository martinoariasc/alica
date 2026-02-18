'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Heart } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { formatPrice, buildWhatsAppURL } from '@/lib/utils';
import Image from 'next/image';

interface AccessoryOption {
    name: string;
    price: number;
    oldPrice: number;
    description: string;
    image: string;
    badge?: string;
}

const accessoryOptions: AccessoryOption[] = [
    {
        name: 'Vincha Clásica',
        price: 20000,
        oldPrice: 30000,
        description: 'La esencia de la delicadeza en una pieza artesanal que corona cada momento.',
        image: '/images/products/accesorios/Accesorios/f8fb2468-c130-4f46-8952-ec5918a890b7.jpg',
        badge: 'Pieza de Autor'
    },
    {
        name: 'Pack x3 Vinchas',
        price: 45000,
        oldPrice: 60000,
        description: 'Una tríada de ternura coordinada para cada amanecer de su infancia.',
        image: '/images/products/accesorios/Accesorios/f8fb2468-c130-4f46-8952-ec5918a890b7.jpg',
        badge: 'Colección'
    },
    {
        name: 'Baberito Bandana',
        price: 35000,
        oldPrice: 50000,
        description: 'Doble capa de algodón purificado. Funcionalidad con alma de boutique.',
        image: '/images/products/accesorios/Accesorios/f8fb2468-c130-4f46-8952-ec5918a890b7.jpg'
    },
];

export default function AccessoryCatalog() {
    return (
        <section className="py-24 md:py-40 bg-white relative overflow-hidden">
            {/* Soft Ambient Light */}
            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-rose-light/10 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-32 flex flex-col items-center">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="h-px w-12 bg-gold/20" />
                        <span className="text-[10px] uppercase tracking-[0.6em] text-gold font-bold">Detalles Eternos</span>
                        <div className="h-px w-12 bg-gold/20" />
                    </div>
                    <h2 className="font-heading text-5xl md:text-8xl text-cacao leading-tight mb-10">
                        La Magia está <br />
                        <span className="italic font-light text-stone-300">en lo Pequeño.</span>
                    </h2>
                    <p className="font-body text-stone-400 text-xl max-w-3xl mx-auto italic font-light leading-relaxed">
                        &ldquo;Complementos diseñados para armonizar con cada etapa, <br className="hidden md:block" />
                        utilizando solo las fibras más nobles para su piel.&rdquo;
                    </p>
                </AnimatedSection>

                {/* Editorial Grid: Alternating weights for a luxury feel */}
                <div className="space-y-40">
                    {accessoryOptions.map((item, index) => (
                        <AnimatedSection
                            key={item.name}
                            direction={index % 2 === 0 ? 'left' : 'right'}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24`}
                        >
                            {/* Hero Image for the Item */}
                            <div className="w-full md:w-1/2 relative">
                                <div className="absolute inset-0 bg-linen/20 rounded-[4rem] group-hover:scale-105 transition-transform duration-[2s] -z-10 translate-x-4 translate-y-4" />
                                <div className="aspect-[4/5] relative rounded-[4rem] overflow-hidden shadow-2xl skew-y-1">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-[3s] hover:scale-110"
                                    />
                                    {item.badge && (
                                        <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">{item.badge}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Content for the Item */}
                            <div className="w-full md:w-1/2 space-y-10 text-center md:text-left">
                                <div className="space-y-6">
                                    <h3 className="font-heading text-4xl md:text-6xl text-cacao leading-[1.1] tracking-tight">
                                        {item.name}
                                    </h3>
                                    <div className="w-16 h-px bg-gold/30 mx-auto md:ml-0" />
                                    <p className="font-body text-stone-500 text-lg md:text-xl font-light leading-relaxed italic">
                                        &ldquo;{item.description}&rdquo;
                                    </p>
                                </div>

                                <div className="flex flex-col items-center md:items-start gap-8">
                                    <div className="flex items-baseline gap-6">
                                        <span className="text-5xl font-light text-cacao tracking-tighter">
                                            {formatPrice(item.price)}
                                        </span>
                                        {item.oldPrice > item.price && (
                                            <span className="text-xl text-stone-300 line-through font-extralight italic">
                                                {formatPrice(item.oldPrice)}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                                        <Button
                                            href={buildWhatsAppURL(`¡Hola! Me interesa la pieza: ${item.name} 🎀`)}
                                            variant="primary"
                                            size="lg"
                                            external
                                            className="h-20 text-[11px] shadow-premium-gold"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            Solicitar Información
                                        </Button>
                                    </div>

                                    <div className="flex items-center gap-3 text-stone-300 pt-4">
                                        <Sparkles className="w-4 h-4" />
                                        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Artesanía Paraguaya</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Final Lookbook Section */}
                <div className="mt-40 text-center py-20 border-t border-linen/30">
                    <AnimatedSection blur>
                        <Heart className="w-12 h-12 text-rose-deep opacity-20 mx-auto mb-12" />
                        <p className="font-heading text-3xl md:text-4xl text-cacao italic font-light leading-relaxed">
                            "En ALICA, no creamos objetos, <br className="hidden md:block" /> sino testimonios de amor para toda la vida."
                        </p>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
