// 1. SMOOTH SCROLL (LENIS)
const lenis = new Lenis({ lerp: 0.08 })
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf)

// 2. MAGNETIC CURSOR
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power2.out" });
});

// Cursor Interactions
document.querySelectorAll('a, .service-row, .reel-item, .submit-btn, input, textarea').forEach(item => {
    item.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 6, backgroundColor: "transparent", border: "0.5px solid #befb24" }));
    item.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, backgroundColor: "#befb24", border: "none" }));
});

// 3. GSAP REVEALS
gsap.registerPlugin(ScrollTrigger);

// Hero Entrance
const tl = gsap.timeline();
tl.from(".reveal-text", { y: 200, skewY: 10, duration: 1.5, stagger: 0.2, ease: "power4.out" })
  .from(".nav", { opacity: 0, y: -20, duration: 1 }, "-=1");

// Section Heading Fade
gsap.utils.toArray('.section-label').forEach(label => {
    gsap.from(label, { opacity: 0, width: 0, duration: 1.5, scrollTrigger: { trigger: label, start: "top 90%" } });
});

// 4. REEL HOVER-PLAY ENGINE
const reels = document.querySelectorAll('.reel-item');
reels.forEach(reel => {
    const vid = reel.querySelector('video');
    
    reel.addEventListener('mouseenter', () => {
        const playPromise = vid.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => { /* Prevent uncaught console errors */ });
        }
    });

    reel.addEventListener('mouseleave', () => {
        vid.pause();
        vid.currentTime = 0;
    });

    // Mobile Autoplay
    ScrollTrigger.create({
        trigger: reel,
        start: "top 80%",
        onEnter: () => { if(window.innerWidth < 768) vid.play(); },
        onLeaveBack: () => { if(window.innerWidth < 768) vid.pause(); }
    });
});

// 5. CONTACT FORM REDIRECTION
const form = document.getElementById('portfolio-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const msg = document.getElementById('user-message').value;
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`Client: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
    window.location.href = `mailto:your-email@gmail.com?subject=${subject}&body=${body}`;
});
