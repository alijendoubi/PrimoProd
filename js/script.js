// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initLoader();
    initNavigation();
    initScrollEffects();
    initPortfolioFilter();
    initTestimonials();
    initVideoModal();
    initContactForm();
    initNewsletterForm();
    initAnimationOnScroll();
    initBackToTop();
});

// Loading Screen
function initLoader() {
    const loadingScreen = document.getElementById('loading-screen');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500);
    });
}

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        });
    });

    // Sticky navigation
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll effects
function initScrollEffects() {
    // Hero section parallax effect
    const heroVideo = document.querySelector('.hero-video');
    const heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        if (heroVideo) {
            heroVideo.style.transform = `translateY(${parallax}px)`;
        }
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${parallax * 0.3}px)`;
        }
    });

    // Scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Portfolio filtering
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.remove('hide');
                    item.style.display = 'block';
                } else {
                    item.classList.add('hide');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Testimonials slider
function initTestimonials() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        // Hide all testimonials
        testimonialItems.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current testimonial
        if (testimonialItems[index]) {
            testimonialItems[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
        showTestimonial(currentTestimonial);
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextTestimonial);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevTestimonial);
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
        });
    });

    // Auto-play testimonials
    setInterval(nextTestimonial, 5000);
}

// Video modal functionality
function initVideoModal() {
    const videoModal = document.getElementById('video-modal');
    const modalVideo = document.querySelector('.modal-video source');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const portfolioBtns = document.querySelectorAll('.portfolio-btn');
    const playButtons = document.querySelectorAll('.play-button');

    function openModal(videoSrc) {
        if (modalVideo && videoModal) {
            modalVideo.src = videoSrc;
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Load and play video
            const video = document.querySelector('.modal-video');
            video.load();
        }
    }

    function closeModal() {
        if (videoModal) {
            videoModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Pause video
            const video = document.querySelector('.modal-video');
            video.pause();
            video.currentTime = 0;
        }
    }

    // Portfolio video buttons
    portfolioBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-src');
            if (videoSrc) {
                openModal(videoSrc);
            }
        });
    });

    // Play buttons (about section)
    playButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            if (videoSrc) {
                openModal(videoSrc);
            }
        });
    });

    // Close modal events
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            // Show loading state
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-block';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(this);
            
            // Try Firebase first, fallback to email if Firebase fails
            console.log('Attempting to submit to Firestore...');
            
            // Check if Firebase is initialized
            if (typeof firebase !== 'undefined' && typeof db !== 'undefined') {
                // Try Firebase first
                db.collection("contact_submissions").add({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message'),
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                }).then(() => {
                    // Success
                    console.log('Form submitted successfully to Firebase');
                    showNotification('Message sent successfully!', 'success');
                    this.reset();
                    btnText.style.display = 'inline-block';
                    btnLoading.style.display = 'none';
                    submitBtn.disabled = false;
                }).catch((error) => {
                    // Firebase failed, try email fallback
                    console.error('Firebase failed, trying email fallback:', error);
                    sendEmailFallback(formData, btnText, btnLoading, submitBtn, this);
                });
            } else {
                // Firebase not available, use email fallback
                console.log('Firebase not available, using email fallback');
                sendEmailFallback(formData, btnText, btnLoading, submitBtn, this);
            }
        });
    }

    // Form validation and styling
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });

        // Check initial values
        if (input.value.trim() !== '') {
            input.classList.add('has-value');
        }
    });
}

// Newsletter form functionality
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const emailInput = this.querySelector('input[type="email"]');
            const originalButtonContent = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Subscribing...</span>';
            submitBtn.disabled = true;
            
            // Validate email
            const email = emailInput.value.trim();
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                resetNewsletterButton(submitBtn, originalButtonContent);
                return;
            }
            
            // Simulate API call (replace with actual newsletter service)
            setTimeout(() => {
                // Success simulation
                showNotification('Successfully subscribed to our newsletter!', 'success');
                emailInput.value = '';
                resetNewsletterButton(submitBtn, originalButtonContent);
            }, 2000);
            
            // Uncomment below for actual implementation with Mailchimp, ConvertKit, etc.
            /*
            fetch('/api/newsletter-subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showNotification('Successfully subscribed to our newsletter!', 'success');
                    emailInput.value = '';
                } else {
                    showNotification(data.message || 'Subscription failed. Please try again.', 'error');
                }
            })
            .catch(error => {
                showNotification('Network error. Please try again.', 'error');
            })
            .finally(() => {
                resetNewsletterButton(submitBtn, originalButtonContent);
            });
            */
        });
    }
}

// Helper function to reset newsletter button
function resetNewsletterButton(button, originalContent) {
    button.innerHTML = originalContent;
    button.disabled = false;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Email fallback function
function sendEmailFallback(formData, btnText, btnLoading, submitBtn, form) {
    // Create email content
    const emailContent = `
        Name: ${formData.get('name')}
        Email: ${formData.get('email')}
        Subject: ${formData.get('subject')}
        Message: ${formData.get('message')}
    `;
    
    // Try EmailJS or simple mailto fallback
    const subject = `Contact Form: ${formData.get('subject')}`;
    const body = `Name: ${formData.get('name')}%0D%0AEmail: ${formData.get('email')}%0D%0ASubject: ${formData.get('subject')}%0D%0AMessage: ${formData.get('message')}`;
    const mailtoLink = `mailto:info@primoprod.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Simulate processing time
    setTimeout(() => {
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showNotification('Opening your email client. Please send the email to complete your message.', 'success');
        form.reset();
        
        // Reset button state
        btnText.style.display = 'inline-block';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
    }, 1000);
}

// Animation on scroll
function initAnimationOnScroll() {
    const animatedElements = document.querySelectorAll('.animate__animated');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                entry.target.style.animationDelay = entry.target.dataset.delay || '0s';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        element.style.visibility = 'hidden';
        observer.observe(element);
    });
}

// Back to top button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Notification system
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === 'success' ? '✓' : '✗'}
            </span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Utility functions
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimizations
const debouncedScrollHandler = debounce(function() {
    // Handle scroll events that don't need to run on every scroll
}, 100);

const throttledScrollHandler = throttle(function() {
    // Handle scroll events that need frequent updates
}, 16); // ~60fps

// Add optimized scroll listeners
window.addEventListener('scroll', debouncedScrollHandler);
window.addEventListener('scroll', throttledScrollHandler);

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'assets/primo-prod-logo.png',
        'assets/hero-video.mp4', // This will be loaded by the video element
        'assets/about-team.jpg'
    ];
    
    criticalImages.forEach(src => {
        if (src.endsWith('.mp4')) return; // Skip video files
        
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();

// Service Worker registration (for future PWA implementation)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Google Analytics (replace with your tracking ID)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_TRACKING_ID');

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send this to your analytics or error reporting service
});

// Intersection Observer for lazy loading (future enhancement)
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initLazyLoading();
