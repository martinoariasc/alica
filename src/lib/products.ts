export type Category = 'Mocasines' | 'Botitas' | 'Sandalias' | 'Alpargatitas' | 'Accesorios';
export type Gender = 'nene' | 'nena' | 'unisex';
export type AgeRange = '0-6 meses' | '6-12 meses' | '1-2 años';
export type UseType = 'primeros pasos' | 'gateo' | 'regalo' | 'día a día' | 'ocasión especial';

export interface Product {
    slug: string;
    name: string;
    emotionalName: string;
    emotionalPhrase: string;
    price: number;
    oldPrice: number;
    description: string;
    shortDescription: string;
    images: string[];
    category: Category;
    gender: Gender;
    ageRange: AgeRange;
    use: UseType[];
    isFeatured: boolean;
    benefits: string[];
    materials: string[];
    care: string[];
    productionTime: string;
    videoUrl?: string;
    guaranteeText: string;
    scarcityText: string;
    isBestSeller?: boolean;
}

export const products: Product[] = [
    {
        slug: 'mocasin-primer-paso-camel',
        name: 'Mocasín Classic Camel',
        emotionalName: 'Primer Paso Dorado',
        emotionalPhrase: 'Para los pies que van a conquistar el mundo.',
        price: 185000,
        oldPrice: 220000,
        description: 'Piel vegana de alta calidad, transpirable y extremadamente suave.',
        shortDescription: 'El clásico infaltable en tono tierra.',
        images: ['https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=2000'],
        category: 'Mocasines',
        gender: 'unisex',
        ageRange: '6-12 meses',
        use: ['primeros pasos', 'día a día'],
        isFeatured: true,
        benefits: ['Suela blanda antideslizante', 'Elástico de ajuste suave', 'Materiales eco-friendly'],
        materials: ['Cuero sintético premium', 'Algodón orgánico'],
        care: ['Limpiar con paño húmedo'],
        productionTime: '7-10 días',
        guaranteeText: 'Satisfacción garantizada',
        scarcityText: 'Solo 5 pares esta semana',
        isBestSeller: true,
    },
    {
        slug: 'botita-pelo-nieve',
        name: 'Botita Nieve Soft',
        emotionalName: 'Abrazo de Invierno',
        emotionalPhrase: 'Calidez que se siente en cada pisada.',
        price: 195000,
        oldPrice: 240000,
        description: 'Forradas en piel sintética ultra suave, ideales para proteger del frío extremo.',
        shortDescription: 'Botitas abrigadas con forro premium.',
        images: ['https://images.unsplash.com/photo-1543163521-1bf539c35dd2?auto=format&fit=crop&q=80&w=2000'],
        category: 'Botitas',
        gender: 'nena',
        ageRange: '6-12 meses',
        use: ['día a día', 'regalo'],
        isFeatured: true,
        benefits: ['Calor inteligente', 'Suela de agarre natural', 'Fácil calce'],
        materials: ['Lana sintética', 'Cuero soft'],
        care: ['No sumergir en agua'],
        productionTime: '7-10 días',
        guaranteeText: 'Calidad boutique',
        scarcityText: 'Pocas unidades',
    },
    {
        slug: 'sandalia-verano-blanca',
        name: 'Sandalia Sol',
        emotionalName: 'Brisa Marina',
        emotionalPhrase: 'Libertad absoluta para sus días de sol.',
        price: 165000,
        oldPrice: 195000,
        description: 'Diseño ultra liviano con aperturas laterales para máxima ventilación.',
        shortDescription: 'Sandalias frescas de lino premium.',
        images: ['https://images.unsplash.com/photo-1604671831550-a219b156924c?auto=format&fit=crop&q=80&w=2000'],
        category: 'Sandalias',
        gender: 'unisex',
        ageRange: '6-12 meses',
        use: ['día a día', 'ocasión especial'],
        isFeatured: true,
        benefits: ['Transpiración 360', 'Suela de yute suave', 'Ajuste ajustable'],
        materials: ['Lino orgánico', 'Suela de algodón'],
        care: ['Lavar a mano'],
        productionTime: '7-10 días',
        guaranteeText: 'Diseño ergonómico',
        scarcityText: 'Últimos pares',
    },
    {
        slug: 'zapatito-fiesta-charol',
        name: 'Gala Baby Black',
        emotionalName: 'Pequeño Galán',
        emotionalPhrase: 'Elegancia que brilla en sus momentos especiales.',
        price: 210000,
        oldPrice: 260000,
        description: 'Acabado en charol sintético con cordones de seda.',
        shortDescription: 'El zapato de fiesta definitivo.',
        images: ['https://images.unsplash.com/photo-1519233148102-171804791e84?auto=format&fit=crop&q=80&w=2000'],
        category: 'Mocasines',
        gender: 'nene',
        ageRange: '1-2 años',
        use: ['ocasión especial', 'regalo'],
        isFeatured: true,
        benefits: ['Brillo duradero', 'Interior acolchado', 'Suela silenciosa'],
        materials: ['Charol sintético', 'Seda'],
        care: ['Limpiar con algodón seco'],
        productionTime: '10 días',
        guaranteeText: 'Exclusividad ALICA',
        scarcityText: 'Hecho a medida',
    },
    {
        slug: 'vincha-nudo-terciopelo',
        name: 'Vincha Velvet Lulú',
        emotionalName: 'Corona de Seda',
        emotionalPhrase: 'El detalle final para una belleza eterna.',
        price: 65000,
        oldPrice: 85000,
        description: 'Terciopelo elástico que no marca ni aprieta.',
        shortDescription: 'Accesorio premium en terciopelo.',
        images: ['https://images.unsplash.com/photo-1540201761453-9118c7ea1a6a?auto=format&fit=crop&q=80&w=2000'],
        category: 'Accesorios',
        gender: 'nena',
        ageRange: '0-6 meses',
        use: ['regalo', 'ocasión especial'],
        isFeatured: true,
        benefits: ['No marca la piel', 'Talle universal', 'Colores soft'],
        materials: ['Terciopelo premium', 'Nylon soft'],
        care: ['Lavado delicado'],
        productionTime: '2 días',
        guaranteeText: 'Ternura total',
        scarcityText: 'Muchas interesadas',
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

export function getProductsByGender(gender: Gender): Product[] {
    return products.filter((p) => p.gender === gender || p.gender === 'unisex');
}

export function getProductsByAge(ageRange: AgeRange): Product[] {
    return products.filter((p) => p.ageRange === ageRange);
}

export function getProductsByUse(use: UseType): Product[] {
    return products.filter((p) => p.use.includes(use));
}

export function getGiftProducts(): Product[] {
    return products.filter((p) => p.use.includes('regalo'));
}

export function filterProducts(filters: {
    category?: string;
    gender?: Gender;
    ageRange?: AgeRange;
    use?: UseType;
}): Product[] {
    let result = products;
    if (filters.category && filters.category !== 'Todos') {
        result = result.filter((p) => p.category === filters.category);
    }
    if (filters.gender) {
        result = result.filter((p) => p.gender === filters.gender || p.gender === 'unisex');
    }
    if (filters.ageRange) {
        result = result.filter((p) => p.ageRange === filters.ageRange);
    }
    if (filters.use) {
        result = result.filter((p) => p.use.includes(filters.use!));
    }
    return result;
}
