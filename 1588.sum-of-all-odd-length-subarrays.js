/*
 * @lc app=leetcode id=1588 lang=javascript
 *
 * [1588] Sum of All Odd Length Subarrays
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum= 0;
    let n = arr.length;
    for(let i=0; i<n;++i){
      let contribution = Math.ceil(((i+1)*(n-i))/2);
      sum += contribution*arr[i];
    }
    return sum;
};
// @lc code=end

