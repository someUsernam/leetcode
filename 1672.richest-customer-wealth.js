/*
 * @lc app=leetcode id=1672 lang=javascript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0
    let sum = 0
    for(let i=0; i< accounts.length; i++){
      for(let j=0; j<accounts[i].length; j++){
        sum += accounts[i][j];
      }
      if(sum > max){
        max = sum;
      }
      sum = 0;
    }
    return max;
};
// @lc code=end

