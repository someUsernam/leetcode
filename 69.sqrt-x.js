/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
	if (x === 0) return 0;
	if (x < 4) return 1;
	let left = 0;
	let right = x;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		const square = mid * mid;
		if (square === x) return mid;
		if (square < x) left = mid + 1;
		if (square > x) right = mid - 1;
	}
	return right;
}
// @lc code=end
