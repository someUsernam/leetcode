/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1, m, nums2, n) {
	if (!nums1 || !nums2) return 0;
	let i = m - 1;
	let j = n - 1;
	let k = m + n - 1;
	while (i >= 0 && j >= 0) {
		if (nums1[i] > nums2[j]) {
			nums1[k] = nums1[i];
			i--;
		} else {
			nums1[k] = nums2[j];
			j--;
		}
		k--;
	}
	while (j >= 0) {
		nums1[k] = nums2[j];
		k--;
		j--;
	}
	return nums1;
}

// @lc code=end

/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1, m, nums2, n) {
	if (!nums1 || !nums2) return 0;
	let i = m - 1;
	let j = n - 1;
	let k = m + n - 1;
	while (i >= 0 && j >= 0) {
		if (nums1[i] > nums2[j]) {
			nums1[k] = nums1[i];
			i--;
		} else {
			nums1[k] = nums2[j];
			j--;
		}
		k--;
	}
	while (j >= 0) {
		nums1[k] = nums2[j];
		k--;
		j--;
	}
	return nums1;
}

// @lc code=end
