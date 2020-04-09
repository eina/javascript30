const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  // rewind to start before playing
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};

const removeTransition = function (e) {
  // skip if not a transform
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
};

// loop through all the keys to attach a listener
const keys = document.querySelectorAll(".key");
for (const key of keys) {
  key.addEventListener("transitionend", removeTransition);
}

window.addEventListener("keydown", playSound);
