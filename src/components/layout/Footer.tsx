'use client';

import { Instagram, MessageCircle, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Catálogo', href: '/shop' },
        { name: 'Filosofía', href: '/nosotros' },
        { name: 'Contacto', href: '/contacto' },
    ];

    return (
        <footer className="bg-cacao text-white pt-20 pb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
                    {/* Logo Section */}
                    <Link href="/" className="relative w-32 h-12 grayscale invert brightness-0 hover:opacity-70 transition-opacity">
                        <Image
                            src="/images/brand/logo horizontal blanco sin fondo.png"
                            alt="Alica Bebés"
                            fill
                            className="object-contain"
                        />
                    </Link>

                    {/* Minimal Nav */}
                    <nav className="flex items-center gap-8 md:gap-12">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60 hover:text-gold transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Social/Contact Mini Link */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://instagram.com/alicapy_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all border border-white/10"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a
                            href="https://wa.me/595984328246?text=¡Hola! Quiero hacer un pedido 🍼"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 rounded-full bg-gold/10 hover:bg-gold/20 text-gold border border-gold/20 transition-all group"
                        >
                            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">WhatsApp</span>
                        </a>
                    </div>
                </div>

                <div className="h-px w-full bg-white/5 mb-8" />

                {/* Bottom Credits */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
                    <div className="flex items-center gap-3 text-[8px] tracking-[0.4em] uppercase font-bold text-center md:text-left">
                        <span>Asunción, Paraguay</span>
                        <div className="w-1 h-1 rounded-full bg-gold" />
                        <span>Envíos Nacionales</span>
                    </div>

                    <p className="text-[8px] tracking-[0.3em] uppercase flex items-center gap-2 font-bold text-center md:text-right">
                        © {currentYear} · Confeccionado con <Heart className="w-2 h-2 fill-current" /> desde Paraguay
                    </p>
                </div>
            </div>
        </footer>
    );
}
