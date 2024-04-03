/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined && i - map[nums[i]] <= k) {
      return true;
    }
    map[nums[i]] = i;
  }
  
  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));
// @lc code=end

