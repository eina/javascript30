window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  // rewind to start before playing
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
const removeTransition = function (e) {
  // skip if not a transform
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
};

for (const key of keys) {
  key.addEventListener("transitionend", removeTransition);
}
