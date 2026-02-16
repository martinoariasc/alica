'use client';

import { motion } from 'framer-motion';

interface SeparatorProps {
    className?: string;
    showLine?: boolean;
}

export default function Separator({ className = '', showLine = true }: SeparatorProps) {
    return (
        <div className={`w-full flex justify-center py-20 md:py-32 ${className}`}>
            {showLine && (
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: '150px', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-[1px] bg-stone-200"
                />
            )}
        </div>
    );
}
