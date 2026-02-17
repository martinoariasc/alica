'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { getGiftProducts } from '@/lib/products';
import { formatPrice, buildWhatsAppURL } from '@/lib/utils';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Gift, Heart, Sparkles, Package, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const giftReasons = [
    {
        icon: Gift,
        title: 'Presentación Premium',
        desc: 'Caja artesanal con papel de seda y lazo de raso. Listo para emocionar.',
    },
    {
        icon: Heart,
        title: 'Tarjeta Personalizada',
        desc: 'Incluimos un mensaje escrito a mano con el cariño que querés transmitir.',
    },
    {
        icon: Sparkles,
        title: 'Recuerdo Eterno',
        desc: 'No regalás zapatos. Regalás el primer paso, el primer recuerdo.',
    },
    {
        icon: Package,
        title: 'Envío Express',
        desc: 'Para que llegue justo a tiempo. Envío a todo Paraguay.',
    },
];

const giftOccasions = [
    { emoji: '🎂', label: 'Cumpleaños' },
    { emoji: '⛪', label: 'Bautismo' },
    { emoji: '🍼', label: 'Baby Shower' },
    { emoji: '🎄', label: 'Navidad' },
    { emoji: '💝', label: 'Solo porque sí' },
    { emoji: '👶', label: 'Nacimiento' },
];

export default function RegaloPage() {
    const giftProducts = getGiftProducts();

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-10 right-10 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-soft/20 rounded-full blur-[100px]" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection>
                            <span className="text-6xl mb-4 block">🎁</span>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
                                Regalá un
                                <br />
                                <span className="gradient-text italic">recuerdo eterno</span>
                            </h1>
                            <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                                ¿Buscás algo único para ese bebé especial?
                                Un par de ALICA no es solo un regalo — es el abrazo
                                que acompaña los primeros pasos de una nueva vida.
                            </p>
                            <Button
                                href={buildWhatsAppURL('¡Hola! Quiero hacer un pedido de regalo 🎁')}
                                variant="whatsapp"
                                size="lg"
                                external
                            >
                                <MessageCircle className="w-5 h-5" />
                                Pedir tu regalo ahora
                            </Button>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2674&auto=format&fit=crop"
                                    alt="Regalo ALICA"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center">
                                    <p className="font-heading text-sm font-semibold text-charcoal">
                                        ✨ Empaque de regalo incluido sin costo
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Occasions */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <SectionTitle
                            title="Perfecto para cada ocasión"
                            subtitle="Siempre hay un motivo para regalar ternura"
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                        {giftOccasions.map((occasion, i) => (
                            <AnimatedSection key={occasion.label} delay={i * 0.05}>
                                <motion.div
                                    className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-bg-warm/50 hover:bg-rose-light/20 transition-colors cursor-default"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span className="text-3xl">{occasion.emoji}</span>
                                    <span className="text-xs font-medium text-charcoal/70">{occasion.label}</span>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Gift ALICA */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <SectionTitle
                            title="¿Por qué regalar ALICA?"
                            subtitle="Porque un regalo debería emocionar, no solo sorprender"
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {giftReasons.map((reason, i) => {
                            const Icon = reason.icon;
                            return (
                                <AnimatedSection key={reason.title} delay={i * 0.1}>
                                    <motion.div
                                        className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
                                        whileHover={{ y: -6 }}
                                    >
                                        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-rose-light/30 flex items-center justify-center">
                                            <Icon className="w-7 h-7 text-rose-deep" />
                                        </div>
                                        <h3 className="font-heading text-base font-semibold text-charcoal mb-2">{reason.title}</h3>
                                        <p className="text-sm text-charcoal/70 leading-relaxed">{reason.desc}</p>
                                    </motion.div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Gift Products */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <SectionTitle
                            title="Ideas para regalar"
                            subtitle="Productos seleccionados que enamoran al instante"
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {giftProducts.map((product, i) => (
                            <AnimatedSection key={product.slug} delay={i * 0.05}>
                                <Link href={`/producto/${product.slug}`} className="block group">
                                    <div className="bg-bg-warm/50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-rose-light/50">
                                        <div className="aspect-square overflow-hidden">
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <span className="text-[10px] uppercase tracking-[2px] text-rose-deep block mb-1">
                                                {product.category}
                                            </span>
                                            <h3 className="font-heading text-base font-semibold text-charcoal mb-1 group-hover:text-rose-deep transition-colors">
                                                {product.emotionalName}
                                            </h3>
                                            <p className="text-xs text-muted italic mb-2 line-clamp-1">
                                                {product.emotionalPhrase}
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-muted line-through">{formatPrice(product.oldPrice)}</span>
                                                <span className="text-base font-semibold text-charcoal">{formatPrice(product.price)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-charcoal text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <AnimatedSection>
                        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
                            ¿Cómo funciona?
                        </h2>
                        <p className="text-white/70 mb-12 max-w-lg mx-auto">
                            Regalar ALICA es tan fácil como escribirnos.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: '1', title: 'Elegí el modelo', desc: 'Explorá nuestra colección o pedinos ayuda para elegir.' },
                            { step: '2', title: 'Personalizá', desc: 'Agregá un mensaje especial y elegí el empaque.' },
                            { step: '3', title: 'Recibí y emocioná', desc: 'Lo confeccionamos y enviamos listo para regalar.' },
                        ].map((item, i) => (
                            <AnimatedSection key={item.step} delay={i * 0.1}>
                                <div className="text-center">
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-gold flex items-center justify-center">
                                        <span className="font-heading text-xl font-bold text-gold">{item.step}</span>
                                    </div>
                                    <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-white/60">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-rose-light/20 to-transparent">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                    <AnimatedSection>
                        <span className="text-5xl mb-6 block">💝</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-6 leading-tight">
                            El mejor regalo no se compra
                            <br />
                            <span className="gradient-text">se confecciona con amor</span>
                        </h2>
                        <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
                            Escribinos y creamos juntos el regalo que van a guardar para siempre.
                        </p>
                        <Button
                            href={buildWhatsAppURL('¡Hola! Quiero armar un regalo especial 🎁')}
                            variant="whatsapp"
                            size="lg"
                            external
                            className="text-lg px-12"
                        >
                            Armar mi regalo
                        </Button>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
