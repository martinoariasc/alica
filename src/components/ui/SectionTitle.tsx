import { cn } from '@/lib/utils';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    light?: boolean;
    className?: string;
}

export default function SectionTitle({
    title,
    subtitle,
    align = 'center',
    light = false,
    className = '',
}: SectionTitleProps) {
    const alignStyles = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <div className={cn('mb-12', alignStyles[align], className)}>
            <h2
                className={cn(
                    'font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4',
                    light ? 'text-white' : 'text-charcoal'
                )}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        'text-lg md:text-xl max-w-2xl font-light',
                        align === 'center' ? 'mx-auto' : '',
                        light ? 'text-white/80' : 'text-muted'
                    )}
                >
                    {subtitle}
                </p>
            )}
            <div
                className={cn(
                    'mt-6 h-[2px] w-16 rounded-full',
                    align === 'center' ? 'mx-auto' : '',
                    align === 'right' ? 'ml-auto' : '',
                    light ? 'bg-white/40' : 'bg-rose'
                )}
            />
        </div>
    );
}
