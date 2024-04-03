/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//   x = x.toString();
//   return x.split("").reverse().join("") === x ? true : false;
// };

function isPalindrome(x){
  x = x.toString();
  let start = 0;
  let end = x.length - 1;
  if (x < 0) return false;
  if (x.length === 1) return true;
  if (start >= end) return true
  if (x[start] === x[end]){
    start++;
    end--;
    return isPalindrome(x.slice(start, end + 1));
  }
  return false;
}

const x = isPalindrome(12321)
console.log(x)


// @lc code=end

