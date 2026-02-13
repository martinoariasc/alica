export interface Product {
    slug: string;
    name: string;
    category: string;
    price: number;
    oldPrice: number;
    description: string;
    shortDescription: string;
    benefits: string[];
    materials: string;
    careInstructions: string[];
    images: string[];
    productionTime: string;
    featured?: boolean;
}

export const categories = [
    'Todos',
    'Alpargatitas',
    'Botitas',
    'Orejitas',
    'Vinchas',
    'Baberitos',
    'Packs',
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
    {
        slug: 'alpargatita-clasica',
        name: 'Alpargatita Clásica',
        category: 'Alpargatitas',
        price: 135000,
        oldPrice: 175500,
        description:
            'Nuestras alpargatitas clásicas son el calzado perfecto para los primeros pasos de tu bebé. Diseñadas con suela blanda y flexible que respeta el desarrollo natural del pie. Cada par es cosido a mano con amor, usando materiales hipoalergénicos que cuidan la piel sensible de tu pequeño.',
        shortDescription: 'Suela blanda, diseño artesanal, confort real.',
        benefits: [
            'Suela blanda y flexible',
            'No aprietan ni deforman',
            'Material hipoalergénico',
            'Costuras seguras',
            'Transpirables',
        ],
        materials: 'Algodón premium, suela de cuero suave, hilo reforzado',
        careInstructions: [
            'Lavar a mano con agua fría',
            'No usar secadora',
            'Secar a la sombra',
        ],
        images: ['/images/products/alpargatita-1.svg', '/images/products/alpargatita-2.svg'],
        productionTime: '3-5 días hábiles',
        featured: true,
    },
    {
        slug: 'alpargatita-bordado',
        name: 'Alpargatita con Bordado',
        category: 'Alpargatitas',
        price: 135000,
        oldPrice: 175500,
        description:
            'Alpargatitas con delicados bordados hechos a mano que hacen de cada par una pieza única. El mismo confort y calidad de siempre, con un toque especial de arte artesanal.',
        shortDescription: 'Bordado artesanal, única como tu bebé.',
        benefits: [
            'Bordado artesanal único',
            'Suela blanda y flexible',
            'Material hipoalergénico',
            'Costuras seguras',
            'Transpirables',
        ],
        materials: 'Algodón premium, suela de cuero suave, hilo de bordado',
        careInstructions: [
            'Lavar a mano con agua fría',
            'No usar secadora',
            'Secar a la sombra',
        ],
        images: ['/images/products/alpargatita-bordado-1.svg', '/images/products/alpargatita-bordado-2.svg'],
        productionTime: '5-7 días hábiles',
        featured: true,
    },
    {
        slug: 'botita-clasica',
        name: 'Botita Clásica',
        category: 'Botitas',
        price: 150000,
        oldPrice: 195000,
        description:
            'Botitas que abrazan el pie de tu bebé con suavidad. Diseñadas para mantener los piecitos calentitos sin comprometer el movimiento natural. Perfectas para los días frescos.',
        shortDescription: 'Calidez y protección para piecitos felices.',
        benefits: [
            'Abriga sin sobrecalentar',
            'Suela antideslizante',
            'Fácil de poner',
            'Material suave y flexible',
            'Ajuste seguro',
        ],
        materials: 'Algodón cepillado, suela de gamuza, cierre de velcro suave',
        careInstructions: [
            'Lavar a mano con agua tibia',
            'No retorcer',
            'Secar a la sombra',
        ],
        images: ['/images/products/botita-1.svg', '/images/products/botita-2.svg'],
        productionTime: '3-5 días hábiles',
        featured: true,
    },
    {
        slug: 'orejita-clasica',
        name: 'Orejita Clásica',
        category: 'Orejitas',
        price: 145000,
        oldPrice: 188500,
        description:
            'Nuestro modelo más tierno. Los zapatitos con orejitas que hacen que todos digan "¡qué divinos!". El diseño perfecto para esas fotos que vas a guardar para siempre.',
        shortDescription: 'El modelo más tierno para fotos inolvidables.',
        benefits: [
            'Diseño adorable con orejitas',
            'Suela blanda antideslizante',
            'Material premium',
            'Ideal para sesiones de fotos',
            'Cómodos para todo el día',
        ],
        materials: 'Ecocuero premium, suela de gamuza, detalles cosidos a mano',
        careInstructions: [
            'Limpiar con paño húmedo',
            'No sumergir en agua',
            'Guardar en lugar fresco',
        ],
        images: ['/images/products/orejita-1.svg', '/images/products/orejita-2.svg'],
        productionTime: '3-5 días hábiles',
        featured: true,
    },
    {
        slug: 'vincha-clasica',
        name: 'Vincha Clásica',
        category: 'Vinchas',
        price: 20000,
        oldPrice: 26000,
        description:
            'Vinchas suaves y elásticas que no aprietan la cabecita de tu bebé. Perfectas para completar cualquier outfit con un toque delicado.',
        shortDescription: 'Suave, elástica y adorable.',
        benefits: [
            'No aprieta ni marca',
            'Elástico ultra suave',
            'Talla única ajustable',
            'Lavable',
        ],
        materials: 'Nylon suave, flores de tela, elástico médico',
        careInstructions: [
            'Lavar a mano',
            'Secar al aire',
        ],
        images: ['/images/products/vincha-1.svg'],
        productionTime: '2-3 días hábiles',
    },
    {
        slug: 'vincha-especial',
        name: 'Vincha Especial',
        category: 'Vinchas',
        price: 30000,
        oldPrice: 39000,
        description:
            'Vinchas con diseños especiales para esos momentos importantes. Con flores más elaboradas y detalles premium que hacen la diferencia.',
        shortDescription: 'Diseño especial para momentos especiales.',
        benefits: [
            'Diseño exclusivo',
            'No aprieta ni marca',
            'Ideal para eventos',
            'Materiales premium',
        ],
        materials: 'Nylon suave, flores de seda, perlas decorativas, elástico médico',
        careInstructions: [
            'Lavar a mano con cuidado',
            'No retorcer',
            'Secar al aire',
        ],
        images: ['/images/products/vincha-especial-1.svg'],
        productionTime: '3-5 días hábiles',
        featured: true,
    },
    {
        slug: 'pack-3-vinchas',
        name: 'Pack 3 Vinchas',
        category: 'Packs',
        price: 45000,
        oldPrice: 58500,
        description:
            '3 vinchas en colores pastel coordinados para que tu bebé siempre tenga la vincha perfecta. El pack más popular entre las mamás.',
        shortDescription: '3 vinchas pastel, el combo favorito.',
        benefits: [
            'Ahorro del 25%',
            '3 colores combinables',
            'Mismo confort premium',
            'Packaging de regalo',
        ],
        materials: 'Nylon suave, flores de tela, elástico médico',
        careInstructions: [
            'Lavar a mano',
            'Secar al aire',
        ],
        images: ['/images/products/pack-vinchas-1.svg'],
        productionTime: '2-3 días hábiles',
    },
    {
        slug: 'baberito-clasico',
        name: 'Baberito Clásico',
        category: 'Baberitos',
        price: 35000,
        oldPrice: 45500,
        description:
            'Baberitos absorbentes y super suaves que protegen la ropita de tu bebé con estilo. Doble capa para máxima absorción.',
        shortDescription: 'Absorbente, suave y con estilo.',
        benefits: [
            'Doble capa absorbente',
            'Broche a presión seguro',
            'No irrita la piel',
            'Diseños únicos',
        ],
        materials: 'Algodón orgánico, forro de toalla, broche a presión',
        careInstructions: [
            'Lavable en lavarropas',
            'Secar a temperatura baja',
        ],
        images: ['/images/products/baberito-1.svg'],
        productionTime: '2-3 días hábiles',
    },
    {
        slug: 'bandana-bebe',
        name: 'Bandana Bebé',
        category: 'Baberitos',
        price: 35000,
        oldPrice: 45500,
        description:
            'Bandanas con estilo que funcionan como babero. La opción más trendy para los bebés fashionistas. Absorbentes y fáciles de poner.',
        shortDescription: 'Estilo y funcionalidad en uno.',
        benefits: [
            'Estilo moderno',
            'Absorbente',
            'Fácil de poner con broches',
            'Reversible',
        ],
        materials: 'Algodón estampado, forro de toalla, broches metálicos',
        careInstructions: [
            'Lavable en lavarropas',
            'Secar a temperatura baja',
        ],
        images: ['/images/products/bandana-1.svg'],
        productionTime: '2-3 días hábiles',
    },
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
    if (category === 'Todos') return products;
    return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
    return products.filter((p) => p.featured);
}
