// =========================
// LENIS SMOOTH SCROLL
// =========================
const lenis = new Lenis({ lerp: 0.08 });

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// =========================
// CURSOR (FIXED)
// =========================
const cursor = document.querySelector('.cursor');

if (cursor) {

window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 6,
        y: e.clientY - 6,
        duration: 0.25,
        ease: "power2.out"
    });
});

document.querySelectorAll('a, .service-row, .reel-item, input, textarea, button')
.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 6,
            backgroundColor: "transparent",
            border: "1px solid #befb24"
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "#befb24",
            border: "none"
        });
    });
});

}

// =========================
// GSAP BASIC ANIMATIONS
// =========================
gsap.registerPlugin(ScrollTrigger);

// HERO TEXT
gsap.from(".reveal-text", {
    y: 150,
    skewY: 10,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out"
});

// NAV
gsap.from(".nav", {
    opacity: 0,
    y: -20,
    duration: 1
});

// =========================
// PROFILE IMAGE
// =========================
const profile = document.querySelector(".profile-img");

if (profile) {

gsap.from(profile, {
    scale: 0,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});

profile.addEventListener("mouseenter", () => {
    gsap.to(profile, {
        scale: 1.08,
        boxShadow: "0 0 50px #befb24",
        duration: 0.4
    });
});

profile.addEventListener("mouseleave", () => {
    gsap.to(profile, {
        scale: 1,
        boxShadow: "0 0 0px #befb24",
        duration: 0.4
    });
});

}

// =========================
// BUTTON SWIPE ANIMATIONS (FIXED)
// =========================

// PORTFOLIO BUTTON (BLACK → LIME SWIPE)
const portfolioBtn = document.querySelector(".portfolio-btn");

if (portfolioBtn) {

portfolioBtn.addEventListener("mouseenter", () => {
    gsap.to(portfolioBtn, {
        color: "#000",
        duration: 0.3
    });

    gsap.to(portfolioBtn.querySelector(".btn-hover-layer"), {
        left: "0%",
        duration: 0.5,
        ease: "power3.out"
    });
});

portfolioBtn.addEventListener("mouseleave", () => {
    gsap.to(portfolioBtn, {
        color: "#befb24",
        duration: 0.3
    });

    gsap.to(portfolioBtn.querySelector(".btn-hover-layer"), {
        left: "-100%",
        duration: 0.5,
        ease: "power3.in"
    });
});

}

// SEND REQUEST BUTTON (LIME → BLACK SWIPE)
const sendBtn = document.querySelector(".submit-btn");

if (sendBtn) {

sendBtn.addEventListener("mouseenter", () => {
    gsap.to(sendBtn, {
        color: "#befb24",
        duration: 0.3
    });

    gsap.to(sendBtn.querySelector(".btn-hover-layer"), {
        left: "0%",
        duration: 0.5,
        ease: "power3.out"
    });
});

sendBtn.addEventListener("mouseleave", () => {
    gsap.to(sendBtn, {
        color: "#000",
        duration: 0.3
    });

    gsap.to(sendBtn.querySelector(".btn-hover-layer"), {
        left: "-100%",
        duration: 0.5,
        ease: "power3.in"
    });
});

}

// =========================
// SCROLL LABELS
// =========================
gsap.utils.toArray(".section-label").forEach(label => {
    gsap.from(label, {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: label,
            start: "top 90%"
        }
    });
});
