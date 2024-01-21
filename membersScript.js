const deepWorkPlaylist = [
  "Music/Vector Vibes.mp3",
  "Music/Synthetic Soundscapes.mp3",
  "Music/Wired Wired Workflow.mp3",
  "Music/Artificial Ambience.mp3",
  "Music/Cyborg Symphony.mp3",
  "Neural_Nexus.mp3",
  // Add more deep work songs here
];

const creativePlaylist = [
  "Music/Prompt Passion.mp3",
  "Music/One-Shot Pony.mp3",
  "Music/Algo Anthem.mp3",
  "Music/Machine Mindset.mp3",
  // Add more creative songs here
];

let currentPlaylist = [];

const audio = new Audio();
audio.loop = true;

function playRandomSong() {
  const songIndex = Math.floor(Math.random() * currentPlaylist.length);
  audio.src = currentPlaylist[songIndex];
  audio.play();
}

const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("input", (event) => {
  audio.volume = event.target.value;
});

const deepWorkButton = document.getElementById("deepWorkButton");
const creativeButton = document.getElementById("creativeButton");

let isDeepWorkPlaying = false;
let isCreativePlaying = false;

deepWorkButton.addEventListener("click", () => {
  isDeepWorkPlaying = !isDeepWorkPlaying;
  if (isDeepWorkPlaying) {
    deepWorkButton.textContent = "Pause";
    deepWorkButton.style.backgroundColor = "green";
    currentPlaylist = deepWorkPlaylist;
    playRandomSong();
  } else {
    deepWorkButton.textContent = "Deep Work";
    deepWorkButton.style.backgroundColor = "";
    audio.pause();
  }
  if (isCreativePlaying) {
    isCreativePlaying = false;
    creativeButton.textContent = "Creative";
    creativeButton.style.backgroundColor = "";
  }
});

creativeButton.addEventListener("click", () => {
  isCreativePlaying = !isCreativePlaying;
  if (isCreativePlaying) {
    creativeButton.textContent = "Pause";
    creativeButton.style.backgroundColor = "green";
    currentPlaylist = creativePlaylist;
    playRandomSong();
  } else {
    creativeButton.textContent = "Creative";
    creativeButton.style.backgroundColor = "";
    audio.pause();
  }
  if (isDeepWorkPlaying) {
    isDeepWorkPlaying = false;
    deepWorkButton.textContent = "Deep Work";
    deepWorkButton.style.backgroundColor = "";
  }
});
