/**
 * ALICA - Catálogo de Productos
 * 
 * INSTRUCCIONES PARA MODIFICAR:
 * 1. emotionalName: Es el título grande que aparece en la web.
 * 2. emotionalPhrase: Es la frase poética debajo del título.
 * 3. description: Descripción detallada.
 * 4. images: Rutas de las imágenes (asegurate de que existan en public/images/products/...).
 * 5. scarcityText: El texto de urgencia (ej: "Solo 5 pares").
 */

export type Category = 'Línea Respetuosa' | 'Botitas con Alma' | 'Sandalias' | 'Alpargatitas' | 'Accesorios';
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
        slug: 'mocasin-luxury-nena-blanco',
        name: 'Mocasín Luxury Blanco',
        emotionalName: 'Pureza en tus Pasos',
        emotionalPhrase: 'La elegancia del blanco puro para sus momentos más sagrados.',
        price: 185000,
        oldPrice: 220000,
        description: 'Mocasines de cuero soft premium en color blanco nieve. Diseñados con una suela extremadamente flexible para proteger el desarrollo natural de sus piecitos.',
        shortDescription: 'Mocasín de cuero soft en blanco puro.',
        images: [
            '/images/products/nenas/1/05e143d3-3786-4b06-ae01-186978982994.png',
            '/images/products/nenas/1/1fbad623-70d7-49fe-b3f0-71079a080bda.png',
            '/images/products/nenas/1/5b611885-55c2-4935-bc9f-113529eee138.png'
        ],
        category: 'Línea Respetuosa',
        gender: 'nena',
        ageRange: '6-12 meses',
        use: ['primeros pasos', 'regalo', 'ocasión especial'],
        isFeatured: true,
        benefits: ['Suela blanda ultra-flexible', 'Costuras invisibles', 'Ajuste ergonómico'],
        materials: ['Cuero soft premium', 'Algodón orgánico'],
        care: ['Limpiar con paño ligeramente húmedo'],
        productionTime: '7-10 días',
        guaranteeText: 'Calidad Artesanal',
        scarcityText: 'Solo 5 pares por semana',
        isBestSeller: true,
    },
    {
        slug: 'botita-glitter-champagne',
        name: 'Botita Glitter Champagne',
        emotionalName: 'Destellos de Magia',
        emotionalPhrase: 'Para que brille en sus momentos más especiales.',
        price: 210000,
        oldPrice: 245000,
        description: 'Botitas con acabado glitter champagne y detalle de moño. Máxima elegancia sin sacrificar la salud de sus pies.',
        shortDescription: 'Botitas glitter con moño elegante.',
        images: [
            '/images/products/nenas/2/1.png',
            '/images/products/nenas/2/2.png',
            '/images/products/nenas/2/1966b3d9-7bd2-4d97-8f25-947e95927631.png',
            '/images/products/nenas/2/5dd8e748-19fd-4037-872d-2645efbd9b46.png',
            '/images/products/nenas/2/9fffcfca-1dc2-40e8-9ded-1918956b89a7.png'
        ],
        category: 'Botitas con Alma',
        gender: 'nena',
        ageRange: '1-2 años',
        use: ['ocasión especial', 'regalo'],
        isFeatured: true,
        benefits: ['Suela blanda antideslizante', 'Interior acolchado', 'Fácil calce'],
        materials: ['Material sintético premium', 'Forro suave'],
        care: ['Limpiar con algodón seco'],
        productionTime: '7-10 días',
        guaranteeText: 'Diseño Exclusivo',
        scarcityText: 'Edición Limitada',
    },
    {
        slug: 'mocasin-luxury-nena-arena',
        name: 'Mocasín Luxury Arena',
        emotionalName: 'Esencia Natural',
        emotionalPhrase: 'Tonos tierra que abrazan la calidez de su infancia.',
        price: 185000,
        oldPrice: 220000,
        description: 'Mocasín de cuero soft en tono arena. Versátil, elegante y diseñado bajo estándares de calzado respetuoso.',
        shortDescription: 'Mocasín de cuero soft en tono arena.',
        images: [
            '/images/products/nenas/3/0c1ef560-6056-4a67-9f31-18657c222124.png',
            '/images/products/nenas/3/4f1a8ae6-f21c-4be3-8796-1d2612fe65cf.png',
            '/images/products/nenas/3/87d45b68-d750-471e-846c-ace3f23614fd.png'
        ],
        category: 'Línea Respetuosa',
        gender: 'nena',
        ageRange: '6-12 meses',
        use: ['ocasión especial', 'primeros pasos', 'día a día'],
        isFeatured: true,
        benefits: ['Respetuoso con el crecimiento', 'Transpirable', 'Suavidad extrema'],
        materials: ['Cuero soft', 'Plantilla de algodón'],
        care: ['Limpiar con paño húmedo'],
        productionTime: '7-10 días',
        guaranteeText: 'Hecho a Mano',
        scarcityText: 'Muy solicitado',
    },
    {
        slug: 'mocasin-aventura-nene-marron',
        name: 'Mocasín Aventura Marrón',
        emotionalName: 'Pequeño Gran Explorador',
        emotionalPhrase: 'Preparado para descubrir el mundo a su ritmo.',
        price: 185000,
        oldPrice: 220000,
        description: 'Mocasín de nene en tono tierra. Suela blanda que permite sentir el suelo, fundamental para el desarrollo del equilibrio.',
        shortDescription: 'Mocasín de nene en tono tierra.',
        images: [
            '/images/products/nenes/1/d036d442-5186-4a03-a7bb-c52641120ac6.png',
            '/images/products/nenes/1/13038944-3916-4684-8073-04bc39a62fe5.jpg',
            '/images/products/nenes/1/89ef0bae-2925-4a38-af6a-53b64e09dbff.jpg',
            '/images/products/nenes/1/acbe8213-011b-4e09-b12a-246a5138a2f3.jpg'
        ],
        category: 'Línea Respetuosa',
        gender: 'nene',
        ageRange: '1-2 años',
        use: ['gateo', 'primeros pasos', 'día a día'],
        isFeatured: true,
        benefits: ['Protección natural', 'Suela de agarre suave', 'Máximo confort'],
        materials: ['Cuero sintético premium', 'Lona resistente'],
        care: ['Limpiar con cepillo suave'],
        productionTime: '7-10 días',
        guaranteeText: 'Cuidado Fisiológico',
        scarcityText: 'Solo 15 unidades por semana',
        isBestSeller: true,
    },

    {
        slug: 'combo-ternura-accesorios',
        name: 'Combo Ternura (Vinchas + Baberito)',
        emotionalName: 'El Detalle Perfecto',
        emotionalPhrase: 'Pack promocional: 3 vinchas premium + 1 baberito artesanal.',
        price: 65000,
        oldPrice: 95000,
        description: 'La forma más tierna de completar su look. Este combo incluye nuestro pack de 3 vinchas elásticas que no aprietan y un baberito de algodón ultra suave. Por tiempo limitado a un precio especial.',
        shortDescription: 'Combo de 3 vinchas y 1 baberito.',
        images: [
            '/images/products/accesorios/Accesorios/f8fb2468-c130-4f46-8952-ec5918a890b7.jpg'
        ],
        category: 'Accesorios',
        gender: 'nena',
        ageRange: '0-6 meses',
        use: ['regalo', 'ocasión especial'],
        isFeatured: true,
        benefits: ['Ahorro exclusivo', 'Suavidad garantizada', 'Fácil de lavar'],
        materials: ['Algodón orgánico', 'Elástico premium'],
        care: ['Lavar con agua fría'],
        productionTime: '2-3 días',
        guaranteeText: 'Calidad ALICA',
        scarcityText: '¡Combo más vendido!',
        isBestSeller: true,
    }
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
