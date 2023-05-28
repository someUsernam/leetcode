/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
	if (!nums.length) return 0;
	let k = 1;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < nums[i + 1]) {
			nums[k] = nums[i + 1];
			k++;
		}
	}
	return k;
}
// @lc code=end
