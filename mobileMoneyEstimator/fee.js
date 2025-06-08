function estimateTransactionFee() {

    let amountToSend;
    while (true) {
        const input = prompt("Unatuma ngapi? (KES)");
        amountToSend = parseFloat(input);

        if (!isNaN(amountToSend) && amountToSend > 0) {
            break;
        } else {
            alert("Please enter a valid positive number for the amount to send.");
        }
    }

    const FEE_PERCENTAGE = 0.015; // 1.5%
    const MIN_FEE = 10;           // KES 10
    const MAX_FEE = 70;           // KES 70

    let calculatedFee = amountToSend * FEE_PERCENTAGE;

    calculatedFee = Math.max(calculatedFee, MIN_FEE);

    calculatedFee = Math.min(calculatedFee, MAX_FEE);

    const totalAmountDebited = amountToSend + calculatedFee;

    console.log(`Sending KES ${amountToSend}`);
    console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
    console.log(`Total amount to be debited: KES ${totalAmountDebited}`);
    console.log("\nSend Money Securely!");
}

estimateTransactionFee();