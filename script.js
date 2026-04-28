/* ================= CUSTOM CURSOR LOGIC ================= */
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Cursor Hover Effect
const interactiveElements = document.querySelectorAll('a, .btn, i, .service-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '80px';
        cursorOutline.style.height = '80px';
        cursorOutline.style.backgroundColor = 'rgba(34, 211, 238, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});

/* ================= TYPED TEXT ================= */
new Typed('#typed-text', {
    strings: ['Web Engineer', 'Creative Designer', 'Motion Artist'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    cursorChar: '_'
});

/* ================= SCROLL REVEAL ================= */
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: true
});

sr.reveal('.welcome-tag, h1, .btn-group', { interval: 200 });
sr.reveal('.service-card', { interval: 150 });
sr.reveal('.home-img', { origin: 'right', scale: 0.8 });

/* ================= MAGNETIC EFFECT (Extra Credit) ================= */
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transform = `translate(0px, 0px)`;
    });
});
