const readlineSync = require('readline-sync');

const WATER_PER_CUP = 200; // ml
const MILK_PER_CUP = 50;   // ml
const TEA_PER_CUP = 1;     // tablespoon
const SUGAR_PER_CUP = 2;   // teaspoons 

function calculateChaiIngredients() {
    
    let cupsInput = readlineSync.question('Karibu! How many cups of Chai Bora would you like to make? ');

    // Convert the input (which is text) to a number
    let theNumberOfCups = Number(cupsInput);

    let totalWater = WATER_PER_CUP * theNumberOfCups;
    let totalMilk = MILK_PER_CUP * theNumberOfCups;
    let totalTea = TEA_PER_CUP * theNumberOfCups;
    let totalSugar = SUGAR_PER_CUP * theNumberOfCups;

    console.log(`To make ${theNumberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTea} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
    console.log(`\nEnjoy your Chai Bora!`); 
}

calculateChaiIngredients();