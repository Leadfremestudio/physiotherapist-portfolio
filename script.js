document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // When the page resizes or loads, refresh ScrollTrigger so markers/positions are correct
    window.addEventListener("load", () => ScrollTrigger.refresh());
    window.addEventListener("resize", () => ScrollTrigger.refresh());

    // ---------------- Helper for Text Reveal ----------------
    function splitTextIntoWords(element) {
        if (!element) return;
        const text = element.innerText;
        element.innerHTML = '';
        const words = text.split(/\s+/);
        
        words.forEach((word) => {
            if (word.trim() === '') return;
            // 1. Create a wrapper that hides overflow (acting as the mask)
            const wrapper = document.createElement('span');
            wrapper.style.display = 'inline-block';
            wrapper.style.overflow = 'hidden';
            wrapper.style.verticalAlign = 'bottom';
            wrapper.style.marginRight = '0.25em'; // Space between words
            
            // 2. Create the inner element that will animate up
            const inner = document.createElement('span');
            inner.innerText = word;
            inner.style.display = 'inline-block';
            inner.classList.add('reveal-word');
            
            wrapper.appendChild(inner);
            element.appendChild(wrapper);
        });
    }

    // ---------------- Hero Timeline ----------------
    const heroTl = gsap.timeline();

    // 1. Fade in the navbar
    heroTl.from("nav", {
        y: -15,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });

    // 2. Text Reveal for H1
    const heroHeading = document.querySelector("h1");
    if (heroHeading) {
        splitTextIntoWords(heroHeading);
        heroTl.from(heroHeading.querySelectorAll('.reveal-word'), {
            y: "100%",
            duration: 1,
            stagger: 0.1,
            ease: "power4.out"
        }, "-=0.4");
    }

    // 3. Fade up paragraph and buttons
    const heroSubElements = document.querySelectorAll("h1 + p, .shrink-0");
    if (heroSubElements.length > 0) {
        heroTl.from(heroSubElements, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=0.6");
    }

    // ---------------- Custom Animations ----------------
    let videoWrapper = document.querySelector("#video-wrapper");
    
    // Animate video wrapper in initially
    if (videoWrapper) {
        heroTl.from(videoWrapper, {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.6");

        // Existing scroll scale logic
        gsap.to("#hero-video", {
            scale: () => window.innerWidth / videoWrapper.offsetWidth,
            borderRadius: "0px",
            ease: "none",
            scrollTrigger: {
                trigger: videoWrapper,
                start: "top 12%",
                end: "+=30%", 
                scrub: true,
                invalidateOnRefresh: true
            }
        });
    }

    // ---------------- Sections Reveal on Scroll ----------------
    // Exclude the hero section, target other main sections
    const sections = document.querySelectorAll("section:not(.pt-32)");
    
    sections.forEach((section) => {
        // Find major child blocks to stagger in
        const children = section.querySelectorAll(".grid > div, h2, h3, p, .flex-wrap");
        
        // Let's animate the whole section wrapper slightly, plus stagger children
        gsap.from(section, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Reveal when top is 80% down viewport
                toggleActions: "play none none reverse" 
            }
        });

        if (children.length > 0) {
            gsap.from(children, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }
    });

});
