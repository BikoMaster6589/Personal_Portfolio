gsap.registerPlugin(ScrollTrigger);
const content = gsap.utils.toArray('.ScrollEle .scroll');

const scrollTween = gsap.to(content, {
  xPercent: -103 * (content.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: '.ScrollEle',
    pin: true,
    scrub: 3,
    end: "+=3000",
  }
});


const ps = document.querySelector("#PS");

ps.addEventListener('click',()=>{
  window.location.href = "/pages/profiling.html";
})