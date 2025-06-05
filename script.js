// Texte animé lettre par lettre
const text = "Je t'aime Kend❤️";
const animatedText = document.getElementById("animatedText");

let index = 0;
function typeText() {
  if (index < text.length) {
    animatedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 150);
  }
}
typeText();

// Animation des cœurs
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 300);

// Effet "bisou"
function showKiss() {
  const kiss = document.getElementById("kiss");
  kiss.classList.remove("hidden");
}
