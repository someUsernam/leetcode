/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const arr = Array(nums.length+1).fill(0);
    let missing = 0;

    for(let i=0; i<nums.length; ++i){
      arr[nums[i]] = nums[i];
    }

    for(let i=1; i<arr.length; ++i){
      if(arr[i] === 0) {
        missing = i;
        break;
      }
    }

    return missing;
};

missingNumber([3,0,1]);
// @lc code=end

