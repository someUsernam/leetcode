// function strSubsets(str) {
// 	const res = [];
// 	if (str.length === 0) {
// 		res.push("");
// 		return res;
// 	}

// 	if (str.length > 0) {
// 		res.push(str);
// 		res.push(str[0]);
// 		for (let i = 1; i < str.length; i++) {
// 			res.push(str[0].concat(str[i]));
// 		}
// 		strSubsets(str.slice(1));
// 	}
// 	return res;
// }

// function strSubsets(str) {
// const res = [];
// let subStr = "";
// if (subStr.length === str.length) {
// res.push(subStr);
// return res;
// }
// if (subStr.length < str.length) {
// }
// }
// console.log(strSubsets("abc"));

// function powerSet(str, subStr = "", i = 0) {
// 	if (i === str.length) {
// 		console.log(subStr);
// 		return;
// 	}
// 	powerSet(str, subStr, i + 1);
// 	powerSet(str, subStr + str[i], i + 1);
// }

// console.log(powerSet("abc"));
