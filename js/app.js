const drumBtn = document.querySelectorAll(".drum");

for (let i = 0; i < drumBtn.length; i++) {
  drumBtn[i].addEventListener("click", () => {
    const drumText = drumBtn[i].innerHTML.toLowerCase();
    PlayDrum(drumText);
  });
};

function PlayDrum(key) {
  switch (key) {
    case "w":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
    case "s":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
    case "d":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
    case "j":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
    case "k":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
    case "l":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
    default:
      break;
  };
};

window.addEventListener("keypress", (e) => {
  PlayDrum(e.key);
  PlayStyle(e.key);
})

function PlayStyle(key) {
  const drum = document.querySelector(`.${key}`);
  drum.classList.add("pressed");
  console.log(drum);
  setTimeout(() => {
    drum.classList.remove("pressed");
  }, 100)
}