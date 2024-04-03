/*
 * @lc app=leetcode id=1299 lang=javascript
 *
 * [1299] Replace Elements with Greatest Element on Right Side
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  if(arr.length < 2) return [-1]
  let max = arr[arr.length - 1]
  for(let i = arr.length - 2; i >= 0; i--){
    let temp = arr[i]
    arr[i] = max
    if(temp > max) max = temp
  }
  arr[arr.length - 1] = -1

  return arr
};

console.log(replaceElements([17,18,5,4,6,1]))
// @lc code=end

