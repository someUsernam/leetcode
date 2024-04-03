/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    console.log(nums[i]);
    sum += nums[i];
  }
  return sum;
};

console.log(arrayPairSum([1,4,3,2]));
// @lc code=end

