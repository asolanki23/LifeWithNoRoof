// ====================== Horizontal Scrolling ====================== //

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),

    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".container").offsetWidth,
  },
});



// ============================ Landing Title Page  ============================ //

let timeline1 = gsap.timeline({ defaults: { duration: 1 } });
timeline1
  .from("#myVideo", { opacity: 0, duration: 3 })
  .from(".header1", { y: -100, opacity: 0, ease: "power1.out" })
  .from(".myName", { opacity: 0, y: -20, ease: "power1.out" })
  .from(".scroll", { opacity: 0 })
  .from(".mouse", { opacity: 0 });



// ================================ Section 1 ================================ //

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section1",
    start: "1700px",
    end: "2100px",
    scrub: 5,
  },
});

tl.to(".myStory", { opacity: 0, y: 500, duration: 200, delay: 2 });
tl.to(".text1", { opacity: 0, x: 200, duration: 300, delay: 2 });
tl.to(".text2", { opacity: 0, x: 200, duration: 400, delay: 2 });
tl.to(".text3", { opacity: 0, x: 200, duration: 500, delay: 2 });
tl.to(".iExist", { opacity: 0, scale: 0, duration: 200, delay: 3 });

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section1",
    start: "1000px",
    end: "1500px",
    scrub: 5,
  },
});

tl2.from(".myStory", { opacity: 0, y: 500, duration: 200, delay: 2 });
tl2.from(".text1", { opacity: 0, x: 200, duration: 300, delay: 2 });
tl2.from(".text2", { opacity: 0, x: 200, duration: 400, delay: 2 });
tl2.from(".text3", { opacity: 0, x: 200, duration: 500, delay: 2 });
tl2.from(".iExist", { opacity: 0, scale: 0, duration: 200, delay: 2 });


// ================================ Section 2 ================================ //

// Animation when leaving page //

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "3500px",
    end: "3800px",
    scrub: 5,
  },
});
tl4.to(".fog-container", { opacity: 0, duration: 200, delay: 2 });
tl4.to(".sadChild", { x: -200, opacity: 0, duration: 200, delay: 5 });
tl4.to(".section2text1", { opacity: 0, duration: 200, delay: 5 });
tl4.to(".section2text2", { opacity: 0, duration: 200, delay: 5 });
tl4.to(".section2text3", { opacity: 0, duration: 200, delay: 5 });
tl4.to(".sec2title", { x: -200, opacity: 0, duration: 200, delay: 5 });

// Animation when entering page //

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "2800px",
    end: "3350px",
    scrub: 5,
  },
});

tl3.from(".fog-container", { opacity: 0, duration: 200, delay: 2 });
tl3.from(".sadChild", { opacity: 0, duration: 200, delay: 5 });
tl3.from(".section2text1", { opacity: 0, y: 500, duration: 200, delay: 5, });
tl3.from(".section2text2", { opacity: 0, y: 500, duration: 200, delay: 5, });
tl3.from(".section2text3", { opacity: 0, y: 500, duration: 200, delay: 5, });
tl3.from(".sec2title", { opacity: 0, x: 500, duration: 200, delay: 10, });


// ================================ Section 3 ================================ //

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "5200px",
    end: "5500px",
    scrub: 5,
  },
});

tl6.to(".manSleep", { x: -500, opacity: 0, duration: 200, delay: 2 });
tl6.to(".text1_section3", { y: 500,opacity: 0,duration: 200,delay: 2, });
tl6.to(".box2", { y: 500,opacity: 0, duration: 200, delay: 2, });
tl6.to(".box3", { y: 500,opacity: 0, duration: 200, delay: 2, });

// on page enter //

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "4500px",
    end: "4800px",
    scrub: 5,
  },
});

tl5.from(".manSleep", { x: -800, opacity: 0, duration: 200, delay: 2 });
tl5.from(".text1_section3", {y: 500,opacity: 0,duration: 200, delay: 2 });
tl5.from(".box2", { y: 500, opacity: 0, duration: 200, delay: 2 });
tl5.from(".box3", { y: 500, opacity: 0, duration: 200, delay: 2 });



// ================================ Section 4 ================================ //

let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section4",
    toggleActions: "restart none none none",
    start: "5500px",
  },
});

tl7.from(".section4title", { y: -400, duration: 2 });
tl7.from(".clearfix", { opacity: 0, duration: 1 });
tl7.from(".para1", { opacity: 0, x: 200, duration: 1 });
tl7.from(".para2", { opacity: 0, y: 200, duration: 1, delay: 1 });



// ================================ Section 5 ================================ //

let tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "8600px",
    end: "9000px",
    scrub: 3,
  },
});

