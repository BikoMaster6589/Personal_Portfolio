gsap.registerPlugin(ScrollTrigger);
const content = gsap.utils.toArray('.ScrollEle .scroll');

const scrollTween = gsap.to(content, {
  xPercent: -100 * (content.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: '.ScrollEle',
    pin: true,
    scrub: 3,
    end: "+=3000",
  }
});


const pElements = document.querySelectorAll(".p");

pElements.forEach(p => {
  const para = p.querySelector(".lk");

  p.addEventListener('mouseenter', () => {
    para.classList.add("show");
  });

  p.addEventListener('mouseleave', () => {
    para.classList.remove("show");
  });
});


const a = document.querySelector(".footer");
const b = document.querySelector(".portfolio");
gsap.to(a, {
  backgroundColor: "white",
  duration: 4,
  scrollTrigger: {
    trigger: b,  // chota wala start and end
    containerAnimation: scrollTween,
    start: "35% center",
    // markers : true,
    scrub :2
  }
});

// You likely don't need a separate ScrollTrigger setup for the "About Page"
// if the horizontal scrolling applies to the whole page.
// If you have specific animations for the About section, they should be
// defined with their own gsap.to() and scrollTrigger within the
// existing ScrollTrigger context (using containerAnimation if needed) or
// as separate ScrollTriggers if they are independent.