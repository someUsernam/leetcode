/*
 * @lc app=leetcode id=1720 lang=javascript
 *
 * [1720] Decode XORed Array
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  const result = [first]
  let index = 1
  for(let i =0 ;i< encoded.length; ++i){
    result[index] = (result[result.length-1] ^ encoded[i])
    index++
  }

  return result
};
// @lc code=end

