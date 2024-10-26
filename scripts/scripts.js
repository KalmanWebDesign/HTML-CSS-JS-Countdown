// target date in milisec - change to any date you want
let targetDate = new Date("Dec 25, 2024 00:00:00").getTime();
// console.log(targetDate)

// get elements where info will be displayed
dayElem = document.getElementById("days");
hourElem = document.getElementById("hours");
minElem = document.getElementById("mins");
secondElem = document.getElementById("seconds");

// update each second - setInterval called immediately
let countdownTimer = setInterval(() => {
    // get current time in milisec
    let now = new Date().getTime();
    console.log(now)

    // diff between target and curr time
    let timeDif = targetDate - now;

    // calculate days, hours, minutes, and secs remaining -------
    // divide time in millisec by 1 day in millisec to get remaining days,
    // round down
    let days = Math.floor(timeDif / (1000 * 60 * 60 * 24));
    // Math.floor((timeDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) includes 1 extra hour
    // calculate 1 hr in millisec, subtract 1 hr from timeDif, 
    // calculate 1 day in millisec, find remainder of timeDif by 1 day 
    // (leftover after removing days), divide by an hour, round down
    let hours = Math.floor((timeDif - (1000 * 60 * 60)) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    // calculate 1 hr in milisec, calculate remainder of timeDif / 1 hour,
    // divide by 1 minute in milisec, round down
    let minutes = Math.floor((timeDif % (1000 * 60 * 60)) / (1000 * 60));
    // converts minutes to milisec, find remainder of timedif / 1 minute,
    // convert milisec back into seconds
    let seconds = Math.floor((timeDif % (1000 * 60)) / 1000);

    // display results on page for each elem
    dayElem.innerText = days;
    hourElem.innerText = hours;
    minElem.innerText = minutes;
    secondElem.innerText = seconds;
}, 1000)

// create snowflakes 
const snowContainer = document.querySelector('.snow-container');

// Function to create snowflakes dynamically
function createSnowflakes(number) {
    for (let i = 0; i < number; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowContainer.prepend(snowflake);
    }
}

// Create 5 snowflakes (or any number you want)
createSnowflakes(5);