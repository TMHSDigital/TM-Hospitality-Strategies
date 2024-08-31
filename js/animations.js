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
    gsap.from('.social-links', { 
        duration: 1, 
        x: 50, 
        opacity: 0, 
        ease: 'power3.out',
        delay: 2
    });

    // Global button hover animation
    gsap.utils.toArray('a, button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, { 
                duration: 0.3, 
                scale: 1.05, 
                backgroundColor: 'rgba(0, 255, 255, 0.3)', 
                boxShadow: '0 0 20px #00ffff',
                color: '#ffffff'
            });
        });
        button.addEventListener('mouseleave', () => {
            gsap.to(button, { 
                duration: 0.3, 
                scale: 1, 
                backgroundColor: 'rgba(0, 255, 255, 0.1)', 
                boxShadow: 'none',
                color: '#00ffff'
            });
        });
    });
});