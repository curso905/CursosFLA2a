// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

// Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Modal functionality
function openModal(type) {
    let content = '';
    
    switch(type) {
        case 'demo':
            content = `
                <h2>Demo de Automatización con IA</h2>
                <div style="text-align: center; margin: 2rem 0;">
                    <div style="width: 100%; height: 300px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                        <i class="fas fa-play-circle" style="font-size: 4rem; margin-right: 1rem;"></i>
                        <span>Video Demo</span>
                    </div>
                </div>
                <p>Descubre cómo nuestros agentes de IA pueden automatizar tus procesos empresariales de manera eficiente y escalable.</p>
                <div style="margin-top: 2rem;">
                    <button class="btn btn-primary" onclick="openModal('contact')">
                        <i class="fas fa-paper-plane"></i>
                        Solicitar Demo Personalizado
                    </button>
                </div>
            `;
            break;
        case 'contact':
            content = `
                <h2>¡Comienza tu Transformación Digital!</h2>
                <p>Completa el formulario y nos pondremos en contacto contigo para personalizar tu experiencia de aprendizaje.</p>
                <form id="contact-form" style="margin-top: 2rem;">
                    <div style="margin-bottom: 1rem;">
                        <label for="name" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Nombre Completo</label>
                        <input type="text" id="name" name="name" required style="width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 1rem;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Correo Electrónico</label>
                        <input type="email" id="email" name="email" required style="width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 1rem;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label for="company" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Empresa</label>
                        <input type="text" id="company" name="company" style="width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 1rem;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label for="course" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Curso de Interés</label>
                        <select id="course" name="course" style="width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 1rem;">
                            <option value="">Selecciona un curso</option>
                            <option value="fundamentos">Fundamentos de IA para Emprendedores</option>
                            <option value="automatizacion">Automatización con Agentes IA</option>
                            <option value="optimizacion">Optimización de Procesos con IA</option>
                        </select>
                    </div>
                    <div style="margin-bottom: 2rem;">
                        <label for="message" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Mensaje (Opcional)</label>
                        <textarea id="message" name="message" rows="4" style="width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 1rem; resize: vertical;"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                        <i class="fas fa-paper-plane"></i>
                        Enviar Solicitud
                    </button>
                </form>
            `;
            break;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add form submission handler if it's a contact form
    if (type === 'contact') {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', handleFormSubmission);
        }
    }
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form submission handler
function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        modalBody.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <i class="fas fa-check-circle" style="font-size: 4rem; color: #10b981; margin-bottom: 1rem;"></i>
                <h2>¡Gracias por tu interés!</h2>
                <p>Hemos recibido tu solicitud. Uno de nuestros expertos se pondrá en contacto contigo en las próximas 24 horas.</p>
                <button class="btn btn-primary" onclick="modal.style.display='none'; document.body.style.overflow='auto';">
                    <i class="fas fa-check"></i>
                    Entendido
                </button>
            </div>
        `;
    }, 2000);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .course-card, .testimonial-card, .benefit-item, .stat-item');
    
    animatedElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
    
    // Add loading animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('loading');
        observer.observe(section);
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (target === 1000 ? '+' : '%');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (target === 1000 ? '+' : '%');
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const text = statNumber.textContent;
            const target = parseInt(text.replace(/[^0-9]/g, ''));
            
            animateCounter(statNumber, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        statsObserver.observe(item);
    });
});

// Parallax effect for floating cards
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        card.style.transform = `translateY(${yPos}px)`;
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Smooth reveal animation for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Add reveal animation styles
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Initialize reveal animations
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Add hover effects for course cards
document.addEventListener('DOMContentLoaded', () => {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add loading state for buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.classList.contains('btn-primary') && !this.disabled) {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 2000);
            }
        });
    });
});

// Add smooth scroll behavior for anchor links
document.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    revealOnScroll();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add preloader
window.addEventListener('load', () => {
    const preloader = document.createElement('div');
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    preloader.innerHTML = `
        <div style="text-align: center; color: white;">
            <i class="fas fa-robot" style="font-size: 4rem; margin-bottom: 1rem; animation: pulse 2s infinite;"></i>
            <h2>Fuerza Laboral Artificial</h2>
            <p>Cargando...</p>
        </div>
    `;
    
    document.body.appendChild(preloader);
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(preloader);
        }, 500);
    }, 1500);
});

// Add console welcome message
console.log(`
%c🤖 Fuerza Laboral Artificial %c
%cBienvenido a la página de cursos de automatización con IA
%c¿Listo para transformar tu negocio? 🚀

`, 
'color: #6366f1; font-size: 20px; font-weight: bold;',
'color: #8b5cf6; font-size: 16px;',
'color: #6b7280; font-size: 14px;',
'color: #10b981; font-size: 14px; font-weight: bold;'
); 