let sprinkleCount = 0;
const maxSprinkle = 30;

function createSprinkle() {
  if (sprinkleCount >= maxSprinkle) return;

  const sprinkle = document.createElement('div');
  sprinkle.classList.add('sprinkle');
  sprinkle.style.left = Math.random() * 100 + '%';
  sprinkle.style.backgroundColor = ['#FF69B4', '#FFD700', '#ADFF2F', '#00FFFF', '#FF4500', '#BA55D3', '#00FA9A', '#FFA07A'][Math.floor(Math.random() * 8)];
  sprinkle.style.animationDuration = (4 + Math.random() * 3) + 's';
  container.appendChild(sprinkle);
  sprinkleCount++;

  setTimeout(() => {
    sprinkle.remove();
    sprinkleCount--;
  }, 7000);
}
