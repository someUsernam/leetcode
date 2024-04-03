/*
 * @lc app=leetcode id=2798 lang=javascript
 *
 * [2798] Number of Employees Who Met the Target
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
  if(!hours || !hours.length) return 0;
  let result = 0;
  for(let i=0;i<hours.length;++i){
    if(hours[i] >= target) result++;
  }
  return result;
};
// @lc code=end

