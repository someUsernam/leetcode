/*
 * @lc app=leetcode id=1470 lang=javascript
 *
 * [1470] Shuffle the Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  if(nums.length < 2) return nums;
  if(nums.length === 2) return [nums[0], nums[1]];
  const result = [];
  for(let i = 0, j = nums.length/2;i< nums.length/2;i++, j++) {
    result[i*2] = nums[i];
    result[i*2+1] = nums[j];
  }
  return result;
};
// @lc code=end

