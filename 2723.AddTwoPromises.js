async function addTwoPromises(promise1, promise2) {
	return await Promise.all([promise1, promise2]).then((val) => val[0] + val[1]);
}
