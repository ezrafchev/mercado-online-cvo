// ========================================
// Products Catalog Data
// ========================================

const PRODUCTS = [
    {
        id: 1,
        name: 'Vaso Cerâmico Tradicional',
        artist: 'Maria Silva',
        category: 'artesanato',
        categoryLabel: 'Artesanato',
        price: 85.00,
        image: 'images/artesanato.jpg',
        description: 'Peça única em cerâmica produzida à mão com técnica ancestral mineira.',
        rating: 5,
        reviews: 24
    },
    {
        id: 2,
        name: 'Cesto de Vime Artesanal',
        artist: 'Carmem Lima',
        category: 'artesanato',
        categoryLabel: 'Artesanato',
        price: 65.00,
        image: 'images/artesanato.jpg',
        description: 'Cesto tecido à mão com fibras naturais locais, resistente e belo.',
        rating: 5,
        reviews: 17
    },
    {
        id: 3,
        name: 'Aquarela — Paisagem Curvelana',
        artist: 'Ana Ferreira',
        category: 'arte',
        categoryLabel: 'Arte Visual',
        price: 250.00,
        image: 'images/arte.jpg',
        description: 'Aquarela original retratando a beleza das paisagens de Curvelo.',
        rating: 5,
        reviews: 8
    },
    {
        id: 4,
        name: 'Tela a Óleo — Festa do Rosário',
        artist: 'Ana Ferreira',
        category: 'arte',
        categoryLabel: 'Arte Visual',
        price: 380.00,
        originalPrice: 450.00,
        image: 'images/arte.jpg',
        description: 'Pintura a óleo retratando a tradicional Festa do Rosário de Curvelo.',
        rating: 5,
        reviews: 12
    },
    {
        id: 5,
        name: 'Álbum — Sons do Sertão',
        artist: 'João Santos',
        category: 'musica',
        categoryLabel: 'Música',
        price: 35.00,
        image: 'images/musica.jpg',
        description: 'Álbum com 12 faixas de música sertaneja raiz gravado em estúdio local.',
        rating: 4,
        reviews: 31
    },
    {
        id: 6,
        name: 'CD Viola Caipira — Raízes',
        artist: 'Grupo Raízes',
        category: 'musica',
        categoryLabel: 'Música',
        price: 30.00,
        image: 'images/musica.jpg',
        description: 'Música instrumental de viola caipira, preservando a tradição mineira.',
        rating: 5,
        reviews: 19
    },
    {
        id: 7,
        name: 'Poemas de Curvelo',
        artist: 'Coletivo Literário',
        category: 'literatura',
        categoryLabel: 'Literatura',
        price: 28.00,
        image: 'images/literatura.jpg',
        description: 'Antologia de poemas escritos por autores locais sobre a cidade.',
        rating: 5,
        reviews: 14
    },
    {
        id: 8,
        name: 'Histórias do Cerrado',
        artist: 'Clube do Livro CVO',
        category: 'literatura',
        categoryLabel: 'Literatura',
        price: 32.00,
        image: 'images/literatura.jpg',
        description: 'Contos e crônicas sobre a vida, natureza e gente do cerrado mineiro.',
        rating: 4,
        reviews: 22
    },
    {
        id: 9,
        name: 'Kit Doces Mineiros',
        artist: 'Dona Geralda',
        category: 'gastronomia',
        categoryLabel: 'Gastronomia',
        price: 45.00,
        image: 'images/gastronomia.jpg',
        description: 'Kit com 6 tipos de doces tradicionais mineiros feitos de forma artesanal.',
        rating: 5,
        reviews: 43
    },
    {
        id: 10,
        name: 'Queijo Artesanal Curado',
        artist: 'Fazenda Boa Vista',
        category: 'gastronomia',
        categoryLabel: 'Gastronomia',
        price: 38.00,
        image: 'images/gastronomia.jpg',
        description: 'Queijo minas artesanal curado por 60 dias, sabor e textura únicos.',
        rating: 5,
        reviews: 38
    },
    {
        id: 11,
        name: 'Ingresso — Espetáculo Folclore',
        artist: 'Grupo Teatral CVO',
        category: 'teatro',
        categoryLabel: 'Teatro',
        price: 40.00,
        image: 'images/teatro.jpg',
        description: 'Espetáculo de dança e teatro baseado em folclore e tradições mineiras.',
        rating: 5,
        reviews: 28
    },
    {
        id: 12,
        name: 'Workshop de Teatro',
        artist: 'Teatro Escola Curvelo',
        category: 'teatro',
        categoryLabel: 'Teatro',
        price: 80.00,
        image: 'images/teatro.jpg',
        description: 'Workshop intensivo de 8 horas com atores profissionais locais.',
        rating: 4,
        reviews: 9
    }
];

