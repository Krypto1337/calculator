function add(input) {
	const sum = input.reduce((total, currentNumber) => {
		return total + currentNumber;
	}, 0);
	return sum;
}

console.log(add([1, 2, 3, 4, 5]));
