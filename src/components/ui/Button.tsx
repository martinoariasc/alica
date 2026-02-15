import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    external?: boolean;
    className?: string; // Kept for margin/width but NOT for styling overrides
    onClick?: () => void;
    type?: 'button' | 'submit';
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    external = false,
    className = '',
    onClick,
    type = 'button',
}: ButtonProps) {

    // 1. Structure: Reined Pill (Universal Standard for Premium)
    const containerBase = "relative inline-flex items-center justify-center font-body font-semibold tracking-wide transition-all duration-300 ease-in-out cursor-pointer select-none active:scale-[0.98]";

    // 2. Shape: Pill (Friendly, Trusted, Luxury)
    const shape = "rounded-full";

    // 3. World-Class Variants (Inspired by Apple/Dior)
    const variants = {
        // High Contrast, "Sold Out" Luxury
        primary: "bg-stone-900 text-white border-2 border-transparent hover:bg-stone-800 shadow-xl shadow-stone-900/10 hover:shadow-2xl hover:-translate-y-0.5",
        // Elegant & Accessible
        secondary: "bg-white text-stone-900 border-2 border-stone-200 hover:border-stone-900 shadow-sm",
        // Floating / Hero Visibility
        outline: "bg-white/10 backdrop-blur-md text-white border-2 border-white hover:bg-white hover:text-stone-900 shadow-lg",
        // Trusted Communication
        whatsapp: "bg-[#25D366] text-white border-2 border-transparent hover:bg-[#1da851] shadow-lg shadow-[#25D366]/20"
    };

    // 4. Global Brand Sizes
    const sizes = {
        sm: 'h-11 px-6 text-sm',
        md: 'h-13 px-9 text-base',
        lg: 'h-16 px-12 text-lg', // Apple size CTA
    };

    const finalClassName = `${containerBase} ${shape} ${variants[variant]} ${sizes[size]} ${className}`;
    const limitWidth = className.includes('w-full') ? '' : 'min-w-[200px]';

    const content = (
        <span className="flex items-center justify-center gap-3">
            {children}
            {variant === 'primary' && <span className="text-white/40 group-hover:translate-x-1 transition-transform">→</span>}
        </span>
    );

    if (href) {
        if (external) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className={`${finalClassName} ${limitWidth}`}>
                    {content}
                </a>
            );
        }
        return (
            <Link href={href} className={`${finalClassName} ${limitWidth}`}>
                {content}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={`${finalClassName} ${limitWidth}`}>
            {content}
        </button>
    );
}
