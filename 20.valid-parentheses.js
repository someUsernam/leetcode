/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
	const stack = [];
	const map = {
		"(": ")",
		"{": "}",
		"[": "]",
	};

	for (let i = 0; i < s.length; i++) {
		if (map[s[i]]) {
			stack.push(s[i]);
		} else if (map[stack.pop()] !== s[i]) {
			return false;
		}
	}

	return !stack.length;
}

console.log(isValid("({[{[()]})"));
// @lc code=end

/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
	const stack = [];
	const map = {
		"(": ")",
		"{": "}",
		"[": "]",
	};

	for (let i = 0; i < s.length; i++) {
		if (map[s[i]]) {
			stack.push(s[i]);
		} else if (map[stack.pop()] !== s[i]) {
			return false;
		}
	}

	return !stack.length;
}

console.log(isValid("({[{[()]})"));
// @lc code=end
