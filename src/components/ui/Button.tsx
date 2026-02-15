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

    // 1. Structure: Relative container
    const containerBase = "relative inline-flex items-center justify-center font-bold transition-all duration-200 ease-out cursor-pointer select-none active:scale-[0.98]";

    // 2. Shape: Friendly Rounded (High Conversion)
    const shape = "rounded-xl";

    // 3. 3D & Shadows (Depth = Clickability)
    const depth = "shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md";

    // 4. Variants
    const variants = {
        // Primary: Vibrant Rose (High Visibility) + White Ring
        primary: "bg-[#BE3B4F] text-white border-2 border-[#BE3B4F] shadow-lg shadow-rose-900/20 ring-2 ring-white/50 ring-offset-2 ring-offset-black/10",
        secondary: "bg-white text-stone-800 border-2 border-stone-200 hover:border-stone-400 shadow-sm",
        outline: "bg-black/30 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-stone-900 shadow-lg",
        whatsapp: "bg-[#25D366] text-white border-2 border-[#25D366] shadow-[#25D366]/30"
    };

    // 5. Sizes (Larger touch targets for accessibility)
    const sizes = {
        sm: 'h-10 px-6 text-sm',
        md: 'h-12 px-8 text-base', // Standard readable size
        lg: 'h-14 px-10 text-lg', // Big CTA
    };

    const finalClassName = `${containerBase} ${shape} ${depth} ${variants[variant]} ${sizes[size]} ${className}`;

    const limitWidth = className.includes('w-full') ? '' : 'min-w-[160px]';

    const content = (
        <span className="flex items-center gap-2 drop-shadow-sm">
            {children}
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
