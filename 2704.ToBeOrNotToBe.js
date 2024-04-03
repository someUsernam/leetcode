function expect(val) {
	return {
		toBe(val2) {
			if (val === val2) return true;
			throw new Error("Not Equal");
		},
		notToBe(val2) {
			if (val !== val2) return true;
			throw new Error("Equal");
		},
	};
}
const o = {};
console.log(expect(o).toBe(o));
