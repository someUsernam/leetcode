/*
 * @lc app=leetcode id=1684 lang=javascript
 *
 * [1684] Count the Number of Consistent Strings
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    let allowedSet = new Set(allowed);
    for(let i=0;i<words.length;++i){
        let word = words[i]
        for(let j=0; j<word.length;++j){
            if(!allowedSet.has(word[j])){
              break;
            }
            if(j === word.length-1){
                count++;
            }
        }
    }

    return count;
};

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));

// @lc code=end

