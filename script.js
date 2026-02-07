let noCount = 0;
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const gif = document.getElementById("gif");

noBtn.addEventListener("click", () => {
  noCount++;

  message.innerText = "Think again 😏";

  yesBtn.style.transform = `scale(${1 + noCount * 0.3})`;

  if (noCount === 1) gif.src = "angry1.gif";
  if (noCount === 2) gif.src = "angry2.gif";
  if (noCount === 3) gif.src = "angry3.gif";

  if (noCount >= 3) {
    noBtn.style.display = "none";
    message.innerText = "You have only one choice now 😌❤️";
  }
});

yesBtn.addEventListener("click", () => {
  document.getElementById("questionScreen").classList.add("hidden");
  document.getElementById("yayScreen").classList.remove("hidden");
});

function showLetter() {
  document.getElementById("yayScreen").classList.add("hidden");
  document.getElementById("letterScreen").classList.remove("hidden");
}

function showMemories() {
  document.getElementById("yayScreen").classList.add("hidden");
  document.getElementById("memoryScreen").classList.remove("hidden");
}
