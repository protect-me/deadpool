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

//Text Animation
const textAnim = TweenMax.fromTo(videoText, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  triggerElement: intro,
  duration: 3000,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

// Video Animation
let accelamount = 1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  // scene에 .on을 통해서 eventListener를 다는데, trigger는 update
  scrollpos = e.scrollPos / 1000;
  // e.scrollPos는 event의 scrollposition을 담고 있음
  // scene이 update되면 scrollpos 변수의 값을 업데이트함
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // 아래 값을 delay에 더해줌
  // (현재 스크롤의 위치 - video의 기존 currentTime) * accelamount

  // console.log(scrollpos, delay);
  video.currentTime = delay; // video의 현재재생시간에 delay를 할당
}, 100); // video.currentTime를 0.03초 간격으로 업데이트

// 이게 계속 실행되는 것도 문제다; 과부하 걸릴 듯.
