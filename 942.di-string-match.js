/*
 * @lc app=leetcode id=942 lang=javascript
 *
 * [942] DI String Match
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  let largest = s.length
  let smallest = 0;
  let answer = [];

  for (let i = 0; i <= s.length; i++) {
    if(s[i] === 'I'){
      answer.push(smallest);
      smallest++;
    }else {
      answer.push(largest);
      largest--;
    }
  }

  return answer;
};
// @lc code=end

