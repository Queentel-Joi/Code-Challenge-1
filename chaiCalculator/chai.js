
function calculateChaiIngredients() {

    let numberOfCups;
    while (true) {
        const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
        numberOfCups = parseInt(input);

        if (!isNaN(numberOfCups) && numberOfCups >= 0) {
            break; 
        } else {
            alert("Please enter a valid non-negative number for the cups.");
        }
    }

    const waterPerCup = 200;       // ml
    const milkPerCup = 50;         // ml
    const teaLeavesPerCup = 1;     // tablespoon
    const sugarPerCup = 2;         // teaspoons

    const totalWater = numberOfCups * waterPerCup;
    const totalMilk = numberOfCups * milkPerCup;
    const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
    const totalSugar = numberOfCups * sugarPerCup;

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon${totalTeaLeaves === 1 ? '' : 's'}`); // handles pluralization
    console.log(`Sugar (Sukari): ${totalSugar} teaspoon${totalSugar === 1 ? '' : 's'}`); // handles pluralization
    console.log("\nEnjoy your Chai Bora!");
}
calculateChaiIngredients();