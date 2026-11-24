let score = 0;
let pointsPerClick = 1;

const scoreElement = document.querySelector("#score");
const pointsPerClickElement = document.querySelector("#points-per-click");
const clickTarget = document.querySelector("#click-target");
const messageArea = document.querySelector("#message-area");

function updateDisplay() {
  scoreElement.textContent = score;
  pointsPerClickElement.textContent = pointsPerClick;
}

function handleClick() {
  score += pointsPerClick;
  updateDisplay();
  messageArea.textContent = "+" + pointsPerClick;
}

clickTarget.addEventListener("click", handleClick);

updateDisplay();