gsap.registerPlugin(ScrollTrigger);

gsap.to(".square",{
    x: 500,
    duration: 3,
    scrollTrigger: {
        trigger : ".square",
        start : "top 50%",
        end : ()=> `+=${document.querySelector(".square").offsetHeight}`,
        markers : true,
        toggleClass : "red"
    }
})

