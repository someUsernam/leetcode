/*
 * @lc app=leetcode id=2016 lang=javascript
 *
 * [2016] Maximum Difference Between Increasing Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
  if(nums.length < 2) return -1
  let res = nums[1] - nums[0]
  let min = nums[0]
  for(let i=0;i<nums.length;++i){
    min = Math.min(min, nums[i])
    res = Math.max(res, nums[i] - min)
  }
  if(res <= 0) return -1
  return res
};
// @lc code=end

