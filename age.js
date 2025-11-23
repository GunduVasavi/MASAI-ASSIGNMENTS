// Step 1: Declare a global variable
let age = 20;

// Step 2: Function to display current age
function displayAge() {
    console.log("Current age is:", age);
}

// Step 3: Function to change global age variable
function changeAge() {
    age = 25;  // updating the global variable
    console.log("Age after updating inside function:", age);
}

// Step 4: Call the functions
displayAge();   // Should print 20
changeAge();    // Should print 25
displayAge();   // Should print updated value 25
