/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function(nums) {
  let first = second = third = -Infinity

  for(let i=0; i<nums.length; i++){
    if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
    if(nums[i] > first) [first, second, third] = [nums[i], first, second]
    else if(nums[i] > second) [second, third] = [nums[i], second]
    else if(nums[i] > third) third = nums[i]
  }

  return third === -Infinity ? first : third
};

thirdMax([1,-2147483648,2]);
// @lc code=end

