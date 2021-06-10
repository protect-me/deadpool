// INTRO
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const videoText = intro.querySelector("h1");

// CONTENT
const content = document.querySelector(".content");
const contentText = content.querySelector("h1");

// SCROLLMAGIC
const controller = new ScrollMagic.Controller();

// Scenes
const scene = new ScrollMagic.Scene({
  triggerElement: intro, // ScrollMagic의 트리거 요소
  duration: 10000, // 스크롤 픽셀 수. 영상 길이가 10초일 경우 10*1000 = 10000
  triggerHook: 0,
  // viewport에 대해 상대적으로 어느 시점에서 보여줄 건지를 설정
  // 0일 경우 viewport의 최상단, 1일경우 viewport의 최하단
})
  .addIndicators() // indicator를 심어 화면 우측에서 start, end, trigger를 볼 수 있음
  .setPin(intro) // intro 요소를 고정시킴. duration(10000)이 지난 후에는 따라오지 않음
  .addTo(controller); // Scene Object를 ScrollMaig Controller에 추가함

// Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
  // console.log(e);
  // console.log(e.scrollPos);
  // console.log(scrollpos);
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos, delay);
  video.currentTime = delay;
}, 33.3);
