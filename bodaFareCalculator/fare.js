// Define the function as required
function calculateBodaFare() {
    // 1. Prompt the user for distance and convert to a number
    // The prompt message should match the example exactly.
    let distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

    // Convert the input to a number. parseFloat is good for decimal numbers too.
    let distanceInKm = parseFloat(distanceInput);

    // --- Basic input validation (Good practice, though not explicitly asked for) ---
    // This part adds a bit of robustness/creativity by ensuring valid input.
    if (isNaN(distanceInKm) || distanceInKm < 0) {
        console.log("Invalid input. Please enter a valid positive number for kilometers.");
        console.log("Panda Pikipiki! (with valid input next time)"); // A bit of a creative touch on error
        return; // Exit the function if input is invalid
    }

    // Define the fare calculation rules as constants
    const baseFare = 50; // KES
    const chargePerKm = 15; // KES

    // 3. Calculate the total estimated fare
    let distanceCharge = distanceInKm * chargePerKm; // Charge based on distance only
    let totalFare = baseFare + distanceCharge; // Total fare including base fare

    // 4. Print the result to the console in a user-friendly format
    // Match the example output precisely.
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceCharge}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`Panda Pikipiki!`); // Final cheerful message
}
