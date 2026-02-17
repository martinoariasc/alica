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

export type Category = 'Línea Respetuosa' | 'Botitas con Alma' | 'Sandalias' | 'Alpargatitas' | 'Accesorios' | 'Ediciones Especiales';
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
        slug: 'botita-montana-nene-miel',
        name: 'Botita Montaña Miel',
        emotionalName: 'Pasos Firmes',
        emotionalPhrase: 'Protección y estilo para sus primeras aventuras.',
        price: 195000,
        oldPrice: 230000,
        description: 'Botitas en tono miel con cordones elásticos. Diseñadas para brindar soporte sin limitar el movimiento natural del tobillo.',
        shortDescription: 'Botita urbana en color miel.',
        images: [
            '/images/products/nenes/2/1.jpg',
            '/images/products/nenes/2/16babfbd-8729-4686-b4fd-ff99d815d52c.jpg',
            '/images/products/nenes/2/46342ef0-a398-4104-a5cb-d14eeab11264.jpg',
            '/images/products/nenes/2/827e6b75-1504-4751-a8ab-3a8bf9b507f7.jpg',
            '/images/products/nenes/2/8be0d516-19d6-45f6-abc6-7ee6200da3ba.jpg'
        ],
        category: 'Botitas con Alma',
        gender: 'nene',
        ageRange: '6-12 meses',
        use: ['día a día', 'primeros pasos'],
        isFeatured: true,
        benefits: ['Suela ultra-flexible', 'Fácil de calzar', 'Ajuste seguro'],
        materials: ['Material sintético eco', 'Algodón'],
        care: ['Limpiar con paño húmedo'],
        productionTime: '7-10 días',
        guaranteeText: 'Hecho con Amor',
        scarcityText: '¡Últimos pares!',
    },
    {
        slug: 'mocasin-classic-nene-marino',
        name: 'Mocasín Classic Azul Marino',
        emotionalName: 'Pequeño Capitán',
        emotionalPhrase: 'Un clásico eterno para sus momentos de gala.',
        price: 185000,
        oldPrice: 220000,
        description: 'Mocasín en azul marino profundo. La elegancia clásica combinada con la tecnología de calzado respetuoso ALICA.',
        shortDescription: 'Mocasín azul marino elegante.',
        images: [
            '/images/products/nenes/3/1.png',
            '/images/products/nenes/3/35938f31-3d22-4327-8fc0-230317b5ebac.png',
            '/images/products/nenes/3/7ab99723-e6df-4fe7-b255-a01f8bd7061d.png',
            '/images/products/nenes/3/89bdeca1-b855-4f77-8798-a407f7959f80.png',
            '/images/products/nenes/3/db8f1a2e-010b-4d2f-8f10-f04ed75eb377.png'
        ],
        category: 'Línea Respetuosa',
        gender: 'nene',
        ageRange: '1-2 años',
        use: ['ocasión especial', 'regalo'],
        isFeatured: true,
        benefits: ['Ergonomía superior', 'Piel protegida', 'Diseño versátil'],
        materials: ['Cuero sintético premium', 'Interiores suaves'],
        care: ['Limpiar con paño ligeramente húmedo'],
        productionTime: '7-10 días',
        guaranteeText: 'Costura Invisible',
        scarcityText: 'Solo por pedido',
    },
    {
        slug: 'alpargatita-nene-gris-urbano',
        name: 'Alpargatita Gris Urbano',
        emotionalName: 'Libertad de Movimiento',
        emotionalPhrase: 'Frescura y comodidad para sus tardes de juego.',
        price: 165000,
        oldPrice: 195000,
        description: 'Alpargatitas de lona premium en color gris. El calzado más liviano y fresco para la temporada.',
        shortDescription: 'Alpargatita de lona gris.',
        images: [
            '/images/products/nenes/4/1.png',
            '/images/products/nenes/4/6b813f25-b344-4832-843d-042a612c8c51.png',
            '/images/products/nenes/4/6f3fb437-b40b-4fca-a874-d50d2a31f7ea.png',
            '/images/products/nenes/4/b1c432ee-6a42-44ef-9705-868207df3e86.png',
            '/images/products/nenes/4/f52525d6-d5db-493d-b68d-8ce0b07b512d.png'
        ],
        category: 'Alpargatitas',
        gender: 'nene',
        ageRange: '6-12 meses',
        use: ['día a día', 'gateo'],
        isFeatured: true,
        benefits: ['Frescara total', 'Peso pluma', 'Lavable'],
        materials: ['Lona de algodón', 'Suela de lona reforzada'],
        care: ['Lavar a mano con agua fría'],
        productionTime: '5-7 días',
        guaranteeText: 'Diseño liviano',
        scarcityText: 'Stock limitado',
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
    },
    {
        slug: 'capsula-bienestar-alica',
        name: 'Cápsula "Bienestar & Pasos"',
        emotionalName: 'Kit Cuidado Integral',
        emotionalPhrase: 'Tu primer paso hacia una maternidad acompañada y consciente.',
        price: 365000,
        oldPrice: 485000,
        description: 'La combinación perfecta de moda y conocimiento. Incluye: 1 par a elección + 1 Accesorio (Vincha o Baberito) + De Regalo: Nuestro Ebook exclusivo "50 Consejos para cuidar a tu bebé". Todo lo que necesitas para que crezca sano y con estilo.',
        shortDescription: 'Zapatito + Accesorio + Ebook de Regalo.',
        images: [
            '/images/products/nenes/1/d036d442-5186-4a03-a7bb-c52641120ac6.png',
            '/images/products/nenas/3/0c1ef560-6056-4a67-9f31-18657c222124.png'
        ],
        category: 'Ediciones Especiales',
        gender: 'unisex',
        ageRange: '6-12 meses',
        use: ['primeros pasos', 'regalo'],
        isFeatured: true,
        benefits: ['1 Par Premium', '1 Accesorio a elección', '🎁 Ebook: 50 Consejos (Gratis)', 'Packaging Boutique'],
        materials: ['Varios materiales premium'],
        care: ['Limpiar con amor'],
        productionTime: '2-4 días',
        guaranteeText: 'Calce Perfecto Garantizado',
        scarcityText: '¡Ideal para regalo!',
        isBestSeller: true,
    },
    {
        slug: 'plan-evolucion-feliz',
        name: 'Pack "Crecimiento Seguro"',
        emotionalName: 'Su Primer Año Asegurado',
        emotionalPhrase: 'Un talle a la vez, acompañando su desarrollo natural.',
        price: 480000,
        oldPrice: 750000,
        description: 'La solución definitiva al crecimiento rápido. Recibís 3 pares de diferentes talles (0-6m, 6-12m, 12-18m). + De Regalo: Ebook "50 Consejos para cuidar a tu bebé". Es la paz de saber que sus pies siempre estarán cuidados por expertos.',
        shortDescription: 'Tres pares esenciales para sus tres primeras etapas + Ebook.',
        images: [
            '/images/products/nenes/2/1.jpg',
            '/images/products/nenes/3/1.png',
            '/images/products/nenes/4/1.png'
        ],
        category: 'Ediciones Especiales',
        gender: 'unisex',
        ageRange: '0-6 meses',
        use: ['primeros pasos', 'gateo', 'día a día'],
        isFeatured: true,
        benefits: ['Plan de 3 Etapas', 'Precio anual congelado', '🎁 Ebook exclusivo incluido', 'Envío prioritario'],
        materials: ['Varios materiales premium'],
        care: ['Instrucciones según el modelo'],
        productionTime: 'Inmediata (primer envío)',
        guaranteeText: 'Plan Crecimiento ALICA',
        scarcityText: 'Solo 5 packs este mes',
        isBestSeller: true,
    },
    {
        slug: 'trio-ternura-y-cuento',
        name: 'Trío "Ternura & Aprendizaje"',
        emotionalName: 'Esenciales de Bienestar',
        emotionalPhrase: 'Accesorios que cuidan su piel y consejos que cuidan su vida.',
        price: 245000,
        oldPrice: 380000,
        description: 'Un kit de accesorios esenciales y sabiduría digital. Incluye: Pack de 3 Vinchas o 3 Baberitos + De Regalo: Ebook "50 Consejos para cuidar a tu bebé". El complemento perfecto para las mamás que valoran los detalles y el conocimiento.',
        shortDescription: 'Pack accesorios x3 + Ebook exclusivo.',
        images: [
            '/images/products/nenas/2/1.png',
            '/images/products/nenas/1/5d31ca92-990a-4fb4-9c02-e2570be0b2d6.png'
        ],
        category: 'Ediciones Especiales',
        gender: 'unisex',
        ageRange: '0-6 meses',
        use: ['regalo', 'día a día'],
        isFeatured: true,
        benefits: ['Pack de 3 Accesorios', 'Suavidad garantizada', '🎁 Ebook: 50 Consejos (Gratis)', 'Ahorro inmediato del 35%'],
        materials: ['Algodón / Seda / Elástico'],
        care: ['Lavar con agua fría'],
        productionTime: '2-3 días',
        guaranteeText: 'Calidad Premium ALICA',
        scarcityText: '¡Combo más buscado!',
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
