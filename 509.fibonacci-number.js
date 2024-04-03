/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(7));

// @lc code=end

