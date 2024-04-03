function once(fn) {
	let called = false;
	if (called) return;
	return function (...args) {
		if (!called) {
			called = true;
			return fn(...args);
		}
	};
}
