/*
 * @lc app=leetcode id=2956 lang=javascript
 *
 * [2956] Find Common Elements Between Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
  const n1 = includeCommonArray(nums1,nums2);
  const n2 = includeCommonArray(nums2,nums1);
  return [n1.length,n2.length]
};

function includeCommonArray(arr1,arr2){
  let res = [];
  for(let i = 0; i < arr1.length; i++){
    if(arr2.includes(arr1[i])){
      res.push(arr1[i]);
    }
  }
  return res;
}
console.log(findIntersectionValues([4,3,2,3,1],[2,2,5,2,3,6]));
// @lc code=end

