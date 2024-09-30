// Set the date we're counting down to
const birthdayDate = new Date("October 20, 2024 00:00:00").getTime();

// Update the countdown every second
const countdownFunction = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the time difference between now and the countdown date
    const timeLeft = birthdayDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, display a message
    if (timeLeft < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Happy Birthday!";
    }
}, 1000);