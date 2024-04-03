/*
 * @lc app=leetcode id=2744 lang=javascript
 *
 * [2744] Find Maximum Number of String Pairs
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
  let dedupeStrings = new Set()
  for (let i = 0; i < words.length; i++) {
      words[i][0] > words[i][1]
      ? dedupeStrings.add(words[i][1] + words[i][0])
      : dedupeStrings.add(words[i][0] + words[i][1])
  }

  return words.length - dedupeStrings.size;
};
// @lc code=end

