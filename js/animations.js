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

    // Animate social section
    gsap.from('.social-section', { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: 'power3.out',
        delay: 2.5
    });

    // Animate social links
    gsap.from('.social-links a', { 
        duration: 0.5, 
        scale: 0,
        opacity: 0, 
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 3
    });

    // Global hover animation for buttons and social links
    gsap.utils.toArray('.cta-button, .social-links a').forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(element, { 
                duration: 0.3, 
                scale: 1.1, 
                color: '#ffffff',
                backgroundColor: 'rgba(0, 255, 255, 0.3)',
                boxShadow: '0 0 20px #00ffff'
            });
        });
        element.addEventListener('mouseleave', () => {
            gsap.to(element, { 
                duration: 0.3, 
                scale: 1, 
                color: element.classList.contains('cta-button') ? '#00ffff' : '#ffffff',
                backgroundColor: 'rgba(0, 255, 255, 0.1)',
                boxShadow: 'none'
            });
        });
    });

    // Parallax effect for background
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        gsap.to('.background', {
            duration: 1,
            x: xAxis,
            y: yAxis,
            ease: 'power1.out'
        });
    });
});