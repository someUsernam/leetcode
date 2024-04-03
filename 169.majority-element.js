/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [3,2,3];

// var majorityElement = function(nums) {
//   const elementCount = {};
//   for(let i = 0; i < nums.length; i++){
//     if(!elementCount[nums[i]]){
//       elementCount[nums[i]] = 1;
//     }else {
//       elementCount[nums[i]]++;
//     }
//   }

//   console.log(elementCount);
//   let max;
//   for(let key in elementCount){
//     if(elementCount[key] > nums.length / 2){
//       max = key;
//     }
//   }

//   return max;
// };



majorityElement(nums);
// @lc code=end

