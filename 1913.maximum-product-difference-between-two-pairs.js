/*
 * @lc app=leetcode id=1913 lang=javascript
 *
 * [1913] Maximum Product Difference Between Two Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
  let n = nums.length;
  nums.sort((a, b) => a - b);
  return nums[n - 1] * nums[n - 2] - nums[0] * nums[1];
};
// @lc code=end

