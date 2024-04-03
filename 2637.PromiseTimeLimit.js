// function timeLimit(fn, t) {
// 	return async function (...args) {
// 		const promise = fn(...args);
// 		const timeoutId = new Promise((_, rej) => {
// 			clearTimeout(timeoutId);
// 			setTimeout(() => rej("Time Limit Exceeded"), t);
// 		});

// 		return Promise.race([promise, timeoutId]);
// 	};
// }

function timeLimit(fn, t) {
	return async function (...args) {
		const promise = fn(...args);
		const timeout = new Promise((_, reject) => {
			setTimeout(() => reject("Time Limit Exceeded"), t);
		});

		return Promise.race([promise, timeout]);
	};
}
