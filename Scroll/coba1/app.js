gsap.registerPlugin(ScrollTrigger);

gsap.to(".square",{
    x: "70vw",
    // duration: 3,
    scrollTrigger: {
        trigger : ".square",
        start : "top 80%",
        // end : ()=> `+=${document.querySelector(".square").offsetHeight}`,
        end : "top 20%",
        scrub:1,
        toggleActions: "restart none none none",
        //              play pause reverve restart reset complete none
        //              onEnter onLeave OnEnterBack onLeaveBack
        markers : {
            fontSize :"3rem",
        },
        toggleClass : "red"
    }
})

