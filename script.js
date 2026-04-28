// 1. LENIS SMOOTH SCROLL
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// 2. CURSOR
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.5, ease: "power2.out" });
});

// 3. GSAP REVEALS
gsap.registerPlugin(ScrollTrigger);

// Hero Reveal
const tl = gsap.timeline();
tl.from(".reveal-text", { y: 200, skewY: 10, duration: 1.5, stagger: 0.2, ease: "power4.out" })
  .from(".nav", { opacity: 0, y: -20, duration: 1 }, "-=1");

// Card Entrance
gsap.from(".skill-card", {
    y: 100, opacity: 0, stagger: 0.2, duration: 1, ease: "power3.out",
    scrollTrigger: { trigger: ".card-grid", start: "top 80%" }
});

// Form Entrance
gsap.from(".contact-form > *", {
    x: 50, opacity: 0, stagger: 0.1, duration: 1,
    scrollTrigger: { trigger: ".contact-form", start: "top 80%" }
});

// 4. GMAIL REDIRECTION LOGIC
const form = document.getElementById('portfolio-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const message = document.getElementById('user-message').value;
    
    // Build Gmail Link
    const subject = encodeURIComponent(`Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // Redirects to Gmail App/Web
    window.location.href = `mailto:your-email@gmail.com?subject=${subject}&body=${body}`;
});

// 5. BUTTON ANIMATION
const btn = document.querySelector('.send-btn');
btn.addEventListener('mouseenter', () => {
    gsap.to(cursor, { scale: 5, backgroundColor: "transparent", border: "1px solid #befb24" });
});
btn.addEventListener('mouseleave', () => {
    gsap.to(cursor, { scale: 1, backgroundColor: "#befb24", border: "none" });
});
