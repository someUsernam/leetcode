function checkIfInstanceOf(obj, classFunction) {
	if (obj == null || typeof classFunction !== "function") return false;
	return Object(obj) instanceof classFunction;
}

console.log(checkIfInstanceOf(Date, Date));
