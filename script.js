// ========================================
// Lightbox Gallery
// ========================================

const galleryImages = [
    {
        src: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/art-1867154_1280.jpg',
        caption: 'Artesanato Local - Peças únicas produzidas por artesãos de Curvelo'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2016/11/22/19/08/band-1850801_1280.jpg',
        caption: 'Música Tradicional - Sons que embalam nossa cultura'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2017/08/01/00/38/man-2563447_1280.jpg',
        caption: 'Arte Visual - Expressões artísticas locais'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_1280.jpg',
        caption: 'Gastronomia - Sabores autênticos de Minas'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2016/11/22/19/25/crowd-1850119_1280.jpg',
        caption: 'Festividades - Celebrações que unem nossa comunidade'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2016/11/29/03/35/architecture-1867187_1280.jpg',
        caption: 'Patrimônio Histórico - Arquitetura e história preservadas'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2016/11/23/15/32/audience-1853662_1280.jpg',
        caption: 'Artes Cênicas - Teatro e dança tradicional'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg',
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
