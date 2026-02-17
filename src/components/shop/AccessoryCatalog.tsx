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
        name: 'Cubrepañal de Lino',
        price: 95000,
        oldPrice: 120000,
        description: 'Lino premium respirable. El básico atemporal.',
        icon: '🤍'
    }
];

export default function AccessoryCatalog() {
    const handleWhatsAppOrder = (itemName: string, price: number) => {
        const message = `Hola! Me interesa el accesorio: *${itemName}* (${price.toLocaleString()} Gs)`;
        const whatsappUrl = `https://wa.me/595981234567?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-cream-light/30 to-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero Section */}
                <AnimatedSection className="text-center mb-20" blur>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Heart className="w-5 h-5 text-rose-deep fill-current animate-pulse" />
                        <span className="font-body text-[11px] tracking-[0.5em] uppercase text-cacao/40 font-bold">Catálogo de Accesorios</span>
                        <Heart className="w-5 h-5 text-rose-deep fill-current animate-pulse" />
                    </div>
                    <h1 className="font-heading text-4xl md:text-7xl text-cacao mb-8 leading-[1.1]">
                        Los Detalles que <br className="hidden md:block" />
                        <span className="italic font-light text-stone-400">Enamoran</span>
                    </h1>
                    <p className="font-body text-cacao/60 text-lg md:text-xl max-w-3xl mx-auto italic">
                        Elegí entre nuestros accesorios premium. Cada uno confeccionado a mano con materiales que cuidan la piel delicada de tu bebé.
                    </p>
                </AnimatedSection>

                {/* Main Image */}
                <div className="mb-20">
                    <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/products/accesorios/Accesorios/f8fb2468-c130-4f46-8952-ec5918a890b7.jpg"
                            alt="Accesorios ALICA"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="text-sm uppercase tracking-[0.3em] mb-2 opacity-80">Colección Completa</p>
                            <h2 className="font-heading text-3xl md:text-5xl">Accesorios ALICA</h2>
                        </div>
                    </div>
                </div>

                {/* Price Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {accessoryOptions.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 border border-stone-100 shadow-lg hover:shadow-2xl transition-all duration-500 group"
                        >
                            {/* Icon & Name */}
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <span className="text-4xl mb-3 block">{item.icon}</span>
                                    <h3 className="font-heading text-2xl text-cacao mb-2 group-hover:text-rose-deep transition-colors">
                                        {item.name}
                                    </h3>
                                </div>
                                {item.oldPrice > item.price && (
                                    <div className="bg-rose-deep text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                                        -{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}%
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-cacao/70 text-sm leading-relaxed mb-6 italic">
                                {item.description}
                            </p>

                            {/* Price */}
                            <div className="mb-6">
                                {item.oldPrice > item.price && (
                                    <p className="text-sm text-cacao/30 line-through mb-1">
                                        Gs. {item.oldPrice.toLocaleString()}
                                    </p>
                                )}
                                <p className="text-3xl font-bold text-cacao">
                                    Gs. {item.price.toLocaleString()}
                                </p>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={() => handleWhatsAppOrder(item.name, item.price)}
                                className="w-full h-14 bg-cacao text-white rounded-full flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-rose-deep transition-all duration-500 shadow-xl shadow-cacao/10 hover:shadow-rose-deep/30 group-hover:-translate-y-1"
                            >
                                <ShoppingBag className="w-4 h-4" />
                                <span>Lo Quiero</span>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-cream-light rounded-3xl p-12 md:p-16"
                >
                    <h3 className="font-heading text-3xl md:text-4xl text-cacao mb-12 text-center">
                        Por qué elegir <span className="italic font-light text-stone-400">ALICA</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: '✨', title: 'Hecho a Mano', desc: 'Cada pieza es única y confeccionada con amor' },
                            { icon: '🤍', title: 'Materiales Premium', desc: 'Algodón orgánico, lino y seda de la mejor calidad' },
                            { icon: '💝', title: 'Suavidad Garantizada', desc: 'Cuidamos la piel delicada de tu bebé' }
                        ].map((benefit, i) => (
                            <div key={i} className="text-center">
                                <span className="text-5xl mb-4 block">{benefit.icon}</span>
                                <h4 className="font-heading text-xl text-cacao mb-3">{benefit.title}</h4>
                                <p className="text-cacao/60 text-sm leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Trust Badge */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg border border-gold/20">
                        <Check className="w-5 h-5 text-gold" />
                        <span className="text-sm font-medium text-cacao">Producción: Inmediata a 3 días hábiles</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
