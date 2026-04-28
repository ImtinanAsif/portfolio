// 1. Initialize Lenis (Premium Smooth Scroll)
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// 2. Magnetic Cursor Logic
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
    });
});

// Interactive hover effect
document.querySelectorAll('a, .project-card').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 4, backgroundColor: "transparent", border: "1px solid #d4ff00" });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, backgroundColor: "#d4ff00", border: "none" });
    });
});

// 3. GSAP Entrance Animations
const tl = gsap.timeline();

// Text Reveal Animation
tl.from(".reveal-text", {
    y: 200,
    skewY: 10,
    duration: 1.5,
    stagger: 0.2,
    ease: "power4.out"
});

tl.from(".nav", {
    opacity: 0,
    y: -20,
    duration: 1
}, "-=1");

// 4. Scroll-Triggered Parallax for Projects
gsap.utils.toArray('.img-reveal img').forEach(img => {
    gsap.to(img, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});
