/*
 * @lc app=leetcode id=1572 lang=javascript
 *
 * [1572] Matrix Diagonal Sum
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let sum = 0;
  let n =mat.length;
  let midIndex = Math.floor(n / 2);
  for(let i=0; i<n ; ++i){
    sum +=mat[i][i];
  }
  for(let i=0; i<n; ++i){
    sum += mat[i][n-i-1];
  }

  return n % 2 === 0 ? sum : sum - mat[midIndex][midIndex];
};
console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]))
// @lc code=end

