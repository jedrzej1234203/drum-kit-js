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
      console.log(key.key);
      break;
    case "f":
      console.log(key.key);
      break;
    case "g":
      console.log(key.key);
      break;
    case "h":
      console.log(key.key);
      break;
    case "j":
      console.log(key.key);
      break;
    case "k":
      console.log(key.key);
      break;
    case "l":
      console.log(key.key);
      break;
  }
}
