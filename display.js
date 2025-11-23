// Step 1: Function to display a greeting message
function displayMessage(name) {
    console.log(`Hello, ${name}!`);
}

// Step 2: Function to simulate fetching user input after 1 second
function getUserInput(callback) {
    setTimeout(() => {
        const username = "Alice";   // Simulated retrieved username
        callback(username);         // Calling the callback with the username
    }, 1000);
}

// Calling getUserInput and passing displayMessage as the callback
getUserInput(displayMessage);