tl8.to(".section5title", { opacity: 0, y: 500, duration: 200, delay: 2, });
tl8.to(".section5text1", { opacity: 0, x: 200, duration: 500, delay: 1, });
tl8.to(".section5text2", { opacity: 0, x: -200,duration: 500, delay: 2, });
tl8.to(".section5text3", { opacity: 0, x: 200, duration: 500, delay: 3, });
tl8.to(".one", { opacity: 0,y: 200, duration: 500, delay: 4, });
tl8.to(".two", { scale: 0, duration: 500, delay: 1, });
tl8.to(".three", { opacity: 0, y: 200, duration: 500, delay: 4, });
tl8.to(".section5-img", { opacity: 0, x: 200, duration: 100, delay: 2, });

  // on page enter //

let tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "7500px",
    end: "8400px",
    scrub: 5,
  },
});

tl9.from(".section5title", { opacity: 0, y: 500, duration: 200, delay: 2, });
tl9.from(".section5text1", { opacity: 0, x: 200, duration: 500, delay: 1, });
tl9.from(".section5text2", { opacity: 0, x: -200,duration: 500, delay: 2, });
tl9.from(".section5text3", { opacity: 0, x: 200, duration: 500, delay: 3, });
tl9.from(".one", { opacity: 0,y: 200, duration: 500, delay: 4, });
tl9.from(".two", { scale: 0, duration: 500, delay: 1, });
tl9.from(".three", { opacity: 0, y: 200, duration: 500, delay: 4, });
tl9.from(".section5-img", { opacity: 0, x: 200, duration: 100, delay: 2, });



// ================================ Section 6 ================================ //

let tl11 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section6",
    start: "10300px",
    end: "10500px",
    scrub: 5,
  },
});

tl11.to(".women", { opacity: 0, x: -200, duration: 200, delay: 3, });
tl11.to(".section6text1", { opacity: 0, x: 100, duration: 500, delay: 3, });
tl11.to(".section6text2", { opacity: 0, x: -100, duration: 500, delay: 3, });
tl11.to(".note", { opacity: 0, x: 200, duration: 500, delay: 3, });


let tl10 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section6",
    start: "9500px",
    end: "10000px",
    scrub: 5,
  },
});

tl10.from(".women", { opacity: 0, x: -200, duration: 200, delay: 3, });
tl10.from(".section6text1", { opacity: 0, x: 100, duration: 500, delay: 3, });
tl10.from(".section6text2", { opacity: 0, x: -100, duration: 500, delay: 3, });
tl10.from(".note", { opacity: 0, x: 200, duration: 500, delay: 3, });



// ================================ Section 7 ================================ //

let tl13 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section7",
    start: "11900px",
    end: "12500px",
    scrub: 5,
  },
});

tl13.to(".wave", { opacity: 0, y: 200, duration: 200, delay: 3, });
tl13.to(".holdingHands", { opacity: 0, y: -200, duration: 300, delay: 3, });
tl13.to(".section7text1", { opacity: 0, x: -200, duration: 300, delay: 3, });
tl13.to(".section7text2", { opacity: 0, x: 200, duration: 300, delay: 3, });
tl13.to(".section7-h3", { opacity: 0, y: 200, duration: 300, delay: 3, });

let tl12 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section7",
    start: "11000px",
    end: "11800px",
    scrub: 5,
  },
});

tl12.from(".wave", { opacity: 0, x: -200, duration: 200, delay: 3, });
tl12.from(".holdingHands", { opacity: 0, y: -200, duration: 300, delay: 3, });
tl12.from(".section7text1", { opacity: 0, x: -200, duration: 300, delay: 3, });
tl12.from(".section7text2", { opacity: 0, x: 200, duration: 300, delay: 3, });
tl12.from(".section7-h3", { opacity: 0, y: 200, duration: 300, delay: 3, });



 // ================================ Section 8 ================================ //

 let tl14 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section8",
    toggleActions: "restart none none none",
    start: "12000px",
  },
});

tl14.from(".header2", { y: -200, duration: 1, delay: 2 });
tl14.from(".stats1", { opacity: 0, x: -100, duration: 1 });
tl14.from(".stats2", { opacity: 0, y: -100, duration: 1 });
tl14.from(".stats3", { opacity: 0, x: 100, duration: 1 });
tl14.from(".video", { opacity: 0, y: 10, duration: 1 });
tl14.from(".section8text1", { opacity: 0, x: 10, duration: 1 });



// ================================ Section 9 ================================ //

let tl15 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section9",
    toggleActions: "restart none none none",
    start: "13550px",
  },
});

tl15.from(".section9-h2", { opacity: 0, x: 50, duration: 1, delay: 1, ease: "slow (0.7, 0.7, false)",});
tl15.from(".text-box", { opacity: 0, x: 50, duration: 1 });
tl15.from(".credit", { opacity: 0, duration: 2 });
tl15.from(".section9text1", { opacity: 0, x: 50, duration: 1 });
tl15.from(".section9text2", { opacity: 0, x: 50, duration: 1 });
tl15.from(".section9text3", { opacity: 0, x: 50, duration: 1 });
tl15.from(".left-arrow", { opacity: 0, x: 50, duration: 1 });
tl15.from(".section9-start", { opacity: 0, duration: 2 });
