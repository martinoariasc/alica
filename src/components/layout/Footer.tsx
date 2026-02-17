import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { buildWhatsAppURL } from '@/lib/utils'; // Keep this import!

const footerLinks = [
    { href: '/shop', label: 'Tienda' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/regalo', label: 'Regalos' },
    { href: '/contacto', label: 'Contacto' },
];

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white/80">
            {/* Top Border Gradient - Minimalist, thin line */}
            <div className="h-0.5 bg-gradient-to-r from-rose/20 via-rose-deep/40 to-gold/20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-16 text-center">
                    {/* Brand */}
                    <div className="space-y-10 flex flex-col items-center">
                        <div className="relative w-28 h-28">
                            <Image
                                src="/images/brand/logo sin fondo.png"
                                alt="Alica Bebés"
                                fill
                                className="object-contain brightness-0 invert" // Forces white logo
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-sm leading-[2.2] text-white/70 max-w-xs mx-auto font-light tracking-wide">
                            Zapatitos artesanales de suela blanda, hechos con amor para los
                            primeros pasos de tu bebé.
                        </p>
                        <div className="flex items-center justify-center gap-10 pt-4">
                            {/* Instagram */}
                            <a
                                href="https://instagram.com/alicapy_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-12 h-12 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                                aria-label="Instagram"
                            >
                                <div className="absolute inset-0 bg-white/5 rounded-full blur-sm group-hover:bg-white/10 transition-colors" />
                                <svg className="w-6 h-6 text-white/80 group-hover:text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* WhatsApp */}
                            <a
                                href={buildWhatsAppURL('¡Hola! Quiero saber más sobre Alica 🍼')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-12 h-12 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                                aria-label="WhatsApp"
                            >
                                <div className="absolute inset-0 bg-white/5 rounded-full blur-sm group-hover:bg-[#25D366]/20 transition-colors" />
                                <svg className="w-6 h-6 text-white/80 group-hover:text-[#25D366] relative z-10" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col items-center justify-start pt-4">
                        <h3 className="font-heading text-lg font-medium text-white mb-10 tracking-widest text-[10px] uppercase opacity-60">
                            Navegación
                        </h3>
                        <ul className="space-y-8">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-light text-white/70 hover:text-white transition-colors duration-300 tracking-wide"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center justify-start pt-4">
                        <h3 className="font-heading text-lg font-medium text-white mb-10 tracking-widest text-[10px] uppercase opacity-60">
                            Contacto
                        </h3>
                        <div className="space-y-8 text-sm text-white/70 font-light">
                            <p>📍 Paraguay</p>
                            <p>📱 WhatsApp: Consultas directas</p>
                            <p>📸 @alicapy_ en Instagram</p>
                            <div className="pt-12 md:pt-16">
                                <a
                                    href={buildWhatsAppURL('¡Hola! Quiero hacer un pedido 🍼')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-4 px-10 py-4 rounded-full bg-[#25D366] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#20BD5A] transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20 hover:-translate-y-0.5"
                                >
                                    Hacer mi pedido
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] text-white/40 text-center md:text-left w-full tracking-widest uppercase">
                        © {new Date().getFullYear()} Alica Bebés.
                    </p>
                    <p className="text-[10px] text-white/40 flex items-center justify-center md:justify-end gap-1 w-full tracking-widest uppercase">
                        Hecho con <Heart className="w-3 h-3 text-rose-deep fill-current opacity-80" /> en Paraguay
                    </p>
                </div>
            </div>
        </footer>
    );
}
