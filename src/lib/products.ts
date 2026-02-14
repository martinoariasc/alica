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
}

export const products: Product[] = [
    {
        slug: 'mocasin-primer-paso-camel',
        name: 'Mocasín Classic Camel',
        emotionalName: 'Primer Paso Dorado',
        emotionalPhrase: 'El primer abrazo que sus pies van a recordar.',
        price: 120000,
        oldPrice: 150000,
        description:
            'El clásico que combina con todo. Nuestros mocasines en tono camel son el equilibrio perfecto entre estilo y comodidad. Hechos artesanalmente con tela de algodón suave que se adapta al pie de tu bebé, permitiendo el libre movimiento y desarrollo natural. Ideales para primeros pasos o para lucir elegante en cualquier ocasión.',
        shortDescription: 'Tela de algodón suave y flexible. El clásico infaltable.',
        images: [
            'https://images.unsplash.com/photo-1515488042361-ee0065af4151?q=80&w=2576&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop',
        ],
        category: 'Mocasines',
        gender: 'unisex',
        ageRange: '6-12 meses',
        use: ['primeros pasos', 'día a día'],
        isFeatured: true,
        benefits: [
            'Suela blanda antideslizante',
            'Elástico en tobillo para fácil calce',
            'Transpirables y ligeros',
        ],
        materials: ['100% Algodón Premium', 'Hilo de algodón reforzado'],
        care: ['Limpiar con paño húmedo', 'No lavar en lavarropas', 'Secar a la sombra'],
        productionTime: '2 a 3 días hábiles',
        guaranteeText: 'Si no te enamora, te devolvemos cada guaraní.',
        scarcityText: 'Solo 4 pares disponibles esta semana',
    },
    {
        slug: 'botita-flecos-rosa',
        name: 'Botita Flecos Rose',
        emotionalName: 'Dulce Amanecer',
        emotionalPhrase: 'Ternura tejida en cada fleco, amor cosido en cada puntada.',
        price: 135000,
        oldPrice: 165000,
        description:
            'Dulzura en cada paso. Estas botitas con detalles de flecos en color rosa pastel son pura ternura. Diseñadas para proteger el tobillo sin limitar el movimiento, son perfectas para los días más frescos. Su interior suave asegura que los piecitos estén siempre calentitos y cómodos.',
        shortDescription: 'Botitas con flecos y protección de tobillo. Pura ternura.',
        images: [
            'https://images.unsplash.com/photo-1560506840-a51081e1f371?q=80&w=2574&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1593453918093-8f3ee5239a56?q=80&w=2670&auto=format&fit=crop',
        ],
        category: 'Botitas',
        gender: 'nena',
        ageRange: '6-12 meses',
        use: ['primeros pasos', 'regalo'],
        isFeatured: true,
        benefits: [
            'Protección extra en tobillo',
            'Flecos decorativos artesanales',
            'Ideal para media estación',
        ],
        materials: ['Tela de algodón suave', 'Suela de tela reforzada'],
        care: ['Cepillar suavemente', 'Usar protector de gamuza'],
        productionTime: '3 a 4 días hábiles',
        guaranteeText: 'Garantía de sonrisa o te hacemos otro par.',
        scarcityText: 'Quedan solo 3 pares esta semana',
    },
    {
        slug: 'sandalia-sol-blanca',
        name: 'Sandalia Sol Blanca',
        emotionalName: 'Brisa de Verano',
        emotionalPhrase: 'Piecitos libres bailando bajo el sol.',
        price: 110000,
        oldPrice: 140000,
        description:
            'Frescura para el verano. Nuestras sandalias Sol en color blanco son esenciales para los días de calor. Con aberturas que permiten la circulación del aire y un cierre seguro que mantiene el piecito en su lugar. Un diseño atemporal y delicado para completar cualquier outfit veraniego.',
        shortDescription: 'Frescas y seguras para el verano. Diseño aireado.',
        images: [
            'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2674&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2669&auto=format&fit=crop',
        ],
        category: 'Sandalias',
        gender: 'nena',
        ageRange: '6-12 meses',
        use: ['día a día', 'ocasión especial'],
        isFeatured: true,
        benefits: [
            'Máxima frescura',
            'Cierre ajustable con velcro',
            'Puntera abierta para libertad de dedos',
        ],
        materials: ['Tela de lino de alta calidad', 'Forro de algodón'],
        care: ['Trapo húmedo con jabón neutro', 'No exponer al sol directo'],
        productionTime: '2 a 3 días hábiles',
        guaranteeText: 'Satisfacción garantizada o cambio sin preguntas.',
        scarcityText: 'Últimos 5 pares de la temporada',
    },
    {
        slug: 'oxford-baby-gris',
        name: 'Oxford Baby Gris',
        emotionalName: 'Pequeño Caballero',
        emotionalPhrase: 'La elegancia en miniatura para los momentos que importan.',
        price: 130000,
        oldPrice: 160000,
        description:
            'Elegancia en miniatura. Los Oxford Baby en gris son la opción perfecta para eventos especiales o para darle un toque sofisticado al look diario. Con cordones suaves que aseguran un ajuste personalizado y una horma ancha que respeta la anatomía del pie gordito del bebé.',
        shortDescription: 'Estilo sofisticado para ocasiones especiales.',
        images: [
            'https://images.unsplash.com/photo-1507963428588-aa84da934d6c?q=80&w=2670&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1582236353982-f54f76274465?q=80&w=2670&auto=format&fit=crop',
        ],
        category: 'Mocasines',
        gender: 'nene',
        ageRange: '6-12 meses',
        use: ['ocasión especial', 'regalo'],
        isFeatured: true,
        benefits: [
            'Estilo formal y cómodo',
            'Cordones para ajuste perfecto',
            'Suela flexible',
        ],
        materials: ['Lona de algodón premium', 'Cordones de algodón'],
        care: ['Limpiar en seco', 'Guardar en caja para mantener forma'],
        productionTime: '3 a 4 días hábiles',
        guaranteeText: 'Si no te enamora, te devolvemos cada guaraní.',
        scarcityText: 'Solo hacemos 5 pares por mes',
    },
    {
        slug: 'vincha-lazo-rosa',
        name: 'Vincha Lazo Rosa',
        emotionalName: 'Corona de Dulzura',
        emotionalPhrase: 'El detalle que completa la ternura.',
        price: 45000,
        oldPrice: 60000,
        description:
            'El complemento más dulce. Vincha elástica ultra suave con un lazo en color rosa. No aprieta ni marca la cabecita del bebé. Perfecta para combinar con nuestras botitas o mocasines y armar un set de regalo inolvidable.',
        shortDescription: 'Elástica y suave. El complemento perfecto.',
        images: [
            'https://images.unsplash.com/photo-1596704017254-9b1b1c3127dd?q=80&w=2522&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519417688547-61e5d5338ab0?q=80&w=2670&auto=format&fit=crop',
        ],
        category: 'Accesorios',
        gender: 'nena',
        ageRange: '0-6 meses',
        use: ['regalo', 'ocasión especial', 'día a día'],
        isFeatured: true,
        benefits: [
            'Elástico super soft que no marca',
            'Talle único (0-2 años)',
            'Hecho a mano',
        ],
        materials: ['Nylon elástico suave', 'Tela de algodón'],
        care: ['Lavar a mano', 'No planchar el lazo'],
        productionTime: '1 a 2 días hábiles',
        guaranteeText: 'Cambio sin preguntas si no te convence.',
        scarcityText: 'Quedan pocas unidades',
    },
    {
        slug: 'mocasin-marinero-azul',
        name: 'Mocasín Marinero Azul',
        emotionalName: 'Pequeño Explorador',
        emotionalPhrase: 'Para los que nacieron para descubrir el mundo.',
        price: 125000,
        oldPrice: 155000,
        description:
            'Aventura en cada paso. Los mocasines Marinero en azul profundo están pensados para los bebés exploradores que no paran. Su diseño clásico con un toque náutico los hace perfectos para cualquier ocasión. La suela flexible permite el agarre natural y la tela suave protege sin limitar.',
        shortDescription: 'Estilo náutico para pequeños aventureros.',
        images: [
            'https://images.unsplash.com/photo-1515488042361-ee0065af4151?q=80&w=2576&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop',
        ],
        category: 'Mocasines',
        gender: 'nene',
        ageRange: '6-12 meses',
        use: ['primeros pasos', 'día a día'],
        isFeatured: true,
        benefits: [
            'Suela de tela antideslizante',
            'Elástico oculto para calce fácil',
            'Interior de algodón orgánico',
        ],
        materials: ['Algodón teñido natural', 'Algodón orgánico'],
        care: ['Limpiar con paño suave', 'No usar productos químicos'],
        productionTime: '2 a 3 días hábiles',
        guaranteeText: 'Garantía de amor: si no te enamora, te hacemos otro.',
        scarcityText: 'Solo 3 pares esta semana',
    },
    {
        slug: 'botita-estrella-celeste',
        name: 'Botita Estrella Celeste',
        emotionalName: 'Noche de Luna',
        emotionalPhrase: 'Abrigando sueños desde los piecitos.',
        price: 140000,
        oldPrice: 170000,
        description:
            'Protección y calidez para los días fríos. Con un bordado de estrella artesanal que lo hace único, esta botita celeste envuelve el tobillo con cuidado. Su cierre lateral facilita ponerla y sacarla sin despertar al bebé dormido.',
        shortDescription: 'Botita abrigada con bordado artesanal de estrella.',
        images: [
            'https://images.unsplash.com/photo-1560506840-a51081e1f371?q=80&w=2574&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1593453918093-8f3ee5239a56?q=80&w=2670&auto=format&fit=crop',
        ],
        category: 'Botitas',
        gender: 'nene',
        ageRange: '0-6 meses',
        use: ['gateo', 'día a día'],
        isFeatured: false,
        benefits: [
            'Bordado artesanal exclusivo',
            'Cierre lateral práctico',
            'Forro interior de algodón',
        ],
        materials: ['Algodón aterciopelado', 'Bordado de hilo de algodón', 'Forro polar suave'],
        care: ['Cepillar con cepillo de gamuza', 'No mojar'],
        productionTime: '3 a 5 días hábiles',
        guaranteeText: 'Si no te enamora, te devolvemos cada guaraní.',
        scarcityText: 'Edición limitada: 8 pares por mes',
    },
    {
        slug: 'alpargatita-natura',
        name: 'Alpargatita Natura',
        emotionalName: 'Pasito Natural',
        emotionalPhrase: 'La naturaleza en cada pisada.',
        price: 95000,
        oldPrice: 120000,
        description:
            'Simplicidad y frescura inspiradas en la naturaleza. Nuestras alpargatitas son livianas como una pluma y perfectas para el día a día. Su diseño minimalista en tonos tierra combina con todo y la suela de yute natural ofrece una textura sensorial que estimula el desarrollo.',
        shortDescription: 'Livianas y naturales. Perfectas para el día a día.',
        images: [
            'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2674&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2669&auto=format&fit=crop',
        ],
        category: 'Alpargatitas',
        gender: 'unisex',
        ageRange: '1-2 años',
        use: ['primeros pasos', 'día a día'],
        isFeatured: false,
        benefits: [
            'Ultra livianas',
            'Suela de yute natural',
            'Estimulación sensorial',
        ],
        materials: ['Lona de algodón', 'Suela de yute tejido'],
        care: ['Lavar a mano con agua fría', 'Secar al aire'],
        productionTime: '2 a 3 días hábiles',
        guaranteeText: 'Cambio sin preguntas si no te convence.',
        scarcityText: 'Producimos pocos pares por semana',
    },
    {
        slug: 'sandalia-mariposa-rosa',
        name: 'Sandalia Mariposa Rosa',
        emotionalName: 'Vuelo de Mariposa',
        emotionalPhrase: 'Tan liviana como el primer suspiro de amor.',
        price: 115000,
        oldPrice: 145000,
        description:
            'Delicadeza que vuela. Estas sandalias con detalle de mariposa bordada traen la frescura del verano con un toque de fantasía. La tira ajustable asegura el piecito sin apretar, y el diseño abierto permite que respire en los días calurosos.',
        shortDescription: 'Frescura con un toque de fantasía para ella.',
        images: [
            'https://images.unsplash.com/photo-1596704017254-9b1b1c3127dd?q=80&w=2522&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519417688547-61e5d5338ab0?q=80&w=2670&auto=format&fit=crop',
        ],
        category: 'Sandalias',
        gender: 'nena',
        ageRange: '1-2 años',
        use: ['día a día', 'regalo'],
        isFeatured: true,
        benefits: [
            'Bordado de mariposa artesanal',
            'Tira ajustable con velcro',
            'Suela flexible y antideslizante',
        ],
        materials: ['Tela suave', 'Bordado de seda'],
        care: ['Limpiar con paño húmedo', 'No sumergir en agua'],
        productionTime: '3 a 4 días hábiles',
        guaranteeText: 'Garantía de satisfacción total.',
        scarcityText: 'Últimas 4 unidades disponibles',
    },
    {
        slug: 'mocasin-first-blanco',
        name: 'Mocasín First Blanco',
        emotionalName: 'Primer Recuerdo',
        emotionalPhrase: 'Porque el primer paso merece el par perfecto.',
        price: 110000,
        oldPrice: 135000,
        description:
            'El zapatito que inaugura su historia. Diseñado especialmente para los primeros pasitos inseguros, este mocasín en blanco puro es tan flexible que el bebé casi no siente que lo tiene puesto. Ideal para bautismos, baby showers o simplemente para ese primer paso que no querés olvidar.',
        shortDescription: 'El primer zapatito para el primer paso. Pureza total.',
        images: [
            'https://images.unsplash.com/photo-1515488042361-ee0065af4151?q=80&w=2576&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop',
        ],
        category: 'Mocasines',
        gender: 'unisex',
        ageRange: '0-6 meses',
        use: ['gateo', 'regalo', 'ocasión especial'],
        isFeatured: true,
        benefits: [
            'Suela ultra flexible',
            'Color blanco que combina con todo',
            'Ideal para bautismos y baby showers',
        ],
        materials: ['Algodón pima blanco premium', 'Forro de algodón orgánico'],
        care: ['Limpiar con paño blanco húmedo', 'Lavar a mano suavemente'],
        productionTime: '2 a 3 días hábiles',
        guaranteeText: 'Garantía de amor incondicional.',
        scarcityText: 'Solo 6 pares disponibles este mes',
    },
    {
        slug: 'set-regalo-princesa',
        name: 'Set Regalo Princesa',
        emotionalName: 'Cajita de Sueños',
        emotionalPhrase: 'Un regalo que se guarda en el corazón para siempre.',
        price: 175000,
        oldPrice: 220000,
        description:
            'El regalo perfecto para la nueva princesa. Este set incluye unas botitas rosa con flecos y una vincha lazo a juego, presentados en nuestra caja artesanal con papel de seda y tarjeta personalizable. Porque regalar ALICA es regalar un recuerdo eterno.',
        shortDescription: 'Botitas + vincha en caja artesanal. El regalo soñado.',
        images: [
            'https://images.unsplash.com/photo-1560506840-a51081e1f371?q=80&w=2574&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1593453918093-8f3ee5239a56?q=80&w=2670&auto=format&fit=crop',
        ],
        category: 'Accesorios',
        gender: 'nena',
        ageRange: '0-6 meses',
        use: ['regalo'],
        isFeatured: true,
        benefits: [
            'Set completo listo para regalar',
            'Caja artesanal de presentación',
            'Tarjeta personalizable incluida',
        ],
        materials: ['Algodón rosa suave', 'Nylon elástico para vincha', 'Caja de cartón reciclado'],
        care: ['Botitas: cepillar suavemente', 'Vincha: lavar a mano'],
        productionTime: '4 a 5 días hábiles',
        guaranteeText: 'Si no arranca una sonrisa, te devolvemos todo.',
        scarcityText: 'Edición limitada: solo 10 sets por mes',
    },
    {
        slug: 'botita-aventura-marron',
        name: 'Botita Aventura Marrón',
        emotionalName: 'Pasito Valiente',
        emotionalPhrase: 'Para los que se animan a explorar el mundo, un paso a la vez.',
        price: 140000,
        oldPrice: 175000,
        description:
            'Resistencia con ternura. Esta botita en marrón chocolate está pensada para los bebés más activos. Su suela reforzada ofrece tracción extra sin perder la flexibilidad que necesitan los piecitos en crecimiento. El cierre de velcro lateral hace que vestirlo sea un juego.',
        shortDescription: 'Para el bebé explorador. Resistencia y suavidad en un diseño.',
        images: [
            'https://images.unsplash.com/photo-1507963428588-aa84da934d6c?q=80&w=2670&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1582236353982-f54f76274465?q=80&w=2670&auto=format&fit=crop',
        ],
        category: 'Botitas',
        gender: 'nene',
        ageRange: '1-2 años',
        use: ['primeros pasos', 'día a día'],
        isFeatured: false,
        benefits: [
            'Suela reforzada con tracción',
            'Velcro lateral práctico',
            'Tobillo acolchado',
        ],
        materials: ['Lona reforzada', 'Suela de tela con grip'],
        care: ['Aplicar cera nutritiva mensualmente', 'Secar lejos del calor directo'],
        productionTime: '3 a 5 días hábiles',
        guaranteeText: 'Si no te enamora, te devolvemos cada guaraní.',
        scarcityText: 'Apenas 5 pares disponibles',
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
