// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points

const footballPoints = (win, draw, loss) => (win * 3 + draw * 1 + loss * 0);

const result = footballPoints(3, 4, 2);
console.log(result);