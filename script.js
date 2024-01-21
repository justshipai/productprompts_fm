const deepWorkPlaylist = [
  "Music/Vector Vibes.mp3",
  "Music/Synthetic Soundscapes.mp3",
  "Music/Wired Workflow.mp3",
  "Music/Artificial Ambience.mp3",
  "Music/Cyborg Symphony.mp3",
  "Music/Neural_Nexus.mp3",
  "Music/Eleswhere.mp3",
  "Music/Deep Mind.mp3",
  "Music/Agent X.mp3",
  "Music/Open Eye.mp3",
  "Music/Destination.mp3",
  // Add more deep work songs here
];

const creativePlaylist = [
  "Music/Prompt Passion.mp3",
  "Music/One-Shot Pony.mp3",
  "Music/Algo Anthem.mp3",
  "Music/Machine Mindset.mp3",
  "Music/Pilot.mp3",
  "Music/Dynamic.mp3",
  "Music/Gliding.mp3",
  "Music/Altman Attitude.mp3",
  // Add more creative songs here
];

let currentPlaylist = [];

const audio = new Audio();
audio.addEventListener("ended", playRandomSong);

function playRandomSong() {
  const songIndex = Math.floor(Math.random() * currentPlaylist.length);
  audio.src = currentPlaylist[songIndex];
  audio.play();
}



const deepWorkButton = document.getElementById("deepWorkButton");
const creativeButton = document.getElementById("creativeButton");

let isDeepWorkPlaying = false;
let isCreativePlaying = false;

deepWorkButton.addEventListener("click", () => {
  isDeepWorkPlaying = !isDeepWorkPlaying;
  if (isDeepWorkPlaying) {
    deepWorkButton.textContent = "Pause";
    deepWorkButton.style.backgroundColor = "#2d335d";
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
    creativeButton.style.backgroundColor = "#2d335d";
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
function getRandomPromptHack() {
  const promptHacks = [
    "Begin your prompt with 'Imagine you are a [specific role].' This helps ChatGPT to adopt the mindset of that role and provide more targeted and relevant responses.",
    "Include specific details and context in your prompt to guide ChatGPT's response. For example, if you want advice on marketing strategies, mention your target audience and niche.",
    "To brainstorm ideas, start your prompt with 'List 5 [subject] ideas for [target audience].' This helps ChatGPT generate a focused list of ideas tailored to your audience's needs.",
    "For more actionable suggestions, ask ChatGPT to provide step-by-step instructions or a plan. For example, 'Create a 7-day social media content plan for a fitness coach.'",
    "Experiment with different prompt structures, like open-ended questions or statements, to get diverse responses from ChatGPT. For instance, <What are the key components of a successful online course?>",
    "If you're looking for inspiration, use prompts like 'Share a success story of a solopreneur in the [specific niche].' This can help ChatGPT generate motivational and insightful stories.",
    "To receive feedback or suggestions on your work, provide a brief description and ask ChatGPT for specific advice. For example, <Review this landing page copy for a productivity app and suggest improvements.>",
    "Encourage ChatGPT to think creatively by using prompts like <Design a unique marketing campaign for a handmade soap brand using unconventional methods.>",
    "To get a better understanding of your audience, ask ChatGPT questions like <What are the main challenges faced by freelance graphic designers, and how can a SaaS product help them?>",
    // ...add more prompt hacks here
  ];

  return promptHacks[Math.floor(Math.random() * promptHacks.length)];
}

function getNextMidnightUTC() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setUTCDate(now.getUTCDate() + 1);
  tomorrow.setUTCHours(0, 0, 0, 0);
  return tomorrow;
}

function displayDailyPromptHack() {
  const dailyPromptHackElement = document.getElementById("dailyPromptHack");

  const storedPromptHack = localStorage.getItem("dailyPromptHack");
  const expirationDate = localStorage.getItem("dailyPromptHackExpiration");

  if (!storedPromptHack || !expirationDate || new Date() >= new Date(expirationDate)) {
    const newPromptHack = getRandomPromptHack();
    localStorage.setItem("dailyPromptHack", newPromptHack);
    localStorage.setItem("dailyPromptHackExpiration", getNextMidnightUTC().toISOString());
    dailyPromptHackElement.textContent = "💡 Daily Prompt Hack: " + newPromptHack;
  } else {
    dailyPromptHackElement.textContent = "💡 Daily Prompt Hack: " + storedPromptHack;
  }
}

displayDailyPromptHack();

$("#volume").slider({
  min: 0,
  max: 100,
  value: 50,
  range: "min",
  slide: function(event, ui) {
    setVolume(ui.value / 100);
  },
  change: function(event, ui) {
    setVolume(ui.value / 100);
  }
});

function setVolume(myVolume) {
  audio.volume = myVolume;
}




