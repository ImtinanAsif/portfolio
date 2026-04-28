const lenis = new Lenis()
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf)

const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.5, ease: "power2.out" });
});

gsap.registerPlugin(ScrollTrigger);

// Hero reveal
const tl = gsap.timeline();
tl.from(".reveal-text", { y: 200, skewY: 10, duration: 1.5, stagger: 0.2, ease: "power4.out" })
  .from(".nav", { opacity: 0, y: -20, duration: 1 }, "-=1");

// Cards entrance
gsap.from(".skill-card", {
    y: 100, opacity: 0, stagger: 0.2, duration: 1, ease: "power3.out",
    scrollTrigger: { trigger: ".card-grid", start: "top 80%" }
});

// Reels entrance
gsap.from(".reel-card", {
    y: 50, opacity: 0, stagger: 0.1, duration: 1,
    scrollTrigger: { trigger: ".reels-grid", start: "top 85%" }
});

/* ================= REEL HOVER PLAY LOGIC ================= */
const reelCards = document.querySelectorAll('.reel-card');

reelCards.forEach(card => {
    const video = card.querySelector('video');
    
    card.addEventListener('mouseenter', () => {
        video.play();
        gsap.to(cursor, { scale: 3, backgroundColor: "transparent", border: "1px solid #befb24" });
    });
    
    card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Optional: Reset to start
        gsap.to(cursor, { scale: 1, backgroundColor: "#befb24", border: "none" });
    });
});

// Contact Redirection
const form = document.getElementById('portfolio-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const message = document.getElementById('user-message').value;
    const subject = encodeURIComponent(`Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:your-email@gmail.com?subject=${subject}&body=${body}`;
});

// Button Cursor
const btn = document.querySelector('.send-btn');
btn.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 5, backgroundColor: "transparent", border: "1px solid #befb24" }));
btn.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, backgroundColor: "#befb24", border: "none" }));
