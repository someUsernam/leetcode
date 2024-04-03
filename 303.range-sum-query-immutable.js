/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  if(left === right) return this.nums[left];
  if(left > right) return 0;

  let sum = 0;
  for(let i = left; i <= right; i++) {
    sum += this.nums[i];
  }
};

console.log(new NumArray([-2, 0, 3, -5, 2, -1]).sumRange(0, 2));

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

