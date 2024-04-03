/*
 * @lc app=leetcode id=2006 lang=javascript
 *
 * [2006] Count Number of Pairs With Absolute Difference K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
  const hash = {};
  let count = 0;
  for (let n of nums) {
      if (hash[n]) count += hash[n];
      hash[n - k] ? hash[n - k] += 1: hash[n - k] = 1;
      hash[n + k] ? hash[n + k] += 1: hash[n + k] = 1;
  }

  console.log(hash);

  return count;
};
console.log(countKDifference([1,2,2,1], 1));
// @lc code=end

