function reduce(nums, fn, init) {
	if (!nums.length) return init;
	let acc = init;
	for (let i = 0; i < nums.length; i++) {
		acc = fn(acc, nums[i]);
	}
	return acc;
}

console.log(reduce([1, 2, 3], (acc, num) => acc + num, 0));
