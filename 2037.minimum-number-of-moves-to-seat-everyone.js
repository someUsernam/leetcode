/*
 * @lc app=leetcode id=2037 lang=javascript
 *
 * [2037] Minimum Number of Moves to Seat Everyone
 */

// @lc code=start
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let sum = 0;
    seats.sort((a,b) => a-b);
    students.sort((a,b) => a-b);

    for (let i = 0; i < seats.length; i++) {
        sum += Math.abs(seats[i] - students[i]);
    }

    return sum;
};
// @lc code=end

