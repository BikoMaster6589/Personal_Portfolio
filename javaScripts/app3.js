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


let ticking = false;

window.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      ticking = false;
    });
    ticking = true;
  }
});

const videos = document.querySelectorAll('.vid');
const playButtons = document.querySelectorAll('.p');

playButtons.forEach((button, index) => {
  const video = videos[index];
  const showw = video.parentElement.querySelector('#show'); // Adjust depending on your HTML

  button.addEventListener('click', function () {
    if (video.paused) {
      video.play();
      button.classList.add('playing');
      if (showw) showw.classList.add("notShown");
    } else {
      video.pause();
      button.classList.remove('playing');
      if (showw) showw.classList.remove("notShown");
    }
  });
});

