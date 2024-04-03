/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(!prices || prices.length < 2) return 0
  let lastPrice = prices[0]
  let maxProfit = 0
  for(let i=1; i<prices.length; ++i){
    if(prices[i] < lastPrice){
      lastPrice = prices[i]
    }else{
      maxProfit = Math.max(maxProfit, prices[i] - lastPrice)
    }
  }
  if(maxProfit <= 0) return 0
  return maxProfit
};
// @lc code=end

