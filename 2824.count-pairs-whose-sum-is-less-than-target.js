/*
 * @lc app=leetcode id=2824 lang=javascript
 *
 * [2824] Count Pairs Whose Sum is Less than Target
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
  let result = 0
  for(let i = 0; i< nums.length; ++i){
    for(let j = i+1; j< nums.length; ++j){
      if(nums[i] + nums[j] < target){
        result++
      }
    }
  }

  return result
};
// @lc code=end

