// 1. First, we need to bring in the 'readline-sync' package for user input in Node.js
const readlineSync = require('readline-sync');

// --- Standard Recipe for 1 Cup of Chai ---
const WATER_PER_CUP = 200; // ml
const MILK_PER_CUP = 50;   // ml
const TEA_PER_CUP = 1;     // tablespoon
const SUGAR_PER_CUP = 2;   // teaspoons (optional, but included)

// --- YOUR TASK: Create the calculateChaiIngredients function ---
function calculateChaiIngredients() {
    // Task 1: Prompts the user to enter the number of chai cups
    // The prompt text should match the example exactly.
    let cupsInput = readlineSync.question('Karibu! How many cups of Chai Bora would you like to make? ');

    // Convert the input (which is text) to a number
    let theNumberOfCups = Number(cupsInput);

    // --- Task 3: Calculate the required amount for each ingredient ---
    let totalWater = WATER_PER_CUP * theNumberOfCups;
    let totalMilk = MILK_PER_CUP * theNumberOfCups;
    let totalTea = TEA_PER_CUP * theNumberOfCups;
    let totalSugar = SUGAR_PER_CUP * theNumberOfCups;

    // --- Task 4: Prints the results to the console in a clear, readable format ---
    // IMPORTANT: Use BACKTICKS (`) for these lines to correctly display variable values!
    console.log(`To make ${theNumberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTea} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
    console.log(`\nEnjoy your Chai Bora!`); // \n adds a new line for spacing
}

// --- Call the function to make it run ---
// This line starts your calculator when you run the script.
calculateChaiIngredients();