/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const result = []
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    result.push(sum)
  }

  return result
};
// @lc code=end

