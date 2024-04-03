/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
function summaryRanges(nums) {
  if (nums.length === 0) return [];
  const stack = [nums[0]];
  const result = [];
  for(let i = 1; i < nums.length; ++i){
    if(nums[i] - stack[stack.length - 1] === 1){
      stack.push(nums[i]);
    } else {
      if(stack.length > 1){
        result.push(`${stack[0]}->${stack[stack.length - 1]}`);
      } else {
        result.push(stack[0] + '');
      }
      stack.length = 0;
      stack.push(nums[i]);
    }
  }
  if(stack.length > 1){
    result.push(`${stack[0]}->${stack[stack.length - 1]}`);
  } else {
    result.push(stack[0] + '');
  }
  return result;
};


console.log(summaryRanges([0,2,3,4,6,8,9]))
// @lc code=end

