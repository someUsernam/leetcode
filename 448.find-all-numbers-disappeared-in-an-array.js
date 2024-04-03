/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const result = [];

  for(let i=0;i<nums.length;++i){
    let index = Math.abs(nums[i]) - 1;
    if(nums[index] > 0){
      nums[index] = -nums[index];
    }
  }

  for(let i=0;i<nums.length;++i){
    if(nums[i] > 0){
      result.push(i+1);
    }
  }

  return result;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]);

//[2,2] //1
//[1,1] //2
// @lc code=end

