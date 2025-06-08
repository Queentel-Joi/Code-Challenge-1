## 1. Chai Calculator

### Description
This estimator is designed to calculate the total cost of purchasing chai (tea) based on the number of cups, the type of milk used, and whether sugar is added, demonstrating how different choices influence the final price.

**Core Logic / Rules:**
* A base price is set per cup of chai.
* Choosing "soya" milk adds a specific premium per cup.
* "Dairy" milk and "no milk" (black tea) do not incur extra milk costs.
* "Sweet" (with sugar) and "unsweetened" options do not affect the price.

**Inputs:**
* `numberOfCups`: (Number) The quantity of chai cups desired.
* `milkType`: (String) e.g., `"dairy"`, `"soya"`, `"none"`.
* `sugarPreference`: (String) e.g., `"sweet"`, `"unsweetened"`.

**Output:**
* `totalChaiCost`: (Number) The calculated total cost of the chai.

### Project Setup
This challenge is conceptual and can be implemented in any programming language. For a JavaScript implementation:
1.  Create a new JavaScript file (e.g., `chaiCalculator.js`).
2.  Define a function (e.g., `calculateChaiCost`) that accepts the inputs.
3.  Implement the pricing logic using `if/else` statements or a `switch` case.
4.  You can use `console.log()` to display the output, or integrate it into a simple web page.

---

## 2. Bodaboda Fare Calculator

### Description
This estimator aims to provide a simplified calculation for the fare of a bodaboda (motorcycle taxi) trip. It takes into account the distance traveled and may consider other factors like time of day or specific conditions for dynamic pricing.

**Core Logic / Rules:**
* A fixed `baseFare` applies to every trip.
* An additional `costPerKilometer` is charged based on the `distanceKm`.
* (Conceptual Extension): Potential surcharges can be applied for "peak" hours or "rainy" weather, demonstrating more complex conditional logic.

**Inputs:**
* `distanceKm`: (Number) The length of the trip in kilometers.
* `timeOfDay`: (String, optional) e.g., `"off-peak"`, `"peak"`.
* `weatherConditions`: (String, optional) e.g., `"clear"`, `"rainy"`.

**Output:**
* `estimatedFare`: (Number) The calculated estimated fare for the bodaboda trip.

### Project Setup
Similar to the Chai Calculator, this is a conceptual challenge. For a JavaScript implementation:
1.  Create a new JavaScript file (e.g., `bodabodaFareCalculator.js`).
2.  Define a function (e.g., `estimateBodabodaFare`) that accepts `distanceKm` and optional parameters.
3.  Implement the fare calculation logic, including any conditional surcharges.
4.  Use `console.log()` for output.

---

## 3. Simplified Mobile Money Transaction Fee Estimator

### Description
This estimator calculates the transaction fee for sending money via a mobile money service. It applies a percentage-based fee but strictly adheres to predefined minimum and maximum fee limits, making it a practical example of clamping values.

**Core Logic / Rules:**
* **Basic Rate:** The fee is initially calculated as `1.5%` of the `amountToSend`.
* **Minimum Fee:** If the calculated fee is less than `KES 10`, the fee defaults to `KES 10`.
* **Maximum Fee:** If the calculated fee exceeds `KES 70`, the fee is capped at `KES 70`.

**Inputs:**
* `amountToSend`: (Number) The amount of money the user wishes to send in Kenyan Shillings (KES).

**Output (Console):**
The estimator prints formatted output to the console, including:
* The amount being sent.
* The calculated transaction fee.
* The total amount to be debited (amount sent + transaction fee).
* A concluding message.

### Project Setup
This estimator was specifically implemented in JavaScript and designed for quick execution in a browser console:
1.  **Open your web browser's developer console:**
    * Right-click on any webpage and select "Inspect" or "Inspect Element."
    * Navigate to the "Console" tab.
2.  **Paste the code:** Copy the entire JavaScript code for the `estimateTransactionFee` and `runFeeEstimator` functions into the console and press Enter.
3.  **Run the interactive version (optional):** To test with user input, type `runFeeEstimator()` into the console and press Enter. A prompt will appear.
4.  **Observe pre-defined scenarios:** The provided code typically includes direct calls for example scenarios (e.g., for KES 500, KES 2000, KES 10000), and their results will appear immediately in the console.

### Technologies Used
* JavaScript
* `prompt()` (for browser-based user input)
* `console.log()` (for output)
* `Math.min()` and `Math.max()` (for efficiently applying fee limits)

---

## Author
Queentel Joi

## License
All Rights Reserved.
