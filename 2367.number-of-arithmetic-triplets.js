/*
 * @lc app=leetcode id=2367 lang=javascript
 *
 * [2367] Number of Arithmetic Triplets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    if(nums.length < 3) return 0;
    const map = {};
    let result = 0;
    for(let i=0; i<nums.length; i++){
       map[nums[i]] = i;
    }

    for(let i=0; i<nums.length; i++){
      if(nums[i] + diff in map && nums[i] + 2*diff in map){
        result++;
      }
    }

    return result;
};
// @lc code=end

