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

    // 1. Structure: Relative container with overflow-hidden for "Curtain" effect
    const containerBase = "relative inline-flex items-center justify-center overflow-hidden border transition-all duration-300 ease-out group cursor-pointer select-none active:scale-[0.98]";

    // 2. Shape: STRICTLY SQUARE (rounded-sm or none)
    const shape = "rounded-sm";

    // 3. Variant Colors (Borders & Text)
    const variants = {
        primary: "border-rose-deep text-white bg-rose-deep",
        secondary: "border-stone-200 text-stone-800 bg-white hover:border-stone-800",
        outline: "border-white text-white bg-transparent",
        whatsapp: "border-[#25D366] text-white bg-[#25D366]"
    };

    // 4. Curtain Colors (The layer that slides in)
    const curtainColors = {
        primary: "bg-stone-900", // Rose -> Dark Stone
        secondary: "bg-stone-200", // White -> Light Grey
        outline: "bg-white", // Transparent -> White
        whatsapp: "bg-[#1da851]" // Green -> Dark Green
    };

    // 5. Text Hover Colors (If needed to change text color on hover)
    const textHover = {
        primary: "group-hover:text-white",
        secondary: "group-hover:text-stone-900",
        outline: "group-hover:text-stone-900", // White text -> Dark text
        whatsapp: "group-hover:text-white"
    };

    // 6. Sizes
    const sizes = {
        sm: 'h-10 px-6 text-[10px]',
        md: 'h-12 px-8 text-xs',
        lg: 'h-14 px-10 text-xs sm:text-sm',
    };

    // 7. Typography
    const typog = "font-body font-semibold uppercase tracking-[0.2em]";

    const finalClassName = `${containerBase} ${shape} ${variants[variant]} ${sizes[size]} ${typog} ${className}`;

    const limitWidth = className.includes('w-full') ? '' : 'min-w-[160px]'; // Ensure minimum luxury width

    const content = (
        <>
            {/* Curtain Element */}
            <span className={`absolute inset-0 w-full h-full -mt-1 rounded-sm opacity-0 transition-opacity duration-300 ease-out ${curtainColors[variant]} group-hover:opacity-100 group-hover:mt-0`} />

            {/* Text Content (Relative to sit on top of curtain) */}
            <span className={`relative flex items-center gap-3 ${textHover[variant]}`}>
                {children}
            </span>
        </>
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
