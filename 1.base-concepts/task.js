"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c // формула дискриминанта

	if (discriminant < 0) { // return arr 

	} else if (discriminant === 0) {
		arr[0] = (-b / (2 * a));

	} else if (discriminant > 0) {
		arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
		arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
	}

	return arr;
}

function calculateTotalMortgage(interestRate, contribution, amount, countMonths) {
	if (isNaN(interestRate) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}

	interestRate = interestRate / 100 / 12;

	let loanBody = amount - contribution;
	let Payment = loanBody * (interestRate + (interestRate / ((Math.pow((1 + interestRate), countMonths)) - 1)));
	let totalPayment = Payment * countMonths;

	totalPayment = Number(totalPayment.toFixed(2));

	return totalPayment;
}