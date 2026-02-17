'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, Instagram, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppURL } from '@/lib/utils';

const footerLinks = [
    { href: '/shop', label: 'Ver Tienda' },
    { href: '/nosotros', label: 'Nuestra Historia' },
    { href: '/regalo', label: 'Guía de Regalos' },
    { href: '/contacto', label: 'Contacto Directo' },
];

export default function Footer() {
    return (
        <footer className="bg-[#6c5538] text-white/90 relative overflow-hidden border-t border-white/10">
            {/* Top sophisticated line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Link href="/" className="inline-block group">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 transition-all duration-700 group-hover:scale-105">
                                <Image
                                    src="/images/brand/logo horizontal sin fondo.png"
                                    alt="Alica Bebés"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>

                        <p className="text-lg md:text-xl font-body font-light text-white/70 leading-relaxed max-w-sm italic">
                            &ldquo;Porque sus primeros pasos son el comienzo de su historia más linda.&rdquo;
                        </p>

                        <div className="flex items-center gap-6">
                            <a
                                href="https://instagram.com/alicapy_"
                                target="_blank"
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#6c5538] transition-all duration-500 group"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
                            </a>
                            <a
                                href={buildWhatsAppURL('¡Hola! Quiero conocer más sobre Alica 🍼')}
                                target="_blank"
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-500 group"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left pt-4">
                        <h3 className="font-heading text-xs tracking-[0.4em] uppercase text-white/40 font-bold">Explorar</h3>
                        <ul className="space-y-6">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-lg font-body font-light text-white/70 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <span>{link.label}</span>
                                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left pt-4">
                        <h3 className="font-heading text-xs tracking-[0.4em] uppercase text-white/40 font-bold">Contacto</h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-center lg:justify-start gap-4 text-white/70 group">
                                <MapPin className="w-5 h-5 text-white/40" />
                                <span className="text-lg font-light">Asunción, Paraguay</span>
                            </div>

                            <div className="pt-6">
                                <a
                                    href={buildWhatsAppURL('¡Hola! Quiero hacer un pedido 🍼')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-[#6c5538] text-sm font-bold tracking-[0.2em] uppercase overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                                >
                                    <span className="relative z-10">Hacer mi pedido</span>
                                    <div className="absolute inset-0 bg-[#F9F6F2] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-28 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-[11px] text-white/30 tracking-[0.3em] uppercase">
                        © {new Date().getFullYear()} Alica Bebés · Fine Handcrafted
                    </p>
                    <div className="flex items-center gap-2 text-[11px] text-white/30 tracking-[0.3em] uppercase">
                        <span>Hecho con</span>
                        <Heart className="w-3 h-3 text-white/40 fill-current" />
                        <span>desde Paraguay</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
