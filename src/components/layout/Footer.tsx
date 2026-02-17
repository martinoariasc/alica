'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MessageCircle, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Catálogo', href: '/shop' },
        { name: 'Filosofía', href: '/nosotros' },
        { name: 'Guía de Talles', href: '/#talles' },
        { name: 'Contacto', href: '/contacto' },
    ];

    const socialLinks = [
        { icon: Instagram, href: 'https://instagram.com/alicapy_', label: 'Instagram' },
        { icon: MessageCircle, href: 'https://wa.me/595984328246?text=¡Hola! Quiero conocer más sobre Alica 🍼', label: 'WhatsApp' },
    ];

    return (
        <footer className="bg-[#3d3229] text-white relative overflow-hidden pt-24 pb-12">
            {/* Simple elegant separator */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Brand Section */}
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
                            className="object-contain brightness-0 invert"
                        />
                    </motion.div>

                    <h2 className="font-heading text-3xl md:text-5xl text-white leading-tight italic max-w-2xl px-4">
                        &ldquo;Porque sus primeros pasos son el comienzo de <span className="text-[#d4af37]">su historia más linda</span>.&rdquo;
                    </h2>

                    <div className="w-12 h-px bg-white/30" />

                    <div className="flex flex-col items-center gap-6">
                        <Button
                            href="https://wa.me/595984328246?text=¡Hola! Quiero hacer un pedido 🍼"
                            variant="primary"
                            size="lg"
                            external
                            className="bg-white text-[#3d3229] hover:bg-[#d4af37] hover:text-white px-12 h-16 shadow-2xl transition-all duration-500"
                        >
                            Hacer mi pedido 🤍
                        </Button>
                        <span className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold">Atención Exclusiva vía WhatsApp</span>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
                    {/* Location */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="font-body text-[10px] tracking-[0.5em] uppercase text-[#d4af37] font-bold text-center md:text-left">Ubicación</h3>
                        <p className="text-lg font-body font-light text-white">Asunción, República del Paraguay</p>
                        <p className="text-sm font-body font-light text-white/70 italic">Envíos a todo el país</p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="font-body text-[10px] tracking-[0.5em] uppercase text-[#d4af37] font-bold text-center md:text-left">Explorar</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-body text-white/80 hover:text-white transition-colors duration-300 w-fit mx-auto md:mx-0"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Promise */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="font-body text-[10px] tracking-[0.5em] uppercase text-[#d4af37] font-bold text-center md:text-left">Promesa ALICA</h3>
                        <p className="text-sm font-body font-light leading-relaxed text-white/70 italic">
                            Calzado diseñado para respetar el crecimiento natural, cosido a mano con materiales premium.
                        </p>
                    </div>

                    {/* Social */}
                    <div className="space-y-6 flex flex-col items-center md:items-start lg:items-end">
                        <h3 className="font-body text-[10px] tracking-[0.5em] uppercase text-[#d4af37] font-bold text-center md:text-left lg:text-right">Sigamos Conectadas</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#3d3229] transition-all duration-500 group"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Credits */}
                <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3 text-[9px] tracking-[0.5em] uppercase font-bold text-white/60">
                        <span>Alica Bebés</span>
                        <div className="w-1 h-1 rounded-full bg-[#d4af37]" />
                        <span>Heredando Elegancia</span>
                    </div>

                    <p className="text-[9px] tracking-[0.3em] uppercase flex items-center gap-1 font-bold text-white/60">
                        © {currentYear} · Confeccionado con <Heart className="w-2.5 h-2.5 text-rose-deep fill-current" /> desde Paraguay
                    </p>
                </div>
            </div>
        </footer>
    );
}
