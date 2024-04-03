/*
 * @lc app=leetcode id=2215 lang=javascript
 *
 * [2215] Find the Difference of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums2
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const answer = [[], []];
  let setNums1 = new Set(nums1)
  let setNums2 = new Set(nums2)

  for (let num of setNums1) {
    if (!setNums2.has(num)) {
      answer[0].push(num)
    }
  }

  for (let num of setNums2) {
    if (!setNums1.has(num)) {
      answer[1].push(num)
    }
  }

  return answer;

};

console.log(findDifference([1,2,3],[2,4,6]))

// @lc code=end

