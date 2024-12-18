function showLove() {
  const heartsContainer = document.getElementById("hearts");
  for (let i = 0; i < 20; i++) {
    createHeart(heartsContainer);
  }
}

function createHeart(container) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
