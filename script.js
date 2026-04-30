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
// CURSOR FIXED
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

document.querySelectorAll('a, .service-row, .reel-item, .submit-btn, input, textarea, .portfolio-btn')
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
// GSAP SETUP
// =========================
gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION
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

// SECTION LABELS
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

// REELS PLAY
const reels = document.querySelectorAll(".reel-item");

reels.forEach(reel => {
    const vid = reel.querySelector("iframe");

    ScrollTrigger.create({
        trigger: reel,
        start: "top 80%",
        onEnter: () => {},
    });
});

// PROFILE ANIMATION
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

// CONTACT MAILTO
document.getElementById("portfolio-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    const msg = document.getElementById("user-message").value;

    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);

    window.location.href =
        `mailto:your-email@gmail.com?subject=${subject}&body=${body}`;
});
