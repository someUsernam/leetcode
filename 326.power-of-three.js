/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n === 0) return false
    if(n === 1) return true
    return isPowerOfThree(n/3)
};


// @lc code=end

