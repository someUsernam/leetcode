/*
 * @lc app=leetcode id=1464 lang=javascript
 *
 * [1464] Maximum Product of Two Elements in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = 0;
  let secondMax = 0;
  for (const num of nums) {
    if(num > max){
      secondMax = max;
      max = num;
    }else if(num > secondMax){
      secondMax = num;
    }
  }

  return (max - 1) * (secondMax - 1);
};
// @lc code=end

