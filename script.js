// 1. LENIS SMOOTH SCROLL (The "Expensive" Site Engine)
const lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// 2. MAGNETIC LIME CURSOR
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power2.out" });
});

// Cursor Interactions - Changes Color Glow
document.querySelectorAll('a, .service-row, .reel-item, .submit-btn, input, textarea').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 6, backgroundColor: "transparent", border: "0.5px solid #befb24", mixBlendMode: "normal" });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, backgroundColor: "#befb24", border: "none", mixBlendMode: "difference" });
    });
});

// 3. GSAP MOTION & REVEALS
gsap.registerPlugin(ScrollTrigger);

// Hero Reveal
const tl = gsap.timeline();
tl.from(".reveal-text", {
    y: 300, skewY: 15, duration: 1.8, stagger: 0.2, ease: "power4.out"
}).from(".nav", { opacity: 0, y: -20, duration: 1 }, "-=1");

// Section Heading Parallax
gsap.from(".hero-title", {
    yPercent: 30,
    scrollTrigger: { trigger: ".hero", scrub: true }
});

// Service Rows reveal
gsap.utils.toArray('.service-row').forEach(row => {
    gsap.from(row, {
        opacity: 0, x: -50, duration: 1,
        scrollTrigger: { trigger: row, start: "top 90%" }
    });
});

// 4. REEL HOVER-PLAY ENGINE
const reels = document.querySelectorAll('.reel-item');
reels.forEach(reel => {
    const vid = reel.querySelector('video');
    reel.addEventListener('mouseenter', () => vid.play());
    reel.addEventListener('mouseleave', () => {
        vid.pause();
        vid.currentTime = 0;
    });
});

// 5. FUNCTIONAL CONTACT REDIRECT
const form = document.getElementById('portfolio-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const msg = document.getElementById('user-message').value;
    
    const subject = encodeURIComponent(`URGENT: New Project Inquiry from ${name}`);
    const body = encodeURIComponent(`CLIENT NAME: ${name}\nCLIENT EMAIL: ${email}\n\nPROJECT VISION:\n${msg}`);
    
    window.location.href = `mailto:your-email@gmail.com?subject=${subject}&body=${body}`;
});
