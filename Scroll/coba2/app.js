gsap.registerPlugin(ScrollTrigger);

// gsap.to(".square",{x:500,duration:4});
// gsap.to(".square",{y:500,duration:4,delay:2});
// gsap.to(".square",{x:0,duration:4,delay:4});
// gsap.to(".square",{y:0,duration:4,delay:6});

const tl = gsap.timeline({
    scrollTrigger:{
        trigger:".square",
        scrub :2,
        start : "top 80%",
        end: "top 20%",
        markers:true
    }
});

tl.to(".square",{x:500,duration:4})
.to(".square",{y:200,duration:4})
.to(".square",{x:0,duration:4})
.to(".square",{y:0,duration:4})
