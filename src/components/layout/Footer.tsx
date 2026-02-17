'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MessageCircle, MapPin, Heart, ArrowUpRight, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Ver Tienda', href: '/shop' },
        { name: 'Nuestra Historia', href: '/nosotros' },
        { name: 'Guía de Regalos', href: '/regalo' },
        { name: 'Contacto Directo', href: '/contacto' },
    ];

    const socialLinks = [
        { icon: Instagram, href: 'https://instagram.com/alicapy_', label: 'Instagram' },
        { icon: MessageCircle, href: 'https://wa.me/595984328246?text=¡Hola! Quiero conocer más sobre Alica 🍼', label: 'WhatsApp' },
    ];

    return (
        <footer className="bg-cacao text-white/90 relative overflow-hidden border-t border-white/5">
            {/* Elegant Top Border Subtle Line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-50" />

            {/* Decorative Luxury Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-deep/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-12 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Link href="/" className="group block">
                            <div className="relative w-40 h-16 transition-all duration-700 group-hover:scale-105">
                                <Image
                                    src="/images/brand/logo horizontal blanco sin fondo.png"
                                    alt="Alica Bebés"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>

                        <p className="text-xl font-body font-light text-white/60 leading-relaxed max-w-sm italic">
                            &ldquo;Porque sus primeros pasos son el comienzo de su historia más linda.&rdquo;
                        </p>

                        <div className="flex items-center gap-6">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-cacao transition-all duration-500 group"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="lg:col-span-3 space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left pt-6">
                        <h3 className="font-heading text-[10px] tracking-[0.5em] uppercase text-gold/60 font-bold">Explorar</h3>
                        <ul className="space-y-6">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-lg font-body font-light text-white/50 hover:text-white transition-all duration-500 flex items-center gap-2 group"
                                    >
                                        <span>{link.name}</span>
                                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4 space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left pt-6">
                        <h3 className="font-heading text-[10px] tracking-[0.5em] uppercase text-gold/60 font-bold">Contacto</h3>
                        <div className="space-y-8">
                            <div className="flex items-center justify-center lg:justify-start gap-4 text-white/50 group hover:text-white transition-colors duration-500">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    <MapPin className="w-5 h-5 text-gold/60" />
                                </div>
                                <span className="text-lg font-light">Asunción, Paraguay</span>
                            </div>

                            <div className="space-y-4 pt-4">
                                <p className="text-sm font-body text-white/40 tracking-widest uppercase">Atención Especial</p>
                                <Button
                                    href="https://wa.me/595984328246?text=¡Hola! Quiero hacer un pedido 🍼"
                                    variant="primary"
                                    size="lg"
                                    external
                                    className="px-12 h-16 bg-white text-cacao hover:bg-gold-muted transition-colors shadow-2xl"
                                >
                                    Hacer mi pedido 🤍
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
                    <p className="text-[9px] text-white/20 tracking-[0.4em] uppercase font-medium">
                        © {currentYear} Alica Bebés · Fine Handcrafted Footwear
                    </p>
                    <div className="flex items-center gap-3 text-[9px] text-white/20 tracking-[0.4em] uppercase font-medium">
                        <span>Hecho con</span>
                        <Heart className="w-3.5 h-3.5 text-rose-deep fill-current opacity-40" />
                        <span>desde Paraguay para el Mundo</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
