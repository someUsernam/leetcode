/*
 * @lc app=leetcode id=1252 lang=javascript
 *
 * [1252] Cells with Odd Values in a Matrix
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
function oddCells(m, n, indices) {
  const rowCount = new Array(m).fill(0);
  const colCount = new Array(n).fill(0);
  let oddRows = 0;
  let oddCols = 0;

  for(let i=0; i<indices.length; i++) {
    const [row, col] = indices[i];
    rowCount[row] ^= 1;
    colCount[col] ^= 1;
    oddRows += rowCount[row] ? 1 : -1;
    oddCols += colCount[col] ? 1 : -1;
  }

  return oddRows * (n - oddCols) + oddCols * (m - oddRows);
};

console.log(oddCells(2, 3,[[0,1],[1,1]]))
// @lc code=end

