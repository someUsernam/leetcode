/*
 * @lc app=leetcode id=804 lang=javascript
 *
 * [804] Unique Morse Code Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const transformedWords = new Set();
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const asciiFirstLetter = 97;
    for(let i=0; i<words.length; ++i){
        let transformedWord = '';
        for(let j=0; j<words[i].length; ++j){
          transformedWord += morse[words[i].charCodeAt(j) - asciiFirstLetter];
        }
        transformedWords.add(transformedWord);
    }

    return transformedWords.size;
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
// @lc code=end

