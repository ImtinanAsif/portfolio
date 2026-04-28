/* ... Lenis and Cursor logic remains same ... */

// 4. REEL HOVER-PLAY ENGINE (Refined)
const reels = document.querySelectorAll('.reel-item');

reels.forEach(reel => {
    const vid = reel.querySelector('video');
    
    // Play on Hover
    reel.addEventListener('mouseenter', () => {
        const playPromise = vid.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Auto-play prevented/failed:", error);
            });
        }
    });

    // Pause on Leave
    reel.addEventListener('mouseleave', () => {
        vid.pause();
        vid.currentTime = 0;
    });

    // Mobile Support: Auto-play when they enter the viewport
    ScrollTrigger.create({
        trigger: reel,
        start: "top 80%",
        onEnter: () => {
            if (window.innerWidth < 768) vid.play();
        },
        onLeaveBack: () => {
            if (window.innerWidth < 768) vid.pause();
        }
    });
});

/* ... GSAP Entrance and Contact Logic remains same ... */
