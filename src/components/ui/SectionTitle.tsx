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
        left: 'text-left items-start',
        center: 'text-center items-center',
        right: 'text-right items-end',
    };

    return (
        <div className={cn('mb-20 md:mb-32 flex flex-col', alignStyles[align], className)}>
            <h2
                className={cn(
                    'font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6',
                    light ? 'text-white' : 'text-cacao'
                )}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        'text-lg md:text-xl lg:text-2xl max-w-3xl font-light italic opacity-60 leading-relaxed',
                        align === 'center' ? 'mx-auto' : '',
                        light ? 'text-white/80' : 'text-muted'
                    )}
                >
                    &ldquo;{subtitle}&rdquo;
                </p>
            )}
            <div
                className={cn(
                    'mt-10 h-px w-24 bg-gradient-to-r from-transparent via-gold/40 to-transparent',
                    align === 'left' ? 'via-gold/40 to-transparent ml-0 mr-auto' : '',
                    align === 'right' ? 'via-gold/40 to-transparent ml-auto mr-0' : '',
                    light ? 'via-white/20' : ''
                )}
            />
        </div>
    );
}
