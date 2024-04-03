function sumOfDigits(n) {
	if (n < 10) return n;
	const strN = n.toString();
	return parseInt(strN[0]) + sumOfDigits(parseInt(strN.slice(1)));
}

console.log(sumOfDigits(123));
