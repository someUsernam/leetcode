/*
 * @lc app=leetcode id=1431 lang=javascript
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const result = []
    let max = 0
    for(let i = 0; i < candies.length; i++){
      if(candies[i] > max){
        max = candies[i]
      }
    }
    for(let i = 0; i < candies.length; i++) {
      result.push(candies[i] + extraCandies >= max)
    }
    return result
};
// @lc code=end

