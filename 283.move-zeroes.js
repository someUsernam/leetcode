/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;

    for(let i=0; i<nums.length; ++i){
      if(nums[i] !== 0){
        nums[count++] = nums[i];
      }
    }

    while(count < nums.length){
      nums[count++] = 0;
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
// @lc code=end

