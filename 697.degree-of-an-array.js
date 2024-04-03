/*
 * @lc app=leetcode id=697 lang=javascript
 *
 * [697] Degree of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let min = 0;

  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num] === undefined) {
      map[num] = [1, i, i];
    } else {
      map[num][0]++;
      map[num][2] = i;
    }
  }

  let max = 0;

  for (const key in map) {
    const [count, start, end] = map[key];
    if (count > max) {
      max = count;
      min = end - start + 1;
    } else if (count === max) {
      min = Math.min(min, end - start + 1);
    }
  }

  return min;
};
// @lc code=end

