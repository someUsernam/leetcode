function sortBy(arr, fn) {
	if (arr.length < 2) return arr;
	return arr.sort((a, b) => fn(a) - fn(b));
}
