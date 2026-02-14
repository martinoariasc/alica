'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { buildWhatsAppURL, cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
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
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border py-3'
                        : 'bg-transparent py-5'
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <img
                            src="/logo.svg"
                            alt="Alica Bebés"
                            className={cn(
                                "h-12 w-auto transition-all duration-300",
                                isScrolled ? "brightness-100" : "brightness-[100] drop-shadow-md"
                            )}
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
                                    isScrolled
                                        ? 'text-charcoal/80 hover:text-rose-deep'
                                        : 'text-white/90 hover:text-white'
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
                            isScrolled
                                ? 'bg-rose-deep text-white hover:shadow-rose/30'
                                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                        )}
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Escribinos
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className={cn(
                            'lg:hidden p-2 rounded-lg transition-colors duration-300',
                            isScrolled ? 'text-charcoal' : 'text-white'
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
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
                            onClick={() => setIsMobileOpen(false)}
                        />
                        <motion.nav
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                            className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <img src="/logo.svg" alt="Alica" className="h-10 w-auto" />
                                </div>
                                <button
                                    onClick={() => setIsMobileOpen(false)}
                                    className="p-2 text-charcoal hover:text-rose-deep transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-1 py-6 px-6 space-y-1 overflow-y-auto">
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
                                            className="block py-3 px-4 rounded-xl text-charcoal/80 font-medium hover:bg-rose-light/50 hover:text-rose-deep transition-all duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="p-6 border-t border-border">
                                <a
                                    href={buildWhatsAppURL('¡Hola! Me interesa conocer los productos de Alica 🍼')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#20BD5A] transition-colors"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Hacer mi pedido
                                </a>
                            </div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
