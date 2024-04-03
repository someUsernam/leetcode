/*
 * @lc app=leetcode id=1863 lang=javascript
 *
 * [1863] Sum of All Subset XOR Totals
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  let res = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    res |= nums[i];
  }

  return res*(1<<(n-1))
};
// @lc code=end

