document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // When the page resizes or loads, refresh ScrollTrigger so markers/positions are correct
    window.addEventListener("load", () => ScrollTrigger.refresh());
    window.addEventListener("resize", () => ScrollTrigger.refresh());

    // ---------------- Custom Animations ----------------
    let videoWrapper = document.querySelector("#video-wrapper");
    
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
});
