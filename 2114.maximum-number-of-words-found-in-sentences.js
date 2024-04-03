/*
 * @lc app=leetcode id=2114 lang=javascript
 *
 * [2114] Maximum Number of Words Found in Sentences
 */

// @lc code=start
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    for(let i=0; i< sentences.length; ++i){
      max = Math.max(max,sentences[i].split(' ').length)
    };
    return max;
};
// @lc code=end

