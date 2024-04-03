/*
 * @lc app=leetcode id=1534 lang=javascript
 *
 * [1534] Count Good Triplets
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
  if(arr.length < 3) return 0;
  let result = 0
  let n = arr.length;
  for(let i = 0; i < n - 2; i++) {
    for(let j = i + 1; j < n - 1; j++) {
      if(Math.abs(arr[i] - arr[j]) > a) continue;
      for(let k = j + 1; k < n; k++) {
        if(Math.abs(arr[j] - arr[k]) > b) continue;
        if(Math.abs(arr[k] - arr[i])<= c){
        result++;
      }
      }
    }
  }
  return result
};
// @lc code=end

