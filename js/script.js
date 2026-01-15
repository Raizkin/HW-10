let countMessage = 0;
const interval = setInterval(() => {
    countMessage++;
    console.log(`Lol!`);
    if (countMessage === 5) {
        clearInterval(interval);
    }
}, 1000);

const box = document.getElementById("box");
let position = 50;
let growing = true;

const animation = setInterval(() => {
  // Змінюємо розмір
  if (growing) {
    position += 5;
    if (position >= 200) growing = false;
  } else {
    position -= 5;
    if (position <= 50) growing = true;
  }

  box.style.width = position + "px";
  box.style.height = position + "px";
}, 100);
 

let score = 0;
let time = 10;

const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const btn = document.getElementById("gameBtn");


btn.addEventListener("click", () => {
  score++;
  scoreEl.textContent = score;
});


const gameInterval = setInterval(() => {
  time--;
  timeEl.textContent = time;

  if (time === 0) {
    clearInterval(gameInterval);
    btn.disabled = true; 
    alert("Гра закінчена! Твій рахунок: " + score);
  }
}, 1000);



const input = document.getElementById("seconds");
const startBtn = document.getElementById("startTimer");
const msg = document.getElementById("timerMsg");

startBtn.addEventListener("click", () => {
  const seconds = Number(input.value);
  if (isNaN(seconds) || seconds <= 0) {
    alert("Введіть правильне число секунд!");
    return;
  }

  msg.textContent = "Таймер запущено...";

  setTimeout(() => {
    msg.textContent = "Час вийшов!";
  }, seconds * 1000);
});
