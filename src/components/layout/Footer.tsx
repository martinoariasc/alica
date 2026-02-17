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
        <footer className="bg-cacao text-white relative overflow-hidden pt-32 pb-12">
            {/* Ambient Boutique Lighting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[300px] bg-gold/5 blur-[120px] rounded-[100%] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-rose-deep/5 blur-[100px] rounded-full pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Upper Section: Brand Statement & CTA */}
                <div className="flex flex-col items-center text-center mb-32 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative w-48 h-24 mb-4"
                    >
                        <Image
                            src="/images/brand/logo horizontal blanco sin fondo.png"
                            alt="Alica Bebés"
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                    <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white/90 leading-tight italic max-w-4xl mx-auto">
                        &ldquo;Elevando sus primeros pasos a la <span className="text-gold">categoría de arte</span>.&rdquo;
                    </h2>

                    <div className="pt-8">
                        <Button
                            href="https://wa.me/595984328246?text=¡Hola! Quiero hacer un pedido 🍼"
                            variant="luxury"
                            size="lg"
                            external
                            className="px-16 h-16 bg-white text-cacao hover:bg-gold-muted border-none shadow-[0_20px_60px_-15px_rgba(212,182,146,0.3)]"
                        >
                            Hacer mi pedido 🤍
                        </Button>
                        <p className="mt-8 text-[11px] tracking-[0.4em] uppercase text-gold/40 font-bold">Asesoría personalizada por WhatsApp</p>
                    </div>
                </div>

                {/* Middle Section: Navigation & Identity */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 py-16 border-t border-white/5">
                    {/* Column 1: Identity */}
                    <div className="md:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <h3 className="font-heading text-[10px] tracking-[0.5em] uppercase text-white/30 font-bold">Nuestra Ubicación</h3>
                            <p className="text-xl font-body font-light italic text-white/70">Asunción, República del Paraguay</p>
                        </div>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-cacao transition-all duration-700 group"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="md:col-span-3 space-y-8">
                        <h3 className="font-heading text-[10px] tracking-[0.5em] uppercase text-white/30 font-bold">Explorar</h3>
                        <ul className="grid grid-cols-1 gap-4">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-base font-body text-white/50 hover:text-gold transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-px bg-white/10 group-hover:w-4 group-hover:bg-gold transition-all duration-500" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: The Promise */}
                    <div className="md:col-span-4 space-y-8 text-right hidden md:block">
                        <h3 className="font-heading text-[10px] tracking-[0.5em] uppercase text-white/30 font-bold text-right">La Promesa ALICA</h3>
                        <p className="text-sm font-body font-light text-white/40 leading-relaxed italic max-w-xs ml-auto">
                            Cada puntada es un compromiso con la salud fisiológica de tu bebé y la elegancia eterna de tu familia.
                        </p>
                    </div>
                </div>

                {/* Bottom Signature Section */}
                <div className="pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-30">
                    <div className="flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase font-bold">
                        <span>Alica Bebés</span>
                        <div className="w-1 h-1 rounded-full bg-gold" />
                        <span>Heredando Elegancia</span>
                    </div>

                    <p className="text-[10px] tracking-[0.3em] uppercase">
                        © {currentYear} · Handcrafted with <Heart className="inline w-3 h-3 text-rose-deep mx-1" /> from Paraguay
                    </p>
                </div>
            </div>
        </footer>
    );
}
