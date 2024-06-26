/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
	if (strs.length === 0) {
		return "";
	}
	for (let i = 0; i < strs[0].length; i++) {
		for (let j = 0; j < strs.length; j++) {
			if (strs[j][i] !== strs[0][i]) {
				return strs[0].slice(0, i);
			}
		}
	}
	return strs[0];
}
// @lc code=end\problems\longest-common-prefix\solution\
console.log(longestCommonPrefix(["flower", "flow", "flight"]));

/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
	if (strs.length === 0) {
		return "";
	}
	for (let i = 0; i < strs[0].length; i++) {
		for (let j = 0; j < strs.length; j++) {
			if (strs[j][i] !== strs[0][i]) {
				return strs[0].slice(0, i);
			}
		}
	}
	return strs[0];
}
// @lc code=end\problems\longest-common-prefix\solution\
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
