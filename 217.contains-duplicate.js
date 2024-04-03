/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
  const elementCount = {};
  let containDupe = false;

  for(const num of nums){
    !elementCount[num] ? elementCount[num] = 1 : elementCount[num]++;
  }
  for(const key in elementCount){
    if(elementCount[key] > 1){
      containDupe = true;
    }
  }
  return containDupe;
};
// @lc code=end

