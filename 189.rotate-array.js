/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if(nums.length < 2) return nums
  if(k > nums.length) k = k % nums.length

  reverse(nums, nums.length - k, nums.length - 1)
  reverse(nums,0, nums.length - k - 1 )
  reverse(nums, 0, nums.length - 1)

  return nums
};

function reverse(nums, start, end) {
  while(start < end){
    let temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
}

console.log(rotate([1,2,3,4,5,6,7], 3))
// @lc code=end

