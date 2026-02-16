'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost' | 'caviar';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    onClick?: () => void;
    external?: boolean;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

/**
 * World-Class Boutique Button (v6)
 * Inspired by high-fashion minimalism (FromCaviar style).
 */
export default function Button({
    children,
    href,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    external = false,
    type = 'button',
    disabled = false,
}: ButtonProps) {

    // 1. Boutique Visual Config
    const variants = {
        primary: "bg-stone-900 text-white border-2 border-transparent shadow-xl shadow-stone-900/10",
        secondary: "bg-stone-50 text-stone-900 border-2 border-stone-200 hover:border-stone-900 shadow-sm",
        outline: "bg-transparent text-white border border-white/40 hover:border-white transition-all duration-500",
        whatsapp: "bg-[#25D366] text-white border-2 border-transparent shadow-lg shadow-[#25D366]/20",
        ghost: "bg-transparent text-stone-900 border border-stone-200 hover:border-stone-900 hover:bg-stone-50 transition-all duration-500",
        caviar: "bg-transparent text-stone-900 border-b border-stone-300 hover:border-stone-900 hover:text-stone-950 px-0 rounded-none transition-all duration-700 tracking-[0.3em] font-light"
    };

    const sizes = {
        sm: 'h-11 px-7 text-sm',
        md: 'h-13 px-10 text-base',
        lg: 'h-16 px-14 text-lg',
    };

    const baseStyles = "relative inline-flex items-center justify-center font-body font-semibold tracking-widest uppercase text-[11px] rounded-full transition-colors duration-300 select-none cursor-pointer overflow-hidden group";
    const finalStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    const content = (
        <span className="relative z-10 flex items-center justify-center gap-3">
            {children}
            {variant === 'primary' && (
                <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="text-white/40"
                >
                    →
                </motion.span>
            )}
        </span>
    );

    // 3. Render Logic
    if (href) {
        if (external) {
            return (
                <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={finalStyles}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    {content}
                </motion.a>
            );
        }
        return (
            <Link href={href} passHref legacyBehavior>
                <motion.a
                    className={finalStyles}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    {content}
                </motion.a>
            </Link>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={finalStyles}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            {content}
        </motion.button>
    );
}
