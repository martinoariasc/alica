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
        primary: "bg-white text-stone-900 border border-stone-200 hover:border-stone-900 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] transition-all duration-500",
        secondary: "bg-stone-900 text-white border border-stone-900 hover:bg-stone-800 shadow-lg hover:shadow-xl transition-all duration-500",
        outline: "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/[0.1] backdrop-blur-md transition-all duration-500",
        whatsapp: "bg-[#25D366] text-white border border-[#25D366]/50 shadow-[0_10px_30px_-10px_rgba(37,211,102,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(37,211,102,0.6)] hover:-translate-y-1",
        ghost: "bg-transparent text-stone-600 hover:text-stone-900 transition-all duration-500",
        caviar: "bg-white/40 backdrop-blur-sm text-stone-900 border border-stone-200 hover:border-stone-900 hover:bg-white transition-all duration-700 tracking-[0.4em] font-light italic shadow-sm hover:shadow-md"
    };

    const sizes = {
        sm: 'h-12 px-8 text-[10px]',
        md: 'h-14 px-12 text-[11px]',
        lg: 'h-16 px-16 text-[12px]',
    };

    const baseStyles = "relative inline-flex items-center justify-center font-body font-medium tracking-[0.3em] uppercase transition-all duration-500 select-none cursor-pointer overflow-hidden group rounded-full";
    const finalStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    const hoverAnimation = {
        y: -2,
        scale: 1.01,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    };
    const tapAnimation = {
        scale: 0.97,
        y: 0,
        transition: { duration: 0.15 },
    };

    const content = (
        <span className="relative z-10 flex items-center justify-center gap-4">
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
                    whileHover={hoverAnimation as any}
                    whileTap={tapAnimation as any}
                >
                    {content}
                </motion.a>
            );
        }
        return (
            <Link href={href} passHref legacyBehavior>
                <motion.a
                    className={finalStyles}
                    whileHover={hoverAnimation as any}
                    whileTap={tapAnimation as any}
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
            whileHover={hoverAnimation as any}
            whileTap={tapAnimation as any}
        >
            {content}
        </motion.button>
    );
}
