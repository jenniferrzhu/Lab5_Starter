// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const textArea = document.getElementById("text-to-speak");
  const playButton = document.querySelector("button");
  const faceImage = document.querySelector("#explore img");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  populateVoiceList();

  playButton.addEventListener("click", () => {
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.addEventListener("start", () => {
      faceImage.src = "assets/images/smiling-open.png";
    });

    utterThis.addEventListener("end", () => {
      faceImage.src = "assets/images/smiling.png";
    });

    synth.speak(utterThis);
  });
}
