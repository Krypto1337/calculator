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

console.log(add([1, 2, 3, 4, 5]));
console.log(subtract([55, 6, 7]));
