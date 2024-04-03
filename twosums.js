const twoSum = function (nums, target) {
	const map = {};
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const complement = target - num;
		if (map[complement] !== undefined) {
			return [map[complement], i];
		}
		map[num] = i;
	}
};

const twoSum = function (nums, target) {
	const map = {};
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const complement = target - num;
		if (map[complement] !== undefined) {
			return [map[complement], i];
		}
		map[num] = i;
	}
};
