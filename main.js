// INTRO
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const textOnVideo = intro.querySelector("h1");

// VIDEO DURATION
const loadVideo = (file) =>
  new Promise((resolve, reject) => {
    try {
      let video = document.createElement("video");
      video.preload = "metadata";

      video.onloadedmetadata = function () {
        resolve(this);
      };

      video.onerror = function () {
        reject("Invalid video. Please select a video file.");
      };

      video.src = window.URL.createObjectURL(file);
    } catch (e) {
      reject(e);
    }
  });
const vvv = await loadVideo(video);
console.log(vvv.duration);

// console.log(video.duration);

// const videoDuration = vid
console.log(video);

// CONTENT
const content = document.querySelector(".content");
const textOnContent = content.querySelector("h1");

// SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//
let scene = new ScrollMagic.Scene({
  duration: "1000%",
  // duration: "100%",
  triggerElement: intro,
})
  .addIndicators()
  .addTo(controller);
