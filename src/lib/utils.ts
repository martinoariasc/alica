// Format price in Guaraníes
export function formatPrice(amount: number): string {
    return amount.toLocaleString('es-PY') + ' Gs';
}

// Build WhatsApp URL with pre-filled message
export function buildWhatsAppURL(message?: string): string {
    // TODO: Replace with actual WhatsApp number
    const phone = '595981000000';
    const baseUrl = `https://wa.me/${phone}`;
    if (message) {
        return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }
    return baseUrl;
}

// Build WhatsApp URL for a specific product order
export function buildProductWhatsAppURL(productName: string): string {
    const message = `¡Hola! 🍼 Me interesa pedir: ${productName}. ¿Me podés dar más información?`;
    return buildWhatsAppURL(message);
}

// Utility for combining Tailwind classes
export function cn(...classes: (string | undefined | false | null)[]): string {
    return classes.filter(Boolean).join(' ');
}
