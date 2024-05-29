function add(input) {
	const sum = input.reduce((total, currentNumber) => {
		return total + currentNumber;
	}, 0);
	return sum;
}

function subtract(input) {
	const difference = input.reduce((total, currentNumber) => {
		return total - currentNumber;
	});
	return difference;
}

function multiply(input) {
	const product = input.reduce((total, currentNumber) => {
		return total * currentNumber;
	}, 1);
	return product;
}

function divide(input) {
	const quotient = input.reduce((total, currentNumber) => {
		return total / currentNumber;
	});
	return quotient;
}

console.log(add([1, 2, 3, 4, 5]));
console.log(subtract([55, 6, 7]));
console.log(multiply([10, 2, 5]));
console.log(divide([55, 11, 5]));
