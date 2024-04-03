/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  const hashMap = {};
  let result = 0;

  for(const num of nums){
    if(!hashMap[num]) hashMap[num] = 0;
    hashMap[num]++;
  }

  for(const num of nums){
    if(hashMap[num] > 1){
      result += hashMap[num] - 1;
      hashMap[num]--;
    }
  }

  return result;
};
// @lc code=end

