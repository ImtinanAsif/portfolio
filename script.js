/* ================= REACTIVE CANVAS BACKGROUND ================= */
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const mouse = { x: null, y: null };

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.01;
    }
    draw() {
        ctx.fillStyle = '#00f2ff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function animateBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Draw lines between particles
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                ctx.strokeStyle = `rgba(0, 242, 255, ${1 - distance/100})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    if (particles.length < 150) particles.push(new Particle());
    particles = particles.filter(p => p.size > 0.3);
    requestAnimationFrame(animateBackground);
}

init();
animateBackground();

/* ================= CURSOR REACTIVITY ================= */
const cursor = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3
    });
});

// Interactive Elements Hover
const links = document.querySelectorAll('a, .neon-card, .neon-btn');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(4)';
        cursor.style.background = '#ff00ea';
        cursor.style.boxShadow = '0 0 30px #ff00ea';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = '#00f2ff';
        cursor.style.boxShadow = '0 0 20px #00f2ff';
    });
});

/* ================= GSAP ENTRANCE ================= */
gsap.from(".hero-title", { opacity: 0, y: 100, duration: 1.5, delay: 0.5 });
gsap.from(".hero-subtext", { opacity: 0, x: -50, duration: 1, delay: 1 });
gsap.from(".neon-card", { 
    opacity: 0, 
    stagger: 0.2, 
    duration: 1, 
    scrollTrigger: ".services" 
});
