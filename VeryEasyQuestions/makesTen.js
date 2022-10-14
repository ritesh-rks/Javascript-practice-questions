// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
const makesTen = (a, b) => ((a === 10 || b === 10) || (a + b === 10))

const result = makesTen(9,1);

console.log(result);
