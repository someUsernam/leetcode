/*
 * @lc app=leetcode id=2960 lang=javascript
 *
 * [2960] Count Tested Devices After Test Operations
 */

// @lc code=start
/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
  let countTestedDevices = 0;
  for (let i = 0; i < batteryPercentages.length; i++) {
    if(batteryPercentages[i] - countTestedDevices > 0){
      countTestedDevices++;
    }
  }
  return countTestedDevices;
};
// @lc code=end

