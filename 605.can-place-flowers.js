/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let accesible = 0;
  for(let i=0;i<flowerbed.length; i += 1){
    if(flowerbed[i] === 0 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1){
      accesible++;
      flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0;
};
// @lc code=end

