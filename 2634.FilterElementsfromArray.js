function filter(arr, fn) {
	if (!arr.length) return;
	let filteredArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i], i)) {
			filteredArr.push(arr[i]);
		}
	}
	return filteredArr;
}

console.log(filter([1, 2, 3, 4], (item, index) => item > 2));
