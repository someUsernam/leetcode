/*
 * @lc app=leetcode id=1356 lang=javascript
 *
 * [1356] Sort Integers by The Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  const n = arr.length;
  const res = [];
  for (let i = 0; i < n; i++) {
      res[i] = countBit(arr[i]) * 10001 + arr[i];
  }
  res.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
      res[i] %= 10001;
  }
  return res;
};

function countBit(n) {
  let res = 0;
  while (n !== 0) {
      res += (n & 1);
      n >>= 1;
  }
  return res;
}
// @lc code=end

