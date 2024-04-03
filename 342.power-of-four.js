/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// isPowerOfFour = function(n) {
//     if(n === 0) return false
//     if(n === 1) return true
//     return isPowerOfFour(n/4)
// };

function isPowerOfFour(n){
  if (n === 1) return true
  return (n > 0) && ((n & (n-1)) == 0) && ((n % 4) == 0)
}


// @lc code=end

