import { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { buildWhatsAppURL } from '@/lib/utils';
import { MapPin, Phone, Clock, Instagram, Mail, MessageCircle, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contacto | Concierge ALICA',
    description:
        'Conectá con nuestra boutique. Zapatitos artesanales de suela blanda para bebés en Paraguay.',
};

const contactInfo = [
    {
        icon: MessageCircle,
        title: 'Atención Personalizada',
        text: 'Consultá disponibilidad, talles y envíos directamente con nosotros.',
        action: 'Chat Vía WhatsApp',
        href: buildWhatsAppURL('¡Hola! Deseo recibir atención personalizada sobre las piezas de Alica 🎀'),
        primary: true
    },
    {
        icon: Instagram,
        title: 'Nuestra Comunidad',
        text: 'Seguinos para ver el proceso artesanal y nuevos lanzamientos.',
        action: '@alicapy_',
        href: 'https://instagram.com/alicapy_',
    },
    {
        icon: Mail,
        title: 'Consultas Institucionales',
        text: 'Para colaboraciones o consultas corporativas.',
        action: 'alicabebes@gmail.com',
        href: 'mailto:alicabebes@gmail.com',
    },
];

export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header Concierge */}
            <section className="pt-48 pb-24 relative overflow-hidden bg-bg-warm/10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <AnimatedSection direction="up" className="space-y-8">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="h-px w-8 bg-gold/30" />
                            <span className="text-[10px] uppercase tracking-[0.6em] text-gold font-bold">Atención Exclusiva</span>
                            <div className="h-px w-8 bg-gold/30" />
                        </div>
                        <h1 className="font-heading text-5xl md:text-8xl text-cacao leading-tight">Canales de <br /><span className="italic font-light text-stone-300">Cercanía.</span></h1>
                        <p className="font-body text-stone-400 text-lg md:text-2xl max-w-2xl mx-auto italic font-light leading-relaxed">
                            &ldquo;En ALICA, cada consulta es el inicio de una historia. Estamos aquí para guiarte en la elección del primer calzado de tu bebé.&rdquo;
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {contactInfo.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <AnimatedSection key={i} delay={i * 0.1} blur>
                                    <div className={`p-10 rounded-[3rem] h-full flex flex-col items-center text-center transition-all duration-700 ${item.primary ? 'bg-cacao text-white shadow-premium-gold' : 'border border-linen/30 hover:border-gold/40'
                                        }`}>
                                        <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 ${item.primary ? 'bg-white/10' : 'bg-bg-warm/30'
                                            }`}>
                                            <Icon className={`w-8 h-8 ${item.primary ? 'text-gold' : 'text-cacao'}`} />
                                        </div>
                                        <h3 className={`font-heading text-3xl mb-4 ${item.primary ? 'text-white' : 'text-cacao'}`}>
                                            {item.title}
                                        </h3>
                                        <p className={`font-body text-sm mb-10 flex-1 leading-relaxed italic ${item.primary ? 'text-white/60' : 'text-stone-400'
                                            }`}>
                                            {item.text}
                                        </p>
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-[10px] font-bold uppercase tracking-[0.3em] pb-2 border-b transition-all duration-500 ${item.primary ? 'text-gold border-gold/40 hover:text-white hover:border-white' : 'text-cacao border-gold/20 hover:text-gold hover:border-gold'
                                                }`}
                                        >
                                            {item.action}
                                        </a>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Service Standards */}
            <section className="py-40 bg-bg-warm/5">
                <div className="max-w-4xl mx-auto px-6">
                    <AnimatedSection blur className="text-center space-y-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <div className="space-y-6">
                                <Clock className="w-10 h-10 text-gold/40 mx-auto" />
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-cacao">Disponibilidad</h4>
                                <p className="text-stone-400 font-light italic">Atención fluida de Lunes a Sábados, <br /> de 08:00 a 20:00 hs.</p>
                            </div>
                            <div className="space-y-6">
                                <Sparkles className="w-10 h-10 text-gold/40 mx-auto" />
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-cacao">Compromiso</h4>
                                <p className="text-stone-400 font-light italic">Respondemos a cada mensaje con la <br /> dedicación que tu familia merece.</p>
                            </div>
                        </div>
                        <div className="pt-20 border-t border-linen/30">
                            <Button
                                href={buildWhatsAppURL('¡Hola! Tengo una consulta sobre el tallaje de los zapatitos 🍼')}
                                variant="luxury"
                                size="lg"
                                className="w-full md:w-auto px-20"
                            >
                                Iniciar Conversación de Lujo
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
