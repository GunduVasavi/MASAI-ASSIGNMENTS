// Step 1: Define the timer function
function timer(duration, onComplete) {

    // Step 2: Use setTimeout to simulate the timer
    setTimeout(() => {
        const message = `Timer of ${duration} ms finished`;
        onComplete(message); // calling the callback with the message
    }, duration);
}

// Example usage:
timer(2000, function(result) {
    console.log(result);
});
