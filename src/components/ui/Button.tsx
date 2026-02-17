'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outlineDark' | 'whatsapp' | 'ghost' | 'caviar' | 'luxury';
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
        primary: "bg-white text-cacao border border-stone-100 hover:border-gold shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-700",
        secondary: "bg-cacao text-white border border-cacao hover:bg-cacao-light shadow-xl hover:shadow-2xl transition-all duration-500",
        outline: "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/[0.05] backdrop-blur-md transition-all duration-500",
        outlineDark: "bg-transparent text-cacao border border-cacao/10 hover:border-cacao hover:bg-cacao/[0.02] transition-all duration-500",
        whatsapp: "bg-[#25D366] text-white border border-[#25D366]/50 shadow-[0_15px_35px_-10px_rgba(37,211,102,0.4)] hover:shadow-[0_25px_45px_-10px_rgba(37,211,102,0.5)]",
        ghost: "bg-transparent text-cacao/60 hover:text-cacao transition-all duration-500",
        caviar: "bg-white/40 backdrop-blur-sm text-cacao border border-stone-200 hover:border-gold hover:bg-white transition-all duration-700 tracking-[0.4em] font-light italic",
        luxury: "bg-cacao text-white border border-cacao hover:border-gold hover:bg-transparent hover:text-cacao shadow-[0_15px_45px_-15px_rgba(0,0,0,0.3)] transition-all duration-700"
    };

    const sizes = {
        sm: 'h-11 px-6 text-[10px]',
        md: 'h-14 px-10 text-[11px]',
        lg: 'h-16 px-14 text-[12px]',
    };

    const baseStyles = "relative inline-flex items-center justify-center font-body font-semibold tracking-[0.25em] uppercase transition-all duration-700 select-none cursor-pointer overflow-hidden group rounded-full";
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
