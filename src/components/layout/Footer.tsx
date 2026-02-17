'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MessageCircle, MapPin, Heart, ArrowUpRight, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Catálogo', href: '/shop' },
        { name: 'Filosofía', href: '/nosotros' },
        { name: 'Guía de Talles', href: '/talles' },
        { name: 'Contacto', href: '/contacto' },
    ];

    const socialLinks = [
        { icon: Instagram, href: 'https://instagram.com/alicapy_', label: 'Instagram' },
        { icon: MessageCircle, href: 'https://wa.me/595984328246?text=¡Hola! Quiero conocer más sobre Alica 🍼', label: 'WhatsApp' },
    ];

    return (
        <footer className="bg-cacao text-cream-light relative overflow-hidden pt-24 pb-12 border-t border-gold/10">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* 1. Brand Pillar */}
                <div className="flex flex-col items-center text-center space-y-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative w-48 h-20"
                    >
                        <Image
                            src="/images/brand/logo horizontal blanco sin fondo.png"
                            alt="Alica Bebés"
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                    <h2 className="font-heading text-3xl md:text-5xl text-cream-light/90 italic leading-tight max-w-2xl px-4">
                        &ldquo;Porque sus primeros pasos son el comienzo de <span className="text-gold">su historia más linda</span>.&rdquo;
                    </h2>

                    <div className="w-12 h-px bg-gold/30" />

                    <div className="flex flex-col items-center gap-6">
                        <Button
                            href="https://wa.me/595984328246?text=¡Hola! Quiero hacer un pedido 🍼"
                            variant="primary"
                            size="lg"
                            external
                            className="bg-white text-cacao hover:bg-gold-muted px-12 h-16 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
                        >
                            Hacer mi pedido 🤍
                        </Button>
                        <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-bold">Atención Exclusiva vía WhatsApp</span>
                    </div>
                </div>

                {/* 2. Directory & Promise Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-cream-light/5">
                    {/* Location */}
                    <div className="space-y-4">
                        <h3 className="font-body text-[10px] tracking-[0.5em] uppercase text-gold font-bold">Ubicación</h3>
                        <p className="text-lg font-body font-light text-cream-light/60">Asunción, República del Paraguay</p>
                        <p className="text-sm font-body font-light text-cream-light/40 italic">Envíos a todo el país</p>
                    </div>

                    {/* Quick Explore */}
                    <div className="space-y-4">
                        <h3 className="font-body text-[10px] tracking-[0.5em] uppercase text-gold font-bold">Explorar</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-body text-cream-light/50 hover:text-white transition-colors duration-300 w-fit"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Identity Tags */}
                    <div className="space-y-4">
                        <h3 className="font-body text-[10px] tracking-[0.5em] uppercase text-gold font-bold">Promesa ALICA</h3>
                        <p className="text-sm font-body font-light leading-relaxed text-cream-light/40 italic">
                            Calzado diseñado para respetar el crecimiento natural, cosido a mano con materiales premium y cargado de amor.
                        </p>
                    </div>

                    {/* Social Boutique */}
                    <div className="space-y-6 flex flex-col items-start lg:items-end">
                        <h3 className="font-body text-[10px] tracking-[0.5em] uppercase text-gold font-bold">Sigamos Conectadas</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-cream-light/10 flex items-center justify-center hover:bg-white hover:text-cacao transition-all duration-500 group"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* 3. Bottom Credits */}
                <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
                    <div className="flex items-center gap-3 text-[9px] tracking-[0.5em] uppercase font-bold">
                        <span>Alica Bebés</span>
                        <div className="w-1 h-1 rounded-full bg-gold" />
                        <span>Heredando Elegancia</span>
                    </div>

                    <p className="text-[9px] tracking-[0.3em] uppercase flex items-center gap-1 font-bold">
                        © {currentYear} · Confeccionado con <Heart className="w-2.5 h-2.5 text-rose-deep fill-current" /> desde Paraguay
                    </p>
                </div>
            </div>
        </footer>
    );
}
