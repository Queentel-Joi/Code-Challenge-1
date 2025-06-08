function calculateBodaFare() {
    
    let distanceInKm;
    while (true) {
        const input = prompt("Unafika wapi? Mkubwa? Kilometer ngapi?:");
        distanceInKm = parseFloat(input); 

        if (!isNaN(distanceInKm) && distanceInKm >= 0) {
            break; // Exit loop if input is valid
        } else {
            alert("Please enter a valid non-negative number for the distance in kilometers.");
        }
    }

    const BASE_FARE = 50; // KES
    const CHARGE_PER_KM = 15; // KES per kilometer

    // 3. Calculate the total estimated fare
    const kilometerCharge = distanceInKm * CHARGE_PER_KM;
    const totalFare = BASE_FARE + kilometerCharge;

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${BASE_FARE}`);
    console.log(`Mpaka Uko: KES ${kilometerCharge}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki!");
}

calculateBodaFare();