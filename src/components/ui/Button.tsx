import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    external?: boolean;
    className?: string;
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
    const baseStyles =
        'inline-flex items-center justify-center gap-3 font-body font-semibold text-xs uppercase tracking-[0.2em] rounded-md transition-all duration-300 ease-out cursor-pointer select-none border active:scale-[0.98]';

    const variantStyles = {
        primary:
            'bg-rose-deep text-white border-transparent hover:bg-stone-800 hover:text-white shadow-md hover:shadow-xl hover:-translate-y-0.5',
        secondary:
            'bg-white text-stone-800 border-stone-200 hover:border-stone-800 hover:text-black hover:shadow-lg hover:-translate-y-0.5',
        outline:
            'bg-transparent text-white border-white hover:bg-white hover:text-stone-900 hover:border-white shadow-sm hover:shadow-md hover:-translate-y-0.5',
        whatsapp:
            'bg-[#25D366] text-white border-transparent hover:bg-[#1DA851] shadow-lg hover:shadow-[#25D366]/40 hover:-translate-y-0.5',
    };

    const sizeStyles = {
        sm: 'px-5 py-2 text-sm',
        md: 'px-7 py-3 text-base',
        lg: 'px-10 py-4 text-lg',
    };

    const combinedClassName = cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
    );

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={combinedClassName}
                >
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClassName}>
            {children}
        </button>
    );
}
