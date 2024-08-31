window.addEventListener('load', () => {
    gsap.to('.logo-gif', { duration: 2, opacity: 0.7, ease: 'power2.inOut' });
    
    gsap.from('h1', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.5 });
    gsap.from('p', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.8 });
    gsap.from('.cta-button', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 1.1 });
});