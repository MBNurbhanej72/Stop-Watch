let countDown = document.getElementById("countDown");
let resetValue = document.querySelector(".resetValue");
let start_btn = document.querySelector(".start_btn");
let reset_btn = document.querySelector(".reset_btn");
let stop_btn = document.querySelector(".stop_btn");
let time_btn = document.querySelector(".time_btn");
let clear_btn = document.querySelector(".clear_btn");
let startCount = 0;
let intervalID;
let timerRunning = false;

let startTimer = () => {
  if (!timerRunning) {
    timerRunning = true;
    countDown.innerText = formatTime(startCount); // Update countdown immediately
    intervalID = setInterval(() => {
      startCount++;
      countDown.innerText = formatTime(startCount);
    }, 1000);
  }
};

let stopTimer = () => {
  showStopValue();
  clearInterval(intervalID);
  timerRunning = false; // Reset timerRunning flag
};

let resetTimer = () => {
  countDown.innerText = "00:00:00";
  clearInterval(intervalID);
  startCount = 0;
  timerRunning = false; // Reset timerRunning flag
};

let formatTime = (timeInSeconds) => {
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds % 3600) / 60);
  let seconds = timeInSeconds % 60;

  // Add leading zeros if necessary
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return `${hours}:${minutes}:${seconds}`;
};

let showStopValue = () => {
  let newPara = document.createElement("p");
  newPara.innerText = ` ${formatTime(startCount)}`;
  resetValue.append(newPara);
};

let clearTimeValue = () => {
  resetValue.innerHTML = "";
};

start_btn.addEventListener("click", startTimer);
stop_btn.addEventListener("click", stopTimer);
reset_btn.addEventListener("click", resetTimer);
time_btn.addEventListener("click", showStopValue);
clear_btn.addEventListener("click", clearTimeValue);
