/*
 * @lc app=leetcode id=2011 lang=javascript
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    const map = {
      '++X': 1,
      'X++': 1,
      '--X': -1,
      'X--': -1,
    }

    let result = 0;

    for(const operation of operations){
      result += map[operation];
    }

    return reslu
};
// @lc code=end

