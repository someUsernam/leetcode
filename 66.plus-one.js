/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
	const toNum = BigInt(digits.join(""));
	return (toNum + 1n).toString().split("").map(BigInt);
}

console.log(plusOne([1, 2, 3]));
// @lc code=end
