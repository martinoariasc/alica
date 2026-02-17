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
        slug: 'mocasin-luxury-nena-rosado',
        name: 'Mocasín Luxury Rosado',
        emotionalName: 'Dulzura en Rosa',
        emotionalPhrase: 'La suavidad que su piel merece, el estilo que vos amás.',
        price: 185000,
        oldPrice: 220000,
        description: 'Mocasines de cuero soft premium en tono rosa pastel. Diseñados para respetar la anatomía del piecito en crecimiento.',
        shortDescription: 'Mocasín de cuero soft en rosa pastel.',
        images: [
            '/images/products/nenas/1/05e143d3-3786-4b06-ae01-186978982994.png',
            '/images/products/nenas/1/1fbad623-70d7-49fe-b3f0-71079a080bda.png',
            '/images/products/nenas/1/5b611885-55c2-4935-bc9f-113529eee138.png'
        ],
        category: 'Mocasines',
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
        category: 'Botitas',
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
        slug: 'mocasin-classic-blanco',
        name: 'Mocasín Classic Blanco',
        emotionalName: 'Pureza Eterna',
        emotionalPhrase: 'Un clásico que cuenta historias de pureza y amor.',
        price: 185000,
        oldPrice: 220000,
        description: 'El infaltable color blanco en cuero soft. Ideal para bautismos, cumpleaños o el día a día más sofisticado.',
        shortDescription: 'Mocasín clásico en blanco puro.',
        images: [
            '/images/products/nenas/3/0c1ef560-6056-4a67-9f31-18657c222124.png',
            '/images/products/nenas/3/4f1a8ae6-f21c-4be3-8796-1d2612fe65cf.png',
            '/images/products/nenas/3/87d45b68-d750-471e-846c-ace3f23614fd.png'
        ],
        category: 'Mocasines',
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
        emotionalName: 'Primeros Pasos Firmes',
        emotionalPhrase: 'Preparado para descubrir el mundo a su ritmo.',
        price: 185000,
        oldPrice: 220000,
        description: 'Mocasín robusto pero suave en tono tierra. El compañero ideal para sus exploraciones diarias.',
        shortDescription: 'Mocasín de nene en tono tierra.',
        images: [
            '/images/products/nenes/1/d036d442-5186-4a03-a7bb-c52641120ac6.png',
            '/images/products/nenes/1/13038944-3916-4684-8073-04bc39a62fe5.jpg',
            '/images/products/nenes/1/89ef0bae-2925-4a38-af6a-53b64e09dbff.jpg',
            '/images/products/nenes/1/acbe8213-011b-4e09-b12a-246a5138a2f3.jpg'
        ],
        category: 'Mocasines',
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
        slug: 'vincha-nudo-romantica',
        name: 'Vincha Nudo Romántica',
        emotionalName: 'El Detalle Final',
        emotionalPhrase: 'Porque los pequeños detalles crean los grandes recuerdos.',
        price: 65000,
        oldPrice: 85000,
        description: 'Vincha de tela elástica premium que no marca la cabecita de tu bebé. Suave, ligera y eterna.',
        shortDescription: 'Vincha elástica de nudo suave.',
        images: [
            '/images/products/accesorios/Accesorios/f8fb2468-c130-4f46-8952-ec5918a890b7.jpg'
        ],
        category: 'Accesorios',
        gender: 'nena',
        ageRange: '0-6 meses',
        use: ['regalo', 'día a día', 'ocasión especial'],
        isFeatured: true,
        benefits: ['No aprieta', 'Tela hipoalergénica', 'Talle único'],
        materials: ['Algodón elástico premium'],
        care: ['Lavar a mano'],
        productionTime: '2-3 días',
        guaranteeText: 'Ternura Garantizada',
        scarcityText: 'Ideal para combinar',
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
