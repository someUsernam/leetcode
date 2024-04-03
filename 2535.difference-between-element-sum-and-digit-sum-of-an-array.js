/*
 * @lc app=leetcode id=2535 lang=javascript
 *
 * [2535] Difference Between Element Sum and Digit Sum of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  let sum = 0;
  let digitSum = 0;
  for(let i=0; i<nums.length; ++i){
    sum += nums[i];
    digitSum += nums[i] < 10 ? nums[i] : getDigitSum(nums[i]);
  }
  return abs(sum - digitSum);
};
function abs(x){
  return x >= 0 ? x : 0 - x
}
function getDigitSum(num){
  let sum = 0;
  while(num){
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
// @lc code=end

