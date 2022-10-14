// Create a function that calculates the chance of being an imposter. 
// The formula for the chances of being an imposter is 100 × (i / p) 
// where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.

// The player limit is 10 and the imposter count can only go up to 3.

const imposterFormula = (imposter, player) => (100 * imposter / player);

const result = imposterFormula(1, 10);

console.log(result + "%");