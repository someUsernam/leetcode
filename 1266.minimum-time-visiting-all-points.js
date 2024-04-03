/*
 * @lc app=leetcode id=1266 lang=javascript
 *
 * [1266] Minimum Time Visiting All Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let seconds = 0;
    for(let i=0; i<points.length-1; i++) {
        let x = Math.abs(points[i][0] - points[i+1][0]);
        let y = Math.abs(points[i][1] - points[i+1][1]);
        seconds += Math.max(x, y);
    }

    return seconds;
};
// @lc code=end

