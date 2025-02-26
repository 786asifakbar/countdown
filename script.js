let countdown;
let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', function() {
    let time = 3600; // Countdown from 1 hour
    clearInterval(countdown);
    countdown = setInterval(function() {
        if (time <= 0) {
            clearInterval(countdown);
            timerDisplay.innerText = 'Time is up!';
            return;
        }
        time--;
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;
        timerDisplay.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
});

resetBtn.addEventListener('click', function() {
    clearInterval(countdown);
    timerDisplay.innerText = '00:00:00';
});
