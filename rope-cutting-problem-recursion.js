// function cutRope(n, a, b, c) {
// 	let res = 0;
// 	if (n === 0) return 0;
// 	if (n < 0) return -1;
// 	res = Math.max(
// 		cutRope(n - a, a, b, c),
// 		cutRope(n - b, a, b, c),
// 		cutRope(n - c, a, b, c),
// 	);
// 	return res === -1 ? -1 : res + 1;
// }

function cutRope(n, a, b, c) {
	if (n < 0) return 0;

	return -1;
}

console.log(cutRope(23, 12, 11, 9)); // 2
