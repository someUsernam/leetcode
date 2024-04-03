/*
 * @lc app=leetcode id=2500 lang=javascript
 *
 * [2500] Delete Greatest Value in Each Row
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
function deleteGreatestValue(grid) {
    const nums = new Set();
    let rows = grid.length;
    let cols = grid[0].length;
    let max = 0;
    let colIndex = 0
    for(let i=0; i<rows; ++i){
      grid[i][colIndex]
    }


};

console.log(deleteGreatestValue([[1,2,4],[3,3,1]]))
// @lc code=end

