window.addEventListener('load', () => {
    // Fade in background
    gsap.to('.background', { duration: 2, opacity: 1, ease: 'power2.inOut' });

    // Animate stars
    gsap.to('.star', { 
        duration: 2, 
        opacity: 0.8, 
        stagger: { amount: 3, from: "random" },
        repeat: -1,
        yoyo: true
    });

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

    // Hover animation for CTA button
    gsap.utils.toArray('.cta-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, { duration: 0.3, scale: 1.05, backgroundColor: 'rgba(0, 255, 255, 0.3)', boxShadow: '0 0 20px #00ffff' });
        });
        button.addEventListener('mouseleave', () => {
            gsap.to(button, { duration: 0.3, scale: 1, backgroundColor: 'rgba(0, 255, 255, 0.1)', boxShadow: 'none' });
        });
    });
});