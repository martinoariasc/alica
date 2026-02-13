import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-bg-warm flex flex-col items-center justify-center text-center px-4">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-charcoal mb-4">
                404
            </h2>
            <p className="text-muted text-lg mb-8 max-w-md">
                Ups, parece que esta página no existe.
            </p>
            <Button href="/" variant="primary" size="lg">
                Volver al inicio
            </Button>
        </div>
    );
}
