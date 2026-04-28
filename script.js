// 1. LENIS SMOOTH SCROLL
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// 2. MAGNETIC CURSOR
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out"
    });
});

// Cursor Interactions
document.querySelectorAll('a, .project-card, .big-cta, .timeline-row').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 5, backgroundColor: "transparent", border: "0.5px solid #d4ff00" });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, backgroundColor: "#d4ff00", border: "none" });
    });
});

// 3. GSAP REVEALS
gsap.registerPlugin(ScrollTrigger);

// Hero Reveal
const tl = gsap.timeline();
tl.from(".reveal-text", {
    y: 200, skewY: 7, duration: 1.5, stagger: 0.2, ease: "power4.out"
}).from(".nav", { opacity: 0, y: -20, duration: 1 }, "-=1");

// Section Heading Reveal
gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header, {
        width: 0, opacity: 0, duration: 1.5, ease: "power4.out",
        scrollTrigger: { trigger: header, start: "top 90%" }
    });
});

// Image Parallax Effect
gsap.utils.toArray('.img-reveal img').forEach(img => {
    gsap.to(img, {
        yPercent: 15, ease: "none",
        scrollTrigger: { trigger: img, scrub: true }
    });
});

// Big CTA Color Interaction
const cta = document.querySelector('.big-cta');
cta.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY, target } = e;
    const { clientWidth, clientHeight } = target;
    const xPos = (offsetX / clientWidth) - 0.5;
    const yPos = (offsetY / clientHeight) - 0.5;
    
    gsap.to(cta, {
        rotationY: xPos * 20,
        rotationX: -yPos * 20,
        duration: 0.5
    });
});