// ========================================
// Lightbox Gallery
// ========================================

// Fallback image for error handling
const IMAGE_FALLBACK_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1280' height='720' viewBox='0 0 1280 720'%3E%3Crect width='1280' height='720' fill='%236366f1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' fill='white'%3EImagem Cultural%3C/text%3E%3C/svg%3E`;

const galleryImages = [
    {
        src: 'images/artesanato.jpg',
        caption: 'Artesanato Local - Peças únicas produzidas por artesãos de Curvelo'
    },
    {
        src: 'images/musica.jpg',
        caption: 'Música Tradicional - Sons que embalam nossa cultura'
    },
    {
        src: 'images/arte.jpg',
        caption: 'Arte Visual - Expressões artísticas locais'
    },
    {
        src: 'images/gastronomia.jpg',
        caption: 'Gastronomia - Sabores autênticos de Minas'
    },
    {
        src: 'images/festividades.jpg',
        caption: 'Festividades - Celebrações que unem nossa comunidade'
    },
    {
        src: 'images/patrimonio.jpg',
        caption: 'Patrimônio Histórico - Arquitetura e história preservadas'
    },
    {
        src: 'images/teatro.jpg',
        caption: 'Artes Cênicas - Teatro e dança tradicional'
    },
    {
        src: 'images/literatura.jpg',
        caption: 'Literatura - Histórias e poesias locais'
    }
];

let currentLightboxIndex = 0;

function openLightbox(index) {
    // Validate index
    if (index < 0 || index >= galleryImages.length) return;
    
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightboxImage.src = galleryImages[index].src;
    lightboxCaption.textContent = galleryImages[index].caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function changeLightboxImage(direction) {
    currentLightboxIndex += direction;
    
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = galleryImages.length - 1;
    } else if (currentLightboxIndex >= galleryImages.length) {
        currentLightboxIndex = 0;
    }
    
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightboxImage.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImage.src = galleryImages[currentLightboxIndex].src;
        lightboxCaption.textContent = galleryImages[currentLightboxIndex].caption;
        lightboxImage.style.opacity = '1';
    }, 200);
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            changeLightboxImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeLightboxImage(1);
        }
    }
});

// Close lightbox when clicking outside the image
document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

// ========================================
// Cultural Stats Counter Animation
// ========================================

let statsAnimated = false;
const statsSection = document.querySelector('.cultural-stats');

function animateCulturalStats() {
    if (statsAnimated || !statsSection) return;
    
    const rect = statsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
        statsAnimated = true;
        
        const statBoxes = document.querySelectorAll('.stat-box');
        
        statBoxes.forEach((box, index) => {
            setTimeout(() => {
                const valueElement = box.querySelector('.stat-value');
                const targetValue = parseInt(valueElement.getAttribute('data-count'));
                
                if (isNaN(targetValue)) return;
                
                const duration = 2000;
                const steps = 60;
                const increment = targetValue / steps;
                let current = 0;
                let step = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    step++;
                    
                    if (step >= steps) {
                        valueElement.textContent = targetValue;
                        clearInterval(timer);
                    } else {
                        valueElement.textContent = Math.floor(current);
                    }
                }, duration / steps);
            }, index * 150);
        });
    }
}

// ========================================
// FAQ Toggle
// ========================================

function toggleFaq(element) {
    const wasActive = element.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // If the clicked item wasn't active, open it
    if (!wasActive) {
        element.classList.add('active');
    }
}

// ========================================
// Navigation
// ========================================

// Toggle mobile menu
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(l => l.classList.remove('active'));
            link?.classList.add('active');
        }
    });
}

// Navbar background on scroll
const navbar = document.getElementById('navbar');

function updateNavbar() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ========================================
// Scroll Animations
// ========================================

const animatedElements = document.querySelectorAll('[data-animate]');

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

let animationDelay = 0;
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const currentDelay = animationDelay;
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, currentDelay);
            animationDelay += 100;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animatedElements.forEach(element => {
    observer.observe(element);
});

// ========================================
// Smooth Scrolling
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const targetPosition = target.offsetTop - 70;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Parallax Effect for Hero Orbs
// ========================================

const orbs = document.querySelectorAll('.gradient-orb');

function parallaxOrbs() {
    const scrolled = window.pageYOffset;
    const limit = window.innerHeight;
    
    if (scrolled < limit) {
        orbs.forEach((orb, index) => {
            const speed = 0.3 + (index * 0.1);
            const yPos = scrolled * speed;
            orb.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// ========================================
// Mouse Move Effect (Subtle Parallax)
// ========================================

// Parallax configuration constants
const PARALLAX_BASE_SPEED = 0.5;
const PARALLAX_SPEED_INCREMENT = 0.2;
const PARALLAX_CONTENT_MULTIPLIER = 10;
const PARALLAX_ORB_MULTIPLIER = 20;

const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

if (hero && heroContent) {
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;
        
        heroContent.style.transform = `translate(${xPercent * PARALLAX_CONTENT_MULTIPLIER}px, ${yPercent * PARALLAX_CONTENT_MULTIPLIER}px)`;
        
        orbs.forEach((orb, index) => {
            const speed = PARALLAX_BASE_SPEED + (index * PARALLAX_SPEED_INCREMENT);
            orb.style.transform = `translate(${xPercent * PARALLAX_ORB_MULTIPLIER * speed}px, ${yPercent * PARALLAX_ORB_MULTIPLIER * speed}px)`;
        });
    });
    
    hero.addEventListener('mouseleave', () => {
        heroContent.style.transform = 'translate(0, 0)';
        orbs.forEach(orb => {
            orb.style.transform = 'translate(0, 0)';
        });
    });
}

// ========================================
// Product Card Tilt Effect
// ========================================

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========================================
// Statistics Counter Animation
// ========================================

const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

function animateCounters() {
    if (hasAnimated) return;
    
    const heroStats = document.querySelector('.hero-stats');
    if (!heroStats) return;
    
    const rect = heroStats.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
        hasAnimated = true;
        
        statNumbers.forEach(stat => {
            const text = stat.textContent;
            const number = parseInt(text);
            
            if (isNaN(number)) return;
            
            const suffix = text.replace(/[0-9]/g, '');
            const duration = 2000;
            const steps = 60;
            const increment = number / steps;
            let current = 0;
            let step = 0;
            
            const timer = setInterval(() => {
                current += increment;
                step++;
                
                if (step >= steps) {
                    stat.textContent = number + suffix;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + suffix;
                }
            }, duration / steps);
        });
    }
}

// ========================================
// Button Ripple Effect
// ========================================

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Add ripple styles dynamically
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple-animation 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Lazy Loading Images (if any are added later)
// ========================================

const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ========================================
// Image Error Handling
// ========================================

// Add error handling for all images with fallback
document.querySelectorAll('img').forEach(img => {
    // Using function() instead of arrow function so 'this' refers to the image element
    img.addEventListener('error', function() {
        this.src = IMAGE_FALLBACK_SVG;
        console.warn('Failed to load image:', this.src, 'Alt:', this.alt);
    });
});

// ========================================
// Scroll Progress Indicator
// ========================================

function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '3px';
    progressBar.style.background = 'linear-gradient(90deg, rgb(99, 102, 241), rgb(168, 85, 247))';
    progressBar.style.zIndex = '10000';
    progressBar.style.transition = 'width 0.1s ease';
    progressBar.id = 'scrollProgress';
    document.body.appendChild(progressBar);
}

function updateScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;
    
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    progressBar.style.width = scrollPercent + '%';
}

createScrollProgress();

// ========================================
// Performance Optimization
// ========================================

let ticking = false;
let lastScrollY = 0;

function handleScroll() {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateActiveLink();
            updateNavbar();
            parallaxOrbs();
            animateCounters();
            animateCulturalStats();
            updateScrollProgress();
            ticking = false;
        });
        
        ticking = true;
    }
}

// ========================================
// Event Listeners
// ========================================

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('resize', () => {
    updateActiveLink();
    updateNavbar();
});

// Initial calls
updateActiveLink();
updateNavbar();
animateCounters();
animateCulturalStats();
updateScrollProgress();

// ========================================
// Accessibility Enhancements
// ========================================

