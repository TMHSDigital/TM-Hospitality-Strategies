document.addEventListener('DOMContentLoaded', () => {
    // Fade in background
    gsap.to('.background', { duration: 2, opacity: 1, ease: 'power2.inOut' });

    // Animate logo
    gsap.from('.logo', { 
        duration: 1, 
        y: -50, 
        opacity: 0, 
        ease: 'power3.out',
        delay: 0.5
    });

    // Animate main content
    const tl = gsap.timeline({ delay: 1 });
    tl.from('h1', { duration: 1, y: 50, opacity: 0, ease: 'power3.out' })
      .from('p', { duration: 1, y: 50, opacity: 0, ease: 'power3.out' }, '-=0.5')
      .from('.cta-button', { duration: 1, y: 50, opacity: 0, ease: 'power3.out' }, '-=0.5');

    // Animate social links
    gsap.from('.social-links a', { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        stagger: 0.2,
        ease: 'power3.out',
        delay: 2
    });

    // Global button hover animation
    gsap.utils.toArray('.cta-button, .social-links a').forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(element, { 
                duration: 0.3, 
                scale: 1.1, 
                color: '#ffffff',
                textShadow: '0 0 10px #00ffff'
            });
        });
        element.addEventListener('mouseleave', () => {
            gsap.to(element, { 
                duration: 0.3, 
                scale: 1, 
                color: element.classList.contains('cta-button') ? '#00ffff' : '#ffffff',
                textShadow: 'none'
            });
        });
    });
});