/*
 * @lc app=leetcode id=2859 lang=javascript
 *
 * [2859] Sum of Values at Indices With K Set Bits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
  let sum = 0;

  for(let i = 0; i < nums.length; ++i){
    let setBitsCount = countSetBits(i);

    if(setBitsCount === k){
      sum += nums[i];
    }
  }

  return sum;
};

function countSetBits(n) {
  let count = 0;
  while (n) {
    n &= (n - 1);
    count++;
  }
  return count;
};
// @lc code=end

