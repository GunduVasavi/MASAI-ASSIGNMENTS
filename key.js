const readline = require("readline");

// Create an interface to read input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for number of seconds
rl.question("Enter countdown seconds: ", (seconds) => {
    let timeLeft = Number(seconds);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        console.log("Please enter a valid positive number.");
        rl.close();
        return;
    }

    console.log(`Countdown started for ${timeLeft} seconds...`);
    console.log(`(Press 's' to stop immediately)`);

    // Start countdown interval
    const countdown = setInterval(() => {
        console.log(`Time left: ${timeLeft}s`);
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdown);
            console.log("Countdown Complete!");
            rl.close();
        }
    }, 1000);

    // Detect keypress 's'
    const stopCheck = setInterval(() => {}, 100); // keeps event loop alive

    process.stdin.on("data", (key) => {
        if (key.toString().trim() === "s") {
            clearInterval(countdown);
            clearInterval(stopCheck);
            console.log("Countdown Stopped by User!");
            rl.close();
        }
    });
});
