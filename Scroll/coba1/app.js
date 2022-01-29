gsap.registerPlugin(ScrollTrigger);

gsap.to(".square",{
    x: 500,
    duration: 3,
    scrollTrigger: {
        trigger : ".square",
        start : "top 50%",
        // end : ()=> `+=${document.querySelector(".square").offsetHeight}`,
        end : "center 20%",
        toggleActions: "restart pause resume complete",
        //              play pause reverve restart reset complete none
        //              onEnter onLeave OnEnterBack onLeaveBack
        markers : {
            fontSize :"3rem",
        },
        toggleClass : "red"
    }
})

