const tl = gsap.timeline({
    defaults:{
        duration:0.7,
        ease: "power3.out"

    }
});
const mm = gsap.matchMedia();

tl.from(".white-overlay",{
    opacity:0,
    scaleY:0,
    stagger:0.3,
    delay:0.3,
    transformOrigin:"top center"
})
tl.fromTo(".category img",{opacity:0,scale:1.1},{
    opacity:1,
    scale:1,
    stagger:0.3,
    duration:1,
    ease: "power4.out"
})

mm.add("(max-width: 1023px)", () => {
    tl.add(() => {
        gsap.to(".cta-btn", {
        //   backgroundColor:"black",
          opacity:1
        });
    });
});
tl.from(".content .title",{
    opacity:0,
    yPercent:100,
})
tl.from(".content .subtitle",{
    opacity:0,
    yPercent:100,
   
})
tl.from("header",{
    height:0,
    opacity:0,
})
tl.from("header .black-overlay",{
    yPercent:-100,
})
tl.from(".logo",{
    yPercent:-100,
    opacity:0,
})
tl.fromTo(".nav-item",{opacity:0},{
    opacity:1,
    duration:0.2,
    stagger:0.2
})
