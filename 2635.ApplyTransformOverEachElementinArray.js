function map(arr, fn) {
	if (!arr.length) return [];
	if (!fn) return arr || [];
	const returnedArr = [];
	for (let i = 0; i < arr.length; i++) {
		returnedArr.push(fn(arr[i], i));
	}
	return returnedArr;
}

console.log(map([1, 2, 3, 4], (item, index) => item * 2));