// Keyboard navigation for cards
const interactiveCards = document.querySelectorAll('.product-card, .about-card');

interactiveCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});

// Focus visible for keyboard users
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-user');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-user');
});

// Add focus styles for keyboard users
const focusStyle = document.createElement('style');
const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-rgb').trim() || '99, 102, 241';
focusStyle.textContent = `
    .keyboard-user *:focus {
        outline: 2px solid rgb(${primaryColor});
        outline-offset: 2px;
    }
`;
document.head.appendChild(focusStyle);

// ========================================
// Loading Animation
// ========================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero [data-animate]');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animated');
            }, index * 100);
        });
    }, 100);
});

// ========================================
// Easter Egg: Konami Code
// ========================================

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    // Add confetti or special effect
    const colors = [
        'rgb(99, 102, 241)',
        'rgb(168, 85, 247)',
        'rgb(236, 72, 153)',
        'rgb(34, 197, 94)',
        'rgb(251, 146, 60)'
    ];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 4000);
        }, i * 50);
    }
    
    // Add falling animation
    const fallAnimation = document.createElement('style');
    fallAnimation.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(fallAnimation);
    
    console.log('🎨 Easter egg activated! Obrigado por explorar nosso marketplace cultural! 🎉');
}

// ========================================
// Performance Monitoring (Development)
// ========================================

if (window.performance && console.table) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;
            
            console.log('🚀 Performance Metrics:');
            console.table({
                'Page Load Time': `${pageLoadTime}ms`,
                'Connect Time': `${connectTime}ms`,
                'Render Time': `${renderTime}ms`
            });
        }, 0);
    });
}

// ========================================
// Console Welcome Message
// ========================================

console.log(
    '%c🎨 Marketplace Cultural Curvelo',
    'font-size: 20px; font-weight: bold; background: linear-gradient(90deg, #6366f1, #a855f7); -webkit-background-clip: text; color: transparent;'
);
console.log(
    '%cDesenvolvido com ❤️ para a cultura de Curvelo',
    'font-size: 12px; color: #6366f1;'
);
console.log(
    '%cInteressado em ser nosso parceiro? Entre em contato!',
    'font-size: 12px; color: #666;'
);

// ========================================
// Security Utilities
// ========================================

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
}

function sanitizeInput(value) {
    if (value == null) return '';
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}

// ========================================
// Cart State Management
// ========================================

let cart = JSON.parse(localStorage.getItem('mcc_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('mcc_wishlist') || '[]');

function saveCart() {
    localStorage.setItem('mcc_cart', JSON.stringify(cart));
    updateCartBadge();
    renderCartItems();
}

function saveWishlist() {
    localStorage.setItem('mcc_wishlist', JSON.stringify(wishlist));
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
}

// ========================================
// Cart Drawer Functions
// ========================================

function openCart() {
    document.getElementById('cartDrawer').classList.add('open');
    document.getElementById('cartOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();
}

function closeCart() {
    document.getElementById('cartDrawer').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: productId, qty: 1 });
    }
    saveCart();
    showToast(`🛒 "${product.name}" adicionado ao carrinho`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    showToast('Item removido do carrinho', 'info');
}

function updateQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    saveCart();
}

function clearCart() {
    cart = [];
    saveCart();
}

function getCartTotal() {
    return cart.reduce((sum, item) => {
        const product = PRODUCTS.find(p => p.id === item.id);
        return sum + (product ? product.price * item.qty : 0);
    }, 0);
}

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderCartItems() {
    const listEl = document.getElementById('cartItemsList');
    const emptyEl = document.getElementById('cartEmpty');
    const footerEl = document.getElementById('cartFooterSection');
    const totalEl = document.getElementById('cartTotalAmount');
    if (!listEl) return;

    if (cart.length === 0) {
        listEl.innerHTML = '';
        emptyEl.style.display = 'flex';
        footerEl.style.display = 'none';
        listEl.style.display = 'none';
        return;
    }

    emptyEl.style.display = 'none';
    footerEl.style.display = 'flex';
    listEl.style.display = 'flex';

    listEl.innerHTML = cart.map(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        if (!product) return '';
        const eName = escapeHtml(product.name);
        const eArtist = escapeHtml(product.artist);
        const eImage = escapeHtml(product.image);
        return `
        <li class="cart-item" data-id="${product.id}">
            <div class="cart-item-image">
                <img src="${eImage}" alt="${eName}" loading="lazy">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name" title="${eName}">${eName}</div>
                <div class="cart-item-artist">${eArtist}</div>
                <div class="cart-item-price">${formatCurrency(product.price)}</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQty(${product.id}, -1)" aria-label="Diminuir">−</button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${product.id}, 1)" aria-label="Aumentar">+</button>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${product.id})" aria-label="Remover item" title="Remover">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                        <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
                    </svg>
                </button>
            </div>
        </li>`;
    }).join('');

    totalEl.textContent = formatCurrency(getCartTotal());
}

