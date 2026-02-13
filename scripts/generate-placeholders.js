const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, '../public/images/products');
const testimonialsDir = path.join(__dirname, '../public/images/testimonials');

const colors = {
    rose: '#F4C2C2',
    cream: '#F9F5F0',
    charcoal: '#333333',
    gold: '#D4AF37',
    white: '#FFFFFF',
};

const products = [
    { name: 'alpargatita-1.svg', text: 'Alpargatita Clásica 1', bg: colors.cream },
    { name: 'alpargatita-2.svg', text: 'Alpargatita Clásica 2', bg: colors.rose },
    { name: 'alpargatita-bordado-1.svg', text: 'Alpargatita Bordada 1', bg: colors.cream },
    { name: 'alpargatita-bordado-2.svg', text: 'Alpargatita Bordada 2', bg: colors.rose },
    { name: 'botita-1.svg', text: 'Botita Clásica 1', bg: colors.cream },
    { name: 'botita-2.svg', text: 'Botita Clásica 2', bg: colors.rose },
    { name: 'orejita-1.svg', text: 'Orejita Clásica 1', bg: colors.cream },
    { name: 'orejita-2.svg', text: 'Orejita Clásica 2', bg: colors.rose },
    { name: 'vincha-1.svg', text: 'Vincha Clásica', bg: colors.white },
    { name: 'vincha-especial-1.svg', text: 'Vincha Especial', bg: colors.cream },
    { name: 'pack-vinchas-1.svg', text: 'Pack 3 Vinchas', bg: colors.rose },
    { name: 'baberito-1.svg', text: 'Baberito Clásico', bg: colors.cream },
    { name: 'bandana-1.svg', text: 'Bandana Bebé', bg: colors.rose },
];

const testimonials = [
    { name: 'testimonial-1.svg', text: 'María F. (8 meses)', bg: colors.rose },
    { name: 'testimonial-2.svg', text: 'Carolina S. (10 meses)', bg: colors.cream },
    { name: 'testimonial-3.svg', text: 'Lucía M. (6 meses)', bg: colors.rose },
    { name: 'testimonial-4.svg', text: 'Valentina R. (1 año)', bg: colors.cream },
    { name: 'testimonial-5.svg', text: 'Sofía G. (Regalo)', bg: colors.rose },
    { name: 'testimonial-6.svg', text: 'Ana P. (4 meses)', bg: colors.cream },
];

function createSVG(text, bgColor, textColor = colors.charcoal) {
    return `<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="'Playfair Display', serif" font-size="48" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
  <rect x="50" y="50" width="700" height="700" fill="none" stroke="${colors.gold}" stroke-width="2" opacity="0.3"/>
</svg>`;
}

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

ensureDir(productsDir);
ensureDir(testimonialsDir);

console.log('Generating product images...');
products.forEach(p => {
    fs.writeFileSync(path.join(productsDir, p.name), createSVG(p.text, p.bg));
    console.log(`Created ${p.name}`);
});

console.log('Generating testimonial images...');
testimonials.forEach(t => {
    fs.writeFileSync(path.join(testimonialsDir, t.name), createSVG(t.text, t.bg));
    console.log(`Created ${t.name}`);
});

console.log('Done!');
