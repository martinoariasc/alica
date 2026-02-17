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
        { name: 'Regalar Alica', href: '/regalo' },
        { name: 'Contacto', href: '/contacto' },
    ];

    const socialLinks = [
        { icon: Instagram, href: 'https://instagram.com/alicapy_', label: 'Instagram' },
        { icon: MessageCircle, href: 'https://wa.me/595984328246?text=¡Hola! Quiero conocer más sobre Alica 🍼', label: 'WhatsApp' },
    ];

    return (
        <footer className="bg-cacao text-cream-light relative overflow-hidden pt-24 pb-12">
            {/* Ambient Lighting - Subtle & Classy */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Column 1: Brand Identity */}
                    <div className="lg:col-span-5 space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Link href="/" className="relative w-40 h-16 opacity-90 hover:opacity-100 transition-opacity">
                            <Image
                                src="/images/brand/logo horizontal blanco sin fondo.png"
                                alt="Alica Bebés"
                                fill
                                className="object-contain"
                            />
                        </Link>

                        <p className="font-heading text-2xl md:text-3xl text-cream-light/80 leading-relaxed italic max-w-sm">
                            &ldquo;Elevando sus primeros pasos a la <span className="text-gold">categoría de arte</span>.&rdquo;
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-cream-light/10 flex items-center justify-center hover:bg-cream-light hover:text-cacao transition-all duration-500 group"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="lg:col-span-3 space-y-8 flex flex-col items-center lg:items-start">
                        <h3 className="font-body text-[10px] tracking-[0.5em] uppercase text-gold font-bold">Explorar</h3>
                        <ul className="space-y-4">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-lg font-body font-light text-cream-light/60 hover:text-white transition-all duration-300 block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: The Promise & Action */}
                    <div className="lg:col-span-4 space-y-10 flex flex-col items-center lg:items-end text-center lg:text-right">
                        <div className="space-y-4">
                            <h3 className="font-body text-[10px] tracking-[0.5em] uppercase text-gold font-bold">La Promesa</h3>
                            <p className="text-sm font-body font-light text-cream-light/50 leading-relaxed italic max-w-xs lg:ml-auto">
                                Cada puntada es un compromiso con la salud fisiológica de tu bebé y la elegancia eterna de tu familia.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Button
                                href="https://wa.me/595984328246?text=¡Hola! Quiero hacer un pedido 🍼"
                                variant="primary"
                                size="md"
                                external
                                className="bg-cream-light text-cacao hover:bg-gold-muted border-none shadow-xl"
                            >
                                Contactar Boutique 🤍
                            </Button>
                            <p className="mt-4 text-[9px] tracking-[0.2em] uppercase text-cream-light/30 font-medium">Atención VIP por WhatsApp</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Signature */}
                <div className="mt-20 pt-10 border-t border-cream-light/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
                    <p className="text-[10px] tracking-[0.4em] uppercase font-bold">
                        © {currentYear} ALICA BEBÉS · ASUNCIÓN, PY
                    </p>
                    <div className="flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase font-bold text-center">
                        <span>Handcrafted with</span>
                        <Heart className="w-3 h-3 text-rose-deep fill-current" />
                        <span>for your treasure</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
