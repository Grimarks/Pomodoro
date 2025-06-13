const bell = document.getElementById('bell');
const startBtn = document.querySelector('.btn-start');
const pauseBtn = document.querySelector('.btn-pause');
const resetBtn = document.querySelector('.btn-reset');
const message = document.querySelector('.app-message');
const session = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const leftCircle = document.querySelector('.left-side.circle');
const rightCircle = document.querySelector('.right-side.circle');

let intervalId = null;
let state = 'ready';
let totalSeconds = 1500; // 25 minutes
const totalDuration = 1500; // For circle animation calculations

function formatTime(sec) {
    const min = Math.floor(sec / 60);
    const remSec = sec % 60;
    return {
        min: min < 10 ? '0' + min : min,
        sec: remSec < 10 ? '0' + remSec : remSec
    };
}

function updateDisplay(sec) {
    const { min, sec: s } = formatTime(sec);
    session.textContent = min;
    seconds.textContent = s;
}

function updateCircle() {
    const progress = totalSeconds / totalDuration;
    if (progress > 0.5) {
        rightCircle.style.transform = `rotate(${(1 - progress) * 360}deg)`;
        leftCircle.style.transform = `rotate(0deg)`;
    } else {
        rightCircle.style.transform = `rotate(180deg)`;
        leftCircle.style.transform = `rotate(${Math.max(0, (0.5 - progress) * 360)}deg)`;
    }
}

function updateMessage() {
    switch (state) {
        case 'ready':
            message.textContent = 'Press Start to begin';
            break;
        case 'running':
            message.textContent = 'Timer running';
            break;
        case 'paused':
            message.textContent = 'Timer paused';
            break;
        case 'finished':
            message.textContent = 'Time’s up! Press Reset to restart';
            break;
    }
}

function tick() {
    if (totalSeconds > 0) {
        totalSeconds--;
        updateDisplay(totalSeconds);
        updateCircle();
    } else {
        clearInterval(intervalId);
        intervalId = null;
        state = 'finished';
        startBtn.disabled = true;
        pauseBtn.disabled = true;
        resetBtn.disabled = false;
        bell.play();
        updateMessage();
        updateCircle();
    }
}

function startTimer() {
    if (state === 'ready' || state === 'paused') {
        intervalId = setInterval(tick, 1000);
        state = 'running';
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        resetBtn.disabled = false;
        updateMessage();
    }
}

function pauseOrResume() {
    if (state === 'running') {
        clearInterval(intervalId);
        intervalId = null;
        state = 'paused';
        pauseBtn.textContent = 'Resume';
        updateMessage();
    } else if (state === 'paused') {
        intervalId = setInterval(tick, 1000);
        state = 'running';
        pauseBtn.textContent = 'Pause';
        updateMessage();
    }
}

function resetTimer() {
    clearInterval(intervalId);
    intervalId = null;
    totalSeconds = totalDuration;
    state = 'ready';
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    pauseBtn.textContent = 'Pause';
    updateDisplay(totalSeconds);
    updateCircle();
    updateMessage();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseOrResume);
resetBtn.addEventListener('click', resetTimer);

document.addEventListener('DOMContentLoaded', () => {
    updateDisplay(totalSeconds);
    updateCircle();
    updateMessage();
});