function calculateBodaFare() {
    
    let distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

    let distanceInKm = parseFloat(distanceInput);

    if (isNaN(distanceInKm) || distanceInKm < 0) {
        console.log("Invalid input. Please enter a valid positive number for kilometers.");
        console.log("Panda Pikipiki! (with valid input next time)"); // A bit of a creative touch on error
        return; 
    }
    const baseFare = 50; // KES
    const chargePerKm = 15; // KES

    let distanceCharge = distanceInKm * chargePerKm; 
    let totalFare = baseFare + distanceCharge; 

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceCharge}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`Panda Pikipiki!`); // Final cheerful message
}
