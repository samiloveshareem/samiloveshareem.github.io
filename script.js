const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const gif = document.getElementById("gif");

const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;
let noCount = 0;

// Start music only after user interaction (GitHub fix)
function startMusic() {
  if (!musicStarted) {
    bgMusic.play().catch(() => {});
    musicStarted = true;
  }
}

// NO button logic
noBtn.addEventListener("click", () => {
  startMusic();
  noCount++;

  message.innerText = "Think again 😏";
  yesBtn.style.transform = `scale(${1 + noCount * 0.3})`;

  if (noCount === 1) gif.src = "angry1.gif";
  if (noCount === 2) gif.src = "angry2.gif";
  if (noCount === 3) gif.src = "angry3.gif";

  if (noCount >= 3) {
    noBtn.style.display = "none";
    message.innerText = "You only have one choice now 😌❤️";
  }
});

// YES button
yesBtn.addEventListener("click", () => {
  startMusic();
  document.getElementById("questionScreen").classList.add("hidden");
  document.getElementById("yayScreen").classList.remove("hidden");
});

// Navigation
function showLetter() {
  document.getElementById("yayScreen").classList.add("hidden");
  document.getElementById("letterScreen").classList.remove("hidden");
}

function showMemories() {
  document.getElementById("yayScreen").classList.add("hidden");
  document.getElementById("memoryScreen").classList.remove("hidden");
}

function goBackToYay() {
  document.getElementById("letterScreen").classList.add("hidden");
  document.getElementById("memoryScreen").classList.add("hidden");
  document.getElementById("yayScreen").classList.remove("hidden");
}
