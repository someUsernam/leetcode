/*
 * @lc app=leetcode id=2553 lang=javascript
 *
 * [2553] Separate the Digits in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let digits = [];
    while(num > 0){
      digits.unshift(num % 10);
      num = Math.floor(num / 10);
    }
    result.push(...digits);
  }
  return result;
};
// @lc code=end

