gsap.registerPlugin(ScrollTrigger);

gsap.to(".square",{
    x: 500,
    // duration: 3,
    scrollTrigger: {
        trigger : ".square2",
        start : "top 80%",
        // end : ()=> `+=${document.querySelector(".square").offsetHeight}`,
        end : "top 20%",
        scrub:1,
        pin:".square",
        pinSpacing:false,
        // toggleActions: "restart none none none",
        //              play pause reverve restart reset complete none
        //              onEnter onLeave OnEnterBack onLeaveBack
        markers : {
            fontSize :"3rem",
        },
        toggleClass : "red"
    }
})

