/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const result = []
  const map = {};
  for (let i = 0; i < nums2.length; ++i) {
      let nextIndex = i+1
      while (nums2[nextIndex] <= nums2[i]){
         ++nextIndex
      }
      map[nums2[i]] = nums2[nextIndex] || -1
  }

  for (let i = 0; i < nums1.length; ++i)
  result[i] = map[nums1[i]]

  return result;
};
// @lc code=end

