/*
 * @lc app=leetcode id=2373 lang=javascript
 *
 * [2373] Largest Local Values in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
  let n = grid.length;
  let maxLocal = [];

  for(let i = 1; i < n - 1; ++i){
      for(let j = 1; j < n - 1; ++j){
          maxLocal[i - 1] = maxLocal[i - 1] || [];
          let maxVal = -Infinity;
          for(let dx = -1; dx <= 1; ++dx){
              for(let dy = -1; dy <= 1; ++dy){
                  maxVal = Math.max(maxVal, grid[i + dx][j + dy]);
              }
          }
          maxLocal[i - 1][j - 1] = maxVal;
      }
  }

  return maxLocal;
};
// @lc code=end

