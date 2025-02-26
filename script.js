let countdown;
let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resumeBtn = document.getElementById('resumeBtn');
let resetBtn = document.getElementById('resetBtn');
let customTimeInput = document.getElementById('customTime');
let remainingTime;
let isPaused = false;

startBtn.addEventListener('click', function() {
    let time = parseInt(customTimeInput.value) || 3600; // Default to 1 hour if no input
    clearInterval(countdown);
    countdown = setInterval(function() {
        if (time <= 0) {
            clearInterval(countdown);
            timerDisplay.innerText = 'Time is up!';
            return;
        }
        if (!isPaused) {
            time--;
        }
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;
        timerDisplay.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
});

pauseBtn.addEventListener('click', function() {
    isPaused = true;
});

resumeBtn.addEventListener('click', function() {
    isPaused = false;
});

resetBtn.addEventListener('click', function() {
    clearInterval(countdown);
    timerDisplay.innerText = '00:00:00';
    customTimeInput.value = '';
});

function updateSystemTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;

    // Update the left-side system time display
    document.getElementById('systemTimeLeft').innerText = currentTime;
}
setInterval(updateSystemTime, 1000);
