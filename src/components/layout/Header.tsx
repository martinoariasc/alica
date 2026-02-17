'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle } from 'lucide-react';
import { buildWhatsAppURL, cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/shop', label: 'Tienda' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/regalo', label: '🎁 Regalo' },
    { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();

    // Pages that have a large hero/video where we want a transparent header with WHITE text
    const isTransparentPage = pathname === '/' || pathname === '/nosotros';

    // We only use the light (transparent) header if we are on a transparent page AND haven't scrolled
    const isLightHeader = isTransparentPage && !isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileOpen]);

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                    isLightHeader
                        ? 'bg-transparent py-5'
                        : 'bg-bg/98 backdrop-blur-lg shadow-md border-b border-stone-100 py-3'
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src={isLightHeader ? "/images/brand/logo horizontal blanco sin fondo.png" : "/images/brand/logo horizontal sin fondo.png"}
                            alt="Alica Bebés"
                            width={160}
                            height={50}
                            className="h-10 md:h-12 w-auto transition-all duration-500 object-contain drop-shadow-md"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'font-heading text-base font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5',
                                    isLightHeader
                                        ? 'text-white/90 hover:text-white'
                                        : 'text-charcoal/80 hover:text-rose-deep'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <a
                        href={buildWhatsAppURL('¡Hola! Me interesa conocer los productos de Alica 🍼')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            'hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5',
                            isLightHeader
                                ? 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                                : 'bg-charcoal text-white hover:shadow-xl'
                        )}
                    >
                        <span>Escribinos</span>
                        <MessageCircle className="w-4 h-4" />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className={cn(
                            'lg:hidden p-2 rounded-lg transition-colors duration-300',
                            isLightHeader ? 'text-white' : 'text-charcoal'
                        )}
                        aria-label="Toggle menu"
                    >
                        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] lg:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
                            onClick={() => setIsMobileOpen(false)}
                        />
                        <motion.nav
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                            className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-bg flex flex-col"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-stone-100">
                                <Image
                                    src="/images/brand/logo horizontal sin fondo.png"
                                    alt="Alica"
                                    width={120}
                                    height={40}
                                    className="h-10 w-auto object-contain"
                                />
                                <button
                                    onClick={() => setIsMobileOpen(false)}
                                    className="p-2 text-cacao hover:text-rose-deep transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-1 py-10 px-6 space-y-2 overflow-y-auto">
                                <div className="mb-10">
                                    <p className="text-[10px] tracking-[0.3em] uppercase text-cacao/30 font-semibold mb-6">
                                        Boutique Artesanal
                                    </p>
                                    <p className="text-sm text-cacao-light font-medium italic">Estamos para ayudarte con mucho amor.</p>
                                </div>

                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileOpen(false)}
                                            className="block py-4 px-2 text-2xl font-heading text-cacao hover:text-rose-deep transition-all duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="p-8 border-t border-stone-100 bg-stone-50/50">
                                <a
                                    href={buildWhatsAppURL('¡Hola! Me interesa conocer los productos de Alica 🍼')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-charcoal text-white font-bold tracking-widest uppercase text-[11px] hover:bg-stone-800 transition-all duration-300 shadow-xl"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Hacer mi pedido</span>
                                </a>
                            </div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
