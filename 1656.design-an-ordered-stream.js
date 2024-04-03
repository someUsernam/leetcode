/*
 * @lc app=leetcode id=1656 lang=javascript
 *
 * [1656] Design an Ordered Stream
 */

// @lc code=start
/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.stream = [];
  this.ptr = 1;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  const result = [];
  this.stream[idKey] = value;
  while(this.stream[this.ptr]){
    result.push(this.stream[this.ptr]);
    this.ptr++;
  }
  return result;
};
/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
// @lc code=end

