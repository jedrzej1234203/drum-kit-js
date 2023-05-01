const app = document.getElementById("drum-kit-app");
const buttonList = [
  ["w", "CLAP"],
  ["s", "HIHAT"],
  ["d", "KICK"],
  ["f", "OPENHAT"],
  ["g", "BOOM"],
  ["h", "RIDE"],
  ["j", "SNARE"],
  ["k", "TOM"],
  ["l", "TINK"],
];
const tracker = document.getElementById("history");
tracker.onclick = copyAndReset;

buttonList.forEach((element) => {
  let newButton = document.createElement("button");
  newButton.classList.add("panel");
  newButton.classList.add(element[0]);
  newButton.onclick = () => {
    playDrum(element[0]);
  };
  newButton.innerHTML = `<span>${element[0].toUpperCase()}</span><p>${
    element[1]
  }</p>`;
  app.appendChild(newButton);
});

window.addEventListener("keydown", playDrum);

function randomButtonColor(classLetter) {
  let button = document.querySelector(`.${classLetter}`);
  rColor = `#${Math.floor(Math.random() * 1000000)}`;
  button.style.background = rColor;
}

function playDrum(key) {
  if (key.length !== 1) {
    key = key.key;
  }
  switch (key) {
    case "w":
      let clap = new Audio("assets/clap.wav");
      clap.play();
      tracker.innerHTML += "Clap ";
      randomButtonColor(key);
      break;
    case "s":
      let hiHat = new Audio("assets/HiHat.mp3");
      hiHat.play();
      tracker.innerHTML += "HiHat ";
      randomButtonColor(key);
      break;
    case "d":
      let kick = new Audio("assets/kick.mp3");
      kick.play();
      tracker.innerHTML += "Kick ";
      randomButtonColor(key);
      break;
    case "f":
      let openHat = new Audio("assets/OpenHiHat.mp3");
      openHat.play();
      tracker.innerHTML += "OpenHiHat ";
      randomButtonColor(key);
      break;
    case "g":
      let boom = new Audio("assets/boom.wav");
      boom.play();
      tracker.innerHTML += "Boom ";
      randomButtonColor(key);
      break;
    case "h":
      let ride = new Audio("assets/Ride.mp3");
      ride.play();
      tracker.innerHTML += "Ride ";
      randomButtonColor(key);
      break;
    case "j":
      let snare = new Audio("assets/Snare.mp3");
      snare.play();
      tracker.innerHTML += "Snare ";
      randomButtonColor(key);
      break;
    case "k":
      let tom = new Audio("assets/Tom.mp3");
      tom.play();
      tracker.innerHTML += "Tom ";
      randomButtonColor(key);
      break;
    case "l":
      let tink = new Audio("assets/tink.wav");
      tink.play();
      tracker.innerHTML += "Tink ";
      randomButtonColor(key);
      break;
  }
}

function copyAndReset() {
  let trackerHistory = tracker.innerText;
  navigator.clipboard
    .writeText(trackerHistory.slice(20))
    .then(alert("History coppied to clipboard"));
  let panelBackground = document.querySelectorAll(".panel");
  panelBackground.forEach((panel) => {
    panel.style.background = "#424242";
  });
}
