'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { BookOpen, Baby, Shield, ThumbsUp, Sparkles, Check } from 'lucide-react';

const chapters = [
    { icon: Baby, title: 'Cuidados del recién nacido' },
    { icon: Shield, title: 'Salud y seguridad del bebé' },
    { icon: ThumbsUp, title: 'Primeros pasos y desarrollo' },
    { icon: Sparkles, title: 'Tips de mamás experimentadas' },
];

export default function EbookPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // TODO: Connect to Google Sheets API
        // For now, simulate a submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setSubmitted(true);
        setLoading(false);
    };

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-rose-light/30 to-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <AnimatedSection>
                        <span className="inline-block text-5xl mb-4">📖</span>
                        <SectionTitle
                            title="50 Consejos para Cuidar a tu Bebé"
                            subtitle="Un regalo de Alica para mamás. Descargá gratis nuestra guía."
                        />
                    </AnimatedSection>
                </div>
            </section>

            <section className="pb-20 bg-bg">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left: Chapters Preview */}
                        <AnimatedSection direction="left">
                            <div className="bg-white rounded-3xl p-8 shadow-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <BookOpen className="w-6 h-6 text-rose-deep" />
                                    <h3 className="font-heading text-xl font-semibold">
                                        ¿Qué incluye la guía?
                                    </h3>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {chapters.map((ch, i) => {
                                        const Icon = ch.icon;
                                        return (
                                            <div
                                                key={i}
                                                className="flex items-center gap-4 p-4 rounded-2xl bg-bg-warm"
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-rose-light/50 flex items-center justify-center flex-shrink-0">
                                                    <Icon className="w-5 h-5 text-rose-deep" />
                                                </div>
                                                <span className="font-medium text-charcoal text-sm">
                                                    {ch.title}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                                <p className="text-sm text-muted italic text-center">
                                    ...y muchos más consejos que toda mamá necesita saber 💕
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Right: Form */}
                        <AnimatedSection direction="right">
                            <div className="bg-white rounded-3xl p-8 shadow-sm">
                                {!submitted ? (
                                    <>
                                        <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                                            Descargá la guía gratis
                                        </h3>
                                        <p className="text-sm text-muted mb-6">
                                            Completá tus datos y te enviamos la guía al instante.
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-charcoal mb-1.5"
                                                >
                                                    Nombre
                                                </label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, name: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg-warm text-charcoal placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-all text-sm"
                                                    placeholder="Tu nombre"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="phone"
                                                    className="block text-sm font-medium text-charcoal mb-1.5"
                                                >
                                                    Teléfono
                                                </label>
                                                <input
                                                    id="phone"
                                                    type="tel"
                                                    required
                                                    value={formData.phone}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, phone: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg-warm text-charcoal placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-all text-sm"
                                                    placeholder="0981 ..."
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-charcoal mb-1.5"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, email: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg-warm text-charcoal placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-all text-sm"
                                                    placeholder="tu@email.com"
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                variant="primary"
                                                size="lg"
                                                className="w-full !mt-6"
                                            >
                                                {loading ? (
                                                    <span className="animate-pulse-soft">
                                                        Enviando...
                                                    </span>
                                                ) : (
                                                    'Descargar guía gratis'
                                                )}
                                            </Button>
                                        </form>

                                        <p className="text-[11px] text-muted text-center mt-4">
                                            Tus datos están seguros. No hacemos spam.
                                        </p>
                                    </>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                                            <Check className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="font-heading text-2xl font-semibold text-charcoal mb-2">
                                            ¡Listo! 🎉
                                        </h3>
                                        <p className="text-muted mb-6">
                                            Te enviamos la guía. Revisá tu WhatsApp o email.
                                        </p>
                                        <Button href="/shop" variant="primary">
                                            Ver productos
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </>
    );
}
