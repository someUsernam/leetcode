/*
 * @lc app=leetcode id=2574 lang=javascript
 *
 * [2574] Left and Right Sum Differences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
  if(nums.length < 2) return [0]
  let leftSum = [0]
  let rightSum = [0]
  let result = []
  for(let i=0 ;i< nums.length ; ++i){
    if(nums.length - i -1){
      leftSum[i+1] = leftSum[i] + nums[i]
      rightSum[i+1] = rightSum[i] + nums[nums.length -1 -i]
    }
  }
  for(let i=0 ;i< nums.length ; ++i){
    result[i] = Math.abs(leftSum[i] - rightSum[nums.length -1 -i])
  }
  return result
};
// @lc code=end

