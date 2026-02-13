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
        'inline-flex items-center justify-center gap-2 font-body font-medium rounded-full transition-all duration-500 ease-out cursor-pointer select-none';

    const variantStyles = {
        primary:
            'bg-rose-deep text-white hover:bg-rose hover:shadow-lg hover:shadow-rose/30 hover:-translate-y-0.5 active:translate-y-0',
        secondary:
            'bg-cream text-charcoal hover:bg-cream-dark hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
        outline:
            'border-2 border-rose-deep text-rose-deep bg-transparent hover:bg-rose-deep hover:text-white hover:shadow-lg hover:shadow-rose/20 hover:-translate-y-0.5 active:translate-y-0',
        whatsapp:
            'bg-[#25D366] text-white hover:bg-[#20BD5A] hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5 active:translate-y-0',
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
