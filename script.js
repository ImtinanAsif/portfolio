/* ****************** MOBILE MENU ********************* */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/* ****************** TYPED TEXT ANIMATION ********************* */
const typed = new Typed('#typed-text', {
    strings: ['Web Developer', 'Graphic Designer', 'Freelancer', 'Video Editor'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

/* ****************** SCROLL REVEAL ANIMATION ********************* */
const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-img', { origin: 'left' });
sr.reveal('.home-content p, .about-content', { origin: 'right' });

/* ****************** STICKY NAVBAR ********************* */
window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Remove menu icon on scroll
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
