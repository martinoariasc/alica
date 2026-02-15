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
        'inline-flex items-center justify-center gap-2 font-body font-medium rounded-2xl transition-all duration-300 ease-out cursor-pointer select-none border border-transparent tracking-wide active:scale-[0.98]';

    const variantStyles = {
        primary:
            'bg-rose-deep text-white shadow-xl shadow-rose-deep/20 hover:bg-rose hover:shadow-2xl hover:shadow-rose-deep/30 hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-b from-rose-deep to-[#B0928C]',
        secondary:
            'bg-white text-charcoal border border-stone-200 hover:border-rose-deep/30 hover:shadow-lg hover:-translate-y-0.5',
        outline:
            'border-2 border-rose-deep text-rose-deep bg-transparent hover:bg-rose-deep hover:text-white hover:shadow-xl hover:shadow-rose/20 hover:-translate-y-0.5',
        whatsapp:
            'bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 hover:bg-[#20BD5A] hover:shadow-xl hover:-translate-y-0.5',
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
