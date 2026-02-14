export interface Product {
    slug: string;
    name: string;
    price: number;
    oldPrice: number;
    description: string;
    shortDescription: string;
    images: string[];
    category: 'Mocasines' | 'Botitas' | 'Sandalias' | 'Accesorios';
    isFeatured: boolean;
    benefits: string[];
    materials: string[];
    care: string[];
    productionTime: string;
}

export const products: Product[] = [
    {
        slug: 'mocasines-classic-camel',
        name: 'Mocasín Classic Camel',
        price: 120000,
        oldPrice: 150000,
        description:
            'El clásico que combina con todo. Nuestros mocasines en tono camel son el equilibrio perfecto entre estilo y comodidad. Hechos artesanalmente con cuero genuino que se adapta al pie de tu bebé, permitiendo el libre movimiento y desarrollo natural. Ideales para primeros pasos o para lucir elegante en cualquier ocasión.',
        shortDescription: 'Cuero genuino suave y flexible. El clásico infaltable.',
        images: [
            'https://images.unsplash.com/photo-1515488042361-ee0065af4151?q=80&w=2576&auto=format&fit=crop', // Sandalias/shoes close up
            'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop',
        ],
        category: 'Mocasines',
        isFeatured: true,
        benefits: [
            'Suela blanda antideslizante',
            'Elástico en tobillo para fácil calce',
            'Transpirables y ligeros',
        ],
        materials: ['100% Cuero Vacuno', 'Hilo de algodón reforzado'],
        care: ['Limpiar con paño húmedo', 'No lavar en lavarropas', 'Secar a la sombra'],
        productionTime: '2 a 3 días hábiles',
    },
    {
        slug: 'botita-flecos-rosa',
        name: 'Botita Flecos Rose',
        price: 135000,
        oldPrice: 165000,
        description:
            'Dulzura en cada paso. Estas botitas con detalles de flecos en color rosa pastel son pura ternura. Diseñadas para proteger el tobillo sin limitar el movimiento, son perfectas para los días más frescos. Su interior suave asegura que los piecitos estén siempre calentitos y cómodos.',
        shortDescription: 'Botitas con flecos y protección de tobillo. Pura ternura.',
        images: [
            'https://images.unsplash.com/photo-1593453918093-8f3ee5239a56?q=80&w=2670&auto=format&fit=crop', // Pink shoes
            'https://images.unsplash.com/photo-1560506840-a51081e1f371?q=80&w=2574&auto=format&fit=crop',
        ],
        category: 'Botitas',
        isFeatured: true,
        benefits: [
            'Protección extra en tobillo',
            'Flecos decorativos artesanales',
            'Ideal para media estación',
        ],
        materials: ['Cuero descarne premium', 'Suela de goma eva flexible'],
        care: ['Cepillar suavemente', 'Usar protector de gamuza'],
        productionTime: '3 a 4 días hábiles',
    },
    {
        slug: 'sandalia-sol-blanca',
        name: 'Sandalia Sol Blanca',
        price: 110000,
        oldPrice: 140000,
        description:
            'Frescura para el verano. Nuestras sandalias Sol en color blanco son esenciales para los días de calor. Con aberturas que permiten la circulación del aire y un cierre seguro que mantiene el piecito en su lugar. Un diseño atemporal y delicado para completar cualquier outfit veraniego.',
        shortDescription: 'Frescas y seguras para el verano. Diseño aireado.',
        images: [
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2671&auto=format&fit=crop', // White shoes
            'https://images.unsplash.com/photo-1560506840-a51081e1f371?q=80&w=2574&auto=format&fit=crop',
        ],
        category: 'Sandalias',
        isFeatured: true,
        benefits: [
            'Máxima frescura',
            'Cierre ajustable con velcro',
            'Puntera abierta para libertad de dedos',
        ],
        materials: ['Cuero sintético de alta calidad', 'Forro de algodón'],
        care: ['Trapo húmedo con jabón neutro', 'No exponer al sol directo'],
        productionTime: '2 a 3 días hábiles',
    },
    {
        slug: 'oxford-baby-gris',
        name: 'Oxford Baby Gris',
        price: 130000,
        oldPrice: 160000,
        description:
            'Elegancia en miniatura. Los Oxford Baby en gris son la opción perfecta para eventos especiales o para darle un toque sofisticado al look diario. Con cordones suaves que aseguran un ajuste personalizado y una horma ancha que respeta la anatomía del pie gordito del bebé.',
        shortDescription: 'Estilo sofisticado para ocasiones especiales.',
        images: [
            'https://images.unsplash.com/photo-1507963428588-aa84da934d6c?q=80&w=2670&auto=format&fit=crop', // Grey shoes/socks
            'https://images.unsplash.com/photo-1582236353982-f54f76274465?q=80&w=2670&auto=format&fit=crop',
        ],
        category: 'Mocasines',
        isFeatured: false,
        benefits: [
            'Estilo formal y cómodo',
            'Cordones para ajuste perfecto',
            'Suela flexible',
        ],
        materials: ['Cuero ecológico premium', 'Cordones de algodón'],
        care: ['Limpiar en seco', 'Guardar en caja para mantener forma'],
        productionTime: '3 a 4 días hábiles',
    },
    {
        slug: 'vincha-lazo-rosa',
        name: 'Vincha Lazo Rosa',
        price: 45000,
        oldPrice: 60000,
        description:
            'El complemento más dulce. Vincha elástica ultra suave con un lazo en color rosa. No aprieta ni marca la cabecita del bebé. Perfecta para combinar con nuestras botitas o mocasines y armar un set de regalo inolvidable.',
        shortDescription: 'Elástica y suave. El complemento perfecto.',
        images: [
            'https://images.unsplash.com/photo-1596704017254-9b1b1c3127dd?q=80&w=2522&auto=format&fit=crop', // Baby accessories/clothes
            'https://images.unsplash.com/photo-1596704017254-9b1b1c3127dd?q=80&w=2522&auto=format&fit=crop',
        ],
        category: 'Accesorios',
        isFeatured: true,
        benefits: [
            'Elástico super soft que no marca',
            'Talle único (0-2 años)',
            'Hecho a mano',
        ],
        materials: ['Nylon elástico suave', 'Tela de algodón'],
        care: ['Lavar a mano', 'No planchar el lazo'],
        productionTime: '1 a 2 días hábiles',
    },
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
    return products.filter((p) => p.isFeatured);
}

export function getProductsByCategory(category: string): Product[] {
    if (category === 'Todos') return products;
    return products.filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
    const categories = Array.from(new Set(products.map((p) => p.category)));
    return ['Todos', ...categories];
}
