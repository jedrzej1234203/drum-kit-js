const app = document.getElementById("drum-kit-app");
const buttonList = [
  ["w", "CLAP"],
  ["d", "HIHAT"],
  ["f", "OPENHAT"],
  ["g", "BOOM"],
  ["h", "RIDE"],
  ["j", "SNARE"],
  ["k", "TOM"],
  ["l", "TINK"],
];

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

function playDrum(key) {
  if (key.length !== 1) {
    key = key.key;
  }
  switch (key) {
    case "w":
      let clap = new Audio("assets/clap.wav");
      clap.play();
      break;
    case "d":
      let hiHat = new Audio("assets/HiHat.mp3");
      hiHat.play();
    break;
    case "f":
      let openHat = new Audio("assets/OpenHiHat.mp3");
      openHat.play();
      break;
    case "g":
      let boom = new Audio("assets/boom.wav");
      boom.play();
    break;
    case "h":
      let ride = new Audio("assets/Ride.mp3");
      ride.play();
    break;
    case "j":
      let snare = new Audio("assets/Snare.mp3");
      snare.play();
    break;
    case "k":
      let tom = new Audio("assets/Tom.mp3");
      tom.play();
    break;
    case "l":
      let tink = new Audio("assets/tink.wav");
      tink.play();
    break;
  }
}
