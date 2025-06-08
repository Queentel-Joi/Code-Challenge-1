const BASIC_FEE_RATE = 0.015; // 1.5%
const MIN_FEE = 10;           // KES 10
const MAX_FEE = 70;           // KES 70


function estimateTransactionFee(amountToSend) {
    
    const rawFee = amountToSend * BASIC_FEE_RATE;

    const feeAfterMin = Math.max(rawFee, MIN_FEE);

    const finalFee = Math.min(feeAfterMin, MAX_FEE);

    return finalFee;
}


function runFeeEstimator() {
    
    const userInput = prompt("Unatuma Ngapi? (KES):");

    const amountToSend = parseFloat(userInput);

    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Invalid amount. Please enter a positive number.");
        return; 
    }

    const calculatedFee = estimateTransactionFee(amountToSend);

    const totalAmountDebited = amountToSend + calculatedFee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
    console.log(`Total amount to be debited: KES ${totalAmountDebited}\n`); 
    console.log("Send Money Securely!");
}

console.log("--- Scenario 1: KES 500 ---");
runFeeEstimatorWithAmount(500); 

console.log("\n--- Scenario 2: KES 2000 ---");
runFeeEstimatorWithAmount(2000);

console.log("\n--- Scenario 3: KES 10000 ---");
runFeeEstimatorWithAmount(10000);

// Helper function to run the estimator directly with a given amount for testing purposes
// (This bypasses the prompt for automated testing of scenarios)
function runFeeEstimatorWithAmount(amount) {
    const calculatedFee = estimateTransactionFee(amount);
    const totalAmountDebited = amount + calculatedFee;

    console.log(`Sending KES ${amount}:`);
    console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
    console.log(`Total amount to be debited: KES ${totalAmountDebited}\n`);
    console.log("Send Money Securely!");
}


