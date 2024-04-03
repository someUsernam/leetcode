/*
 * @lc app=leetcode id=1662 lang=javascript
 *
 * [1662] Check If Two String Arrays are Equivalent
 */

// @lc code=start
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let result = false;
    const word1Str = word1.join('');
    const word2Str = word2.join('');
    if(word1Str === word2Str){
      result = true;
    }
    return result;
};
// @lc code=end

