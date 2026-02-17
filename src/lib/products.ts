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

export type Category = 'Línea Respetuosa' | 'Botitas con Alma' | 'Sandalias' | 'Alpargatitas' | 'Accesorios' | 'Cubrepañales' | 'Ediciones Especiales' | 'Colección Bautismo';
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
        price: 150000,
        oldPrice: 195000,
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
        price: 150000,
        oldPrice: 195000,
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
        price: 135000,
        oldPrice: 175000,
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
        scarcityText: 'Pocas unidades',
    },
    {
        slug: 'cubrepanal-lino-natural',
        name: 'Cubrepañal Lino Natural',
        emotionalName: 'Suavidad que Envuelve',
        emotionalPhrase: 'La frescura del lino para la piel más delicada.',
        price: 95000,
        oldPrice: 120000,
        description: 'Cubrepañales confeccionados en lino de alta calidad, con elásticos suaves que no marcan su piel. Ideales para usar solos en verano o con medias en invierno. Un básico atemporal de la boutique.',
        shortDescription: 'Cubrepañal de lino artesanal.',
        images: [
            '/images/products/nenas/1/5d31ca92-990a-4fb4-9c02-e2570be0b2d6.png'
        ],
        category: 'Cubrepañales',
        gender: 'unisex',
        ageRange: '0-6 meses',
        use: ['día a día', 'ocasión especial'],
        isFeatured: false,
        benefits: ['Lino 100% respirable', 'Elásticos soft', 'Corte ergonómico'],
        materials: ['Lino', 'Algodón'],
        care: ['Lavar a mano con jabón neutro'],
        productionTime: '3-5 días',
        guaranteeText: 'Calidad Boutique',
        scarcityText: 'Hecho a mano',
    },
    {
        slug: 'zapatito-orejita-premium',
        name: 'Zapatito Orejita',
        emotionalName: 'Ternura en cada Paso',
        emotionalPhrase: 'Diseño lúdico y materiales nobles para su despertar al mundo.',
        price: 145000,
        oldPrice: 185000,
        description: 'Nuestro modelo más querido. El zapatito orejita combina la ergonomía del calzado respetuoso con un diseño encantador que enamora a todos.',
        shortDescription: 'Zapatito de cuero con detalle de orejitas.',
        images: [
            '/images/products/nenas/2/1.png'
        ],
        category: 'Línea Respetuosa',
        gender: 'unisex',
        ageRange: '6-12 meses',
        use: ['día a día', 'regalo'],
        isFeatured: true,
        benefits: ['Piel súper suave', 'Diseño lúdico', 'Calce anatómico'],
        materials: ['Cuero soft', 'Forro de algodón'],
        care: ['Limpiar con amor'],
        productionTime: '5-7 días',
        guaranteeText: 'Calidad ALICA',
        scarcityText: '¡El favorito de mamá!',
    },
    {
        slug: 'zapatito-bautismo-blanco-pureza',
        name: 'Zapatito Bautismo Blanco',
        emotionalName: 'Pureza Sagrada',
        emotionalPhrase: 'Para el día en que recibe la bendición más grande.',
        price: 165000,
        oldPrice: 210000,
        description: 'Diseñado especialmente para el sacramento del Bautismo. Cada puntada lleva la intención de honrar este momento único e irrepetible. Confeccionado en cuero blanco inmaculado, con suela ultra-suave que respeta sus primeros pasos hacia la fe. Un recuerdo que guardará para siempre.',
        shortDescription: 'Zapatito ceremonial para Bautismo.',
        images: [
            '/images/products/unisex/1/077af128-0170-4b78-9f31-02166a759043.png',
            '/images/products/unisex/1/935b3283-9d6c-4dfa-a9c5-be068fda942f.png',
            '/images/products/unisex/1/90c083ca-0c98-4ab5-896a-3f62a12c8895.jpg'
        ],
        category: 'Colección Bautismo',
        gender: 'unisex',
        ageRange: '0-6 meses',
        use: ['ocasión especial', 'regalo'],
        isFeatured: true,
        benefits: ['Blanco inmaculado', 'Suela ceremonial suave', 'Packaging especial para la ocasión', 'Certificado de autenticidad'],
        materials: ['Cuero premium blanco', 'Forro de seda'],
        care: ['Guardar como reliquia familiar'],
        productionTime: '7-10 días (hecho con devoción)',
        guaranteeText: 'Recuerdo Eterno',
        scarcityText: 'Edición Ceremonial',
        isBestSeller: true,
    },
    {
        slug: 'accesorios-alica-catalogo',
        name: 'Accesorios ALICA',
        emotionalName: 'Los Detalles que Enamoran',
        emotionalPhrase: 'Vinchas, Baberitos y Cubrepañales para completar su look con ternura.',
        price: 20000,
        oldPrice: 30000,
        description: 'Catálogo completo de accesorios ALICA. Elegí entre Vinchas Clásicas (20.000 Gs), Vinchas Especiales (30.000 Gs), Pack de 3 Vinchas (45.000 Gs), Baberitos/Bandanas (35.000 Gs) y Cubrepañales de Lino (95.000 Gs). Todos confeccionados a mano con materiales premium que cuidan la piel delicada de tu bebé.',
        shortDescription: 'Catálogo de accesorios premium.',
        images: ['/images/products/accesorios/Accesorios/f8fb2468-c130-4f46-8952-ec5918a890b7.jpg'],
        category: 'Accesorios',
        gender: 'unisex',
        ageRange: '0-6 meses',
        use: ['día a día', 'regalo', 'ocasión especial'],
        isFeatured: true,
        benefits: [
            '🎀 Vincha Clásica: 20.000 Gs',
            '👑 Vincha Especial: 30.000 Gs',
            '🎁 Pack x3 Vinchas: 45.000 Gs (ahorro)',
            '🤍 Baberito/Bandana: 35.000 Gs',
            '🤍 Cubrepañal Lino: 95.000 Gs'
        ],
        materials: ['Algodón orgánico', 'Lino', 'Seda', 'Elástico premium'],
        care: ['Lavar a mano con agua fría'],
        productionTime: 'Inmediata a 3 días',
        guaranteeText: 'Suavidad Garantizada',
        scarcityText: 'Stock disponible',
        isBestSeller: true,
    },
    {
        slug: 'set-primer-look-alica',
        name: 'Boutique Set "Primer Look"',
        emotionalName: 'Ajuar de sus Sueños',
        emotionalPhrase: 'Zapatitos + Cubrepañal + Vincha o Babero + Ebook de Regalo.',
        price: 265000,
        oldPrice: 395000,
        description: 'La solución completa para un outfit soñado y saludable. Incluye: 1 par de Zapatitos + 1 Cubrepañal de lino/algodón + 1 Vincha o Baberito a juego. + De Regalo: Ebook "50 Consejos para cuidar a tu bebé". Ideal para fotos, salidas o simplemente para verlo hermoso y cómodo.',
        shortDescription: 'Zapatito + Cubrepañal + Accesorio + Ebook de Regalo.',
        images: [
            '/images/products/nenas/3/0c1ef560-6056-4a67-9f31-18657c222124.png',
            '/images/products/nenes/1/d036d442-5186-4a03-a7bb-c52641120ac6.png'
        ],
        category: 'Ediciones Especiales',
        gender: 'unisex',
        ageRange: '0-6 meses',
        use: ['regalo', 'ocasión especial', 'día a día'],
        isFeatured: true,
        benefits: ['Outfit completo (3 piezas)', 'Materiales 100% naturales', '🎁 Ebook Exclusivo Gratis', 'Descuento especial por Set'],
        materials: ['Lino', 'Algodón', 'Cuero Premium'],
        care: ['Lavar prendas a mano', 'Limpiar calzado'],
        productionTime: '5-7 días',
        guaranteeText: 'Look Boutique Garantizado',
        scarcityText: '¡Solo 10 sets semanales!',
        isBestSeller: true,
    },
    {
        slug: 'plan-evolucion-feliz',
        name: 'Plan "Primeros Años Seguro"',
        emotionalName: 'Creciendo con Vos',
        emotionalPhrase: '3 pares estratégicos para sus 3 etapas de oro + Ebook Gratis.',
        price: 395000,
        oldPrice: 550000,
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
        name: 'Kit "Sabiduría & Estilo"',
        emotionalName: 'Mamá Experta',
        emotionalPhrase: 'Pack x3 Vinchas + Baberito + Ebook de Regalo.',
        price: 75000,
        oldPrice: 125000,
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
    },
    {
        slug: 'kit-primer-sacramento-bautismo',
        name: 'Kit "Primer Sacramento"',
        emotionalName: 'El Regalo que Trasciende',
        emotionalPhrase: 'Porque este día merece ser recordado con elegancia eterna.',
        price: 285000,
        oldPrice: 420000,
        description: 'El regalo perfecto para padrinos y familiares. Este kit ceremonial incluye: Zapatito Bautismo Blanco + Vincha Especial Blanca + Cubrepañal de Lino Natural + Packaging Premium con Tarjeta de Dedicatoria Personalizada + De Regalo: Ebook "50 Consejos para cuidar a tu bebé". Cada elemento ha sido seleccionado para honrar la pureza de este sacramento.',
        shortDescription: 'Kit completo ceremonial para Bautismo + Ebook.',
        images: [
            '/images/products/unisex/1/077af128-0170-4b78-9f31-02166a759043.png',
            '/images/products/unisex/1/935b3283-9d6c-4dfa-a9c5-be068fda942f.png'
        ],
        category: 'Colección Bautismo',
        gender: 'unisex',
        ageRange: '0-6 meses',
        use: ['ocasión especial', 'regalo'],
        isFeatured: true,
        benefits: [
            '✨ Zapatito Ceremonial Blanco',
            '👑 Vincha Especial incluida',
            '🤍 Cubrepañal de Lino Premium',
            '🎁 Ebook Exclusivo Gratis',
            '💌 Tarjeta personalizada para padrinos',
            '📦 Caja boutique con lazo de seda'
        ],
        materials: ['Cuero blanco', 'Lino', 'Seda', 'Algodón orgánico'],
        care: ['Conservar como recuerdo familiar'],
        productionTime: '10-14 días (preparación ceremonial)',
        guaranteeText: 'Bendición Garantizada',
        scarcityText: 'Solo 3 kits por mes',
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
