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

function operate(num1, num2, operator) {
	const array = [];
	array.push(num1, num2);

	switch (operator) {
		case "+":
			return add(array);
		case "-":
			return subtract(array);
		case "*":
			return multiply(array);
		case "/":
			return divide(array);
	}
}

console.log(operate(10, 5, "*"));