// ========================================
// Wishlist Functions
// ========================================

function toggleWishlist(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const idx = wishlist.indexOf(productId);
    if (idx === -1) {
        wishlist.push(productId);
        showToast(`❤️ "${product.name}" adicionado à lista de desejos`, 'info');
    } else {
        wishlist.splice(idx, 1);
        showToast(`"${product.name}" removido da lista de desejos`, 'info');
    }
    saveWishlist();
    // Update all wishlist buttons for this product
    document.querySelectorAll(`.product-wishlist-btn[data-id="${productId}"]`).forEach(btn => {
        const isWishlisted = wishlist.includes(productId);
        btn.textContent = isWishlisted ? '❤️' : '🤍';
        btn.classList.toggle('active', isWishlisted);
        btn.setAttribute('aria-label', isWishlisted ? 'Remover da lista de desejos' : 'Adicionar à lista de desejos');
    });
}

// ========================================
// Product Rendering & Filtering
// ========================================

let activeFilter = 'all';

function renderProducts(filter) {
    activeFilter = filter || 'all';
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const filtered = activeFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeFilter);

    grid.innerHTML = filtered.map(product => {
        const isWishlisted = wishlist.includes(product.id);
        const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
        const eName = escapeHtml(product.name);
        const eArtist = escapeHtml(product.artist);
        const eDesc = escapeHtml(product.description);
        const eCategoryLabel = escapeHtml(product.categoryLabel);
        const eImage = escapeHtml(product.image);
        const originalPriceHtml = product.originalPrice
            ? `<span class="product-price-original">${formatCurrency(product.originalPrice)}</span>`
            : '';
        return `
        <article class="product-card filter-animate-in" data-category="${product.category}" data-id="${product.id}">
            <div class="product-image">
                <img src="${eImage}" alt="${eName}" loading="lazy">
                <span class="product-category-badge">${eCategoryLabel}</span>
                <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}"
                    data-id="${product.id}"
                    onclick="toggleWishlist(${product.id})"
                    aria-label="${isWishlisted ? 'Remover da lista de desejos' : 'Adicionar à lista de desejos'}">${isWishlisted ? '❤️' : '🤍'}</button>
            </div>
            <div class="product-content">
                <div class="product-rating">
                    <span class="stars" aria-label="${product.rating} estrelas">${stars}</span>
                    <span class="count">(${product.reviews})</span>
                </div>
                <h3 class="product-title">${eName}</h3>
                <p class="product-artist">por ${eArtist}</p>
                <p class="product-description">${eDesc}</p>
                <div class="product-footer">
                    <div>
                        ${originalPriceHtml}
                        <span class="product-price">${formatCurrency(product.price)}</span>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})" aria-label="Adicionar ${eName} ao carrinho">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                        Adicionar
                    </button>
                </div>
            </div>
        </article>`;
    }).join('');
}

function initProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.filter);
        });
    });
    renderProducts('all');
}

// ========================================
// Toast Notification System
// ========================================

