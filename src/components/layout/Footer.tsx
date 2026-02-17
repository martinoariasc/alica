'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MessageCircle, MapPin, Heart, ArrowUpRight, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Colección Completa', href: '/shop' },
        { name: 'Nuestra Esencia', href: '/nosotros' },
        { name: 'Guía de Regalos', href: '/regalo' },
        { name: 'Contacto Directo', href: '/contacto' },
    ];

    const socialLinks = [
        { icon: Instagram, href: 'https://instagram.com/alicapy_', label: 'Instagram' },
        { icon: MessageCircle, href: 'https://wa.me/595984328246?text=¡Hola! Quiero conocer más sobre Alica 🍼', label: 'WhatsApp' },
    ];

    return (
        <footer className="bg-cacao text-white relative overflow-hidden border-t border-white/5 pt-20 pb-10">
            {/* Ambient Luxury Glows */}
            <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-rose-deep/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Texture Overlay (Fabric feel) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Brand Meta Column */}
                    <div className="lg:col-span-5 space-y-12 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Link href="/" className="group inline-block">
                            <div className="relative w-40 h-20 transition-all duration-1000 group-hover:scale-105">
                                <Image
                                    src="/images/brand/logo horizontal blanco sin fondo.png"
                                    alt="Alica Bebés"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>

                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl font-heading italic text-white/40 leading-relaxed max-w-sm">
                                &ldquo;Porque sus primeros pasos son el comienzo de su historia más linda.&rdquo;
                            </p>
                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <Sparkles className="w-4 h-4 text-gold/40" />
                                <span className="text-[10px] tracking-[0.4em] uppercase text-gold/40 font-bold">Hecho a mano en Paraguay</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-cacao transition-all duration-700 group relative overflow-hidden"
                                        aria-label={social.label}
                                    >
                                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                        <Icon className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Luxury List */}
                    <div className="lg:col-span-3 space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left pt-4">
                        <h3 className="font-heading text-[10px] tracking-[0.5em] uppercase text-white/30 font-bold">Explorar</h3>
                        <ul className="space-y-6">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-lg font-body font-light text-white/60 hover:text-white transition-all duration-500 flex items-center gap-3 group"
                                    >
                                        <span className="relative">
                                            {link.name}
                                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold/40 transition-all duration-500 group-hover:w-full" />
                                        </span>
                                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-all duration-500 translate-y-1 group-hover:translate-y-0" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Boutique Action */}
                    <div className="lg:col-span-4 space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left pt-4">
                        <h3 className="font-heading text-[10px] tracking-[0.5em] uppercase text-white/30 font-bold">Contacto Boutique</h3>
                        <div className="space-y-8">
                            <div className="flex items-center justify-center lg:justify-start gap-4 text-white/60 group hover:text-white transition-colors duration-500">
                                <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-white/20 transition-colors">
                                    <MapPin className="w-4 h-4 text-gold/40" />
                                </div>
                                <span className="text-lg font-light italic">Asunción, Paraguay</span>
                            </div>

                            <div className="pt-6 relative group">
                                <div className="absolute -inset-4 bg-gold/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <Button
                                    href="https://wa.me/595984328246?text=¡Hola! Quiero hacer un pedido 🍼"
                                    variant="primary"
                                    size="lg"
                                    external
                                    className="px-12 h-16 bg-white text-cacao hover:bg-gold-muted transition-colors shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] relative z-10"
                                >
                                    Hacer mi pedido 🤍
                                </Button>
                                <p className="mt-6 text-[10px] tracking-[0.2em] uppercase text-white/20 font-medium">Atención personalizada por WhatsApp</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Signature Line */}
                <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-40">
                    <p className="text-[10px] tracking-[0.4em] uppercase font-light">
                        © {currentYear} Alica Bebés · Fine Handcrafted Footwear
                    </p>
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase font-light">
                        <span>Confeccionado con</span>
                        <Heart className="w-3 h-3 text-rose-deep fill-current" />
                        <span>desde Paraguay</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
