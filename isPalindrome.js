function isPalindrome(x) {
	x = x.toString();
	return x.split("").reverse().join("") === x ? true : false;
}

console.log(isPalindrome(121));
