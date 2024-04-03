/*
 * @lc app=leetcode id=1313 lang=javascript
 *
 * [1313] Decompress Run-Length Encoded List
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const result = [];
    for(let i=0; i< nums.length; ++i){
      let freq = nums[2*i];
      let val = nums[2*i+1];

      while(freq > 0){
        result.push(val);
        freq--;
      }
    }
    return result;
};
// @lc code=end

