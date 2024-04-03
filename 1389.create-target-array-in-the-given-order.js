/*
 * @lc app=leetcode id=1389 lang=javascript
 *
 * [1389] Create Target Array in the Given Order
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  const n = nums.length;
  const target = [];
  for (let i = 0; i < n; ++i) {
    let idx = index[i];
    let num = nums[i];
    if(idx >= i){
      target[idx] = num
    }else{
      for (let k = i; k > idx; k--) {
        target[k] = target[k - 1];
      }
      target[idx] = num
    }
  }
  return target;
};
// @lc code=end

