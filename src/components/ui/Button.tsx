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
 * Premium Boutique Button (v7)
 * High-fashion minimalism with refined micro-interactions.
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

    const variants = {
        primary: "bg-transparent text-stone-900 border border-stone-900/30 hover:border-stone-900 hover:bg-stone-900/[0.03] transition-all duration-500",
        secondary: "bg-stone-50 text-stone-900 border border-stone-200 hover:border-stone-900 transition-all duration-500",
        outline: "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/[0.05] transition-all duration-500",
        whatsapp: "bg-[#25D366] text-white border-2 border-transparent shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30",
        ghost: "bg-transparent text-stone-600 border border-stone-100 hover:border-stone-400 hover:text-stone-900 transition-all duration-500",
        caviar: "bg-transparent text-stone-900 border-b border-stone-300 hover:border-stone-900 hover:text-stone-950 px-0 rounded-none transition-all duration-700 tracking-[0.4em] font-light"
    };

    const sizes = {
        sm: 'h-11 px-8 text-[10px]',
        md: 'h-13 px-10 text-[11px]',
        lg: 'h-16 px-14 text-[12px]',
    };

    const baseStyles = "relative inline-flex items-center justify-center font-body font-medium tracking-[0.25em] uppercase rounded-sm transition-all duration-500 select-none cursor-pointer overflow-hidden group";
    const finalStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    const hoverAnimation = {
        y: -3,
        scale: 1.015,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    };
    const tapAnimation = {
        scale: 0.97,
        y: 0,
        transition: { duration: 0.15 },
    };

    const content = (
        <span className="relative z-10 flex items-center justify-center gap-3">
            {children}
        </span>
    );

    if (href) {
        if (external) {
            return (
                <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={finalStyles}
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                >
                    {content}
                </motion.a>
            );
        }
        return (
            <Link href={href} passHref legacyBehavior>
                <motion.a
                    className={finalStyles}
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
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
            whileHover={hoverAnimation}
            whileTap={tapAnimation}
        >
            {content}
        </motion.button>
    );
}