function showToast(message, type = 'success', duration = 3500) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        warning: '⚠️'
    };

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.success}</span>
        <span class="toast-message">${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ========================================
// Contact Form Handler
// ========================================

function submitContactForm(e) {
    e.preventDefault();
    const btn = document.getElementById('formSubmitBtn');
    const btnText = btn.querySelector('.btn-text');
    const btnLoading = btn.querySelector('.btn-loading');
    const btnIcon = btn.querySelector('.btn-icon');

    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-flex';
    btnIcon.style.display = 'none';
    btn.disabled = true;

    // Simulate form submission (2s delay)
    const formData = {
        name: sanitizeInput(document.getElementById('formName').value),
        email: sanitizeInput(document.getElementById('formEmail').value),
        phone: sanitizeInput(document.getElementById('formPhone').value),
        category: sanitizeInput(document.getElementById('formCategory').value),
        message: sanitizeInput(document.getElementById('formMessage').value),
        submittedAt: new Date().toISOString()
    };

    // Store in localStorage for demo
    const submissions = JSON.parse(localStorage.getItem('mcc_contacts') || '[]');
    submissions.push(formData);
    localStorage.setItem('mcc_contacts', JSON.stringify(submissions));

    setTimeout(() => {
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('formSuccess').style.display = 'flex';
        showToast('Mensagem enviada com sucesso! 🎉', 'success');
    }, 2000);
}

function resetContactForm() {
    document.getElementById('contactForm').reset();
    document.getElementById('contactForm').style.display = 'flex';
    document.getElementById('formSuccess').style.display = 'none';
    const btn = document.getElementById('formSubmitBtn');
    if (btn) {
        btn.querySelector('.btn-text').style.display = 'inline';
        btn.querySelector('.btn-loading').style.display = 'none';
        btn.querySelector('.btn-icon').style.display = 'inline';
        btn.disabled = false;
    }
}

// ========================================
// Checkout Functions
// ========================================

function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Seu carrinho está vazio', 'warning');
        return;
    }
    closeCart();
    buildCheckoutSummary();
    const modal = document.getElementById('checkoutModal');
    const overlay = document.getElementById('checkoutOverlay');
    modal.style.display = 'block';
    document.getElementById('checkoutOverlay').classList.add('active');
    requestAnimationFrame(() => {
        modal.classList.add('open');
        overlay.classList.add('active');
    });
    document.body.style.overflow = 'hidden';
    // Reset form state
    document.getElementById('checkoutForm').style.display = 'block';
    document.getElementById('checkoutSuccess').style.display = 'none';
}

function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    const overlay = document.getElementById('checkoutOverlay');
    modal.classList.remove('open');
    overlay.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 400);
    document.body.style.overflow = '';
}

function buildCheckoutSummary() {
    const el = document.getElementById('checkoutSummary');
    if (!el) return;
    const items = cart.map(item => {
        const p = PRODUCTS.find(prod => prod.id === item.id);
        if (!p) return '';
        return `<div class="checkout-summary-item"><span>${escapeHtml(p.name)} x${item.qty}</span><span>${formatCurrency(p.price * item.qty)}</span></div>`;
    }).join('');
    el.innerHTML = `<h4>Resumo do Pedido</h4>${items}<div class="checkout-summary-total"><span>Total</span><span>${formatCurrency(getCartTotal())}</span></div>`;
}

function completeCheckout(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type=submit]');
    btn.textContent = 'Processando... ⏳';
    btn.disabled = true;

    const orderData = {
        id: 'MCC-' + Date.now(),
        customer: {
            name: sanitizeInput(document.getElementById('checkoutName').value),
            email: sanitizeInput(document.getElementById('checkoutEmail').value),
            phone: sanitizeInput(document.getElementById('checkoutPhone').value),
            address: sanitizeInput(document.getElementById('checkoutAddress').value),
            payment: sanitizeInput(document.getElementById('checkoutPayment').value)
        },
        items: cart.map(item => {
            const p = PRODUCTS.find(prod => prod.id === item.id);
            return { id: item.id, name: p ? escapeHtml(p.name) : '', qty: item.qty, price: p ? p.price : 0 };
        }),
        total: getCartTotal(),
        date: new Date().toISOString()
    };

    const orders = JSON.parse(localStorage.getItem('mcc_orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('mcc_orders', JSON.stringify(orders));

    setTimeout(() => {
        document.getElementById('checkoutForm').style.display = 'none';
        document.getElementById('checkoutSuccess').style.display = 'block';
        cart = [];
        saveCart();
        showToast(`🎉 Pedido ${orderData.id} confirmado!`, 'success', 5000);
    }, 2000);
}

// ========================================
// Initialization
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initProductFilters();
    updateCartBadge();
    renderCartItems();

    // Keyboard support for cart/checkout
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const cartDrawer = document.getElementById('cartDrawer');
            const checkoutModal = document.getElementById('checkoutModal');
            if (cartDrawer && cartDrawer.classList.contains('open')) closeCart();
            if (checkoutModal && checkoutModal.classList.contains('open')) closeCheckout();
        }
    });
});

