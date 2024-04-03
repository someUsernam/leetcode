function compose(functions) {
	if (!functions.length) return (x) => x;
	if (functions.length === 1) return functions[0];
	return function (x) {
		for (let i = functions.length - 1; i >= 0; i--) {
			x = functions[i](x);
		}
		return x;
	};
}

// function compose(functions) {
// 	return function (x) {
// 		return functions.reduceRight((acc, fn) => fn(acc), x);
// 	};
// }

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4));
