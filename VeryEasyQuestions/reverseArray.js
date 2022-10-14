//Write a function to reverse an array.

const reverseArray = arr => arr.reverse();

const result = reverseArray([1, 2, 3, 4, 5]);

console.log(result);


// loop method

function reverse(arr) {
	let result = [];
	for (let i = arr.length -1; i > -1; i--) {
		result.push(arr[i]);
	}
	
	console.log(...result);
	return result;
}
console.log(reverse([1,2,3,4,5]));