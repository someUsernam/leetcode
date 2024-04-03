/*
 * @lc app=leetcode id=747 lang=javascript
 *
 * [747] Largest Number At Least Twice of Others
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] > max) max = nums[i]
  }

  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== max && nums[i] * 2 > max) return -1
  }

  return nums.indexOf(max)
};
// @lc code=end

