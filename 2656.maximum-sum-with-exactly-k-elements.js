/*
 * @lc app=leetcode id=2656 lang=javascript
 *
 * [2656] Maximum Sum With Exactly K Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let sum = 0;
    let max=0
    for(let i = 0; i < nums.length; i++) {
      max = Math.max(max, nums[i])
    }
    for (let i = 0; i < k; i++) {
      sum += max;
      max += 1
    }
    return sum;
};
// @lc code=end

