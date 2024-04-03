function chunk(arr, size) {
	if (!arr.length) return [];
	if (size === 0) return arr;
	while (arr.length) {
		return [arr.splice(0, size)].concat(chunk(arr, size));
	}
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
