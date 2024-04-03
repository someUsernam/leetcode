function createCounter(init) {
	let count = init;
	return {
		increment: () => ++count,
		decrement: () => --count,
		reset: () => (count = init),
	};
}

console.log(createCounter(5).increment());
console.log(createCounter(5).decrement());
console.log(createCounter(5).reset());
