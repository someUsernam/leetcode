function cancellable(fn, args, t) {
	const timeoutID = setTimeout(fn, t, ...args);
	return () => clearTimeout(timeoutID);
}

fn = (x) => x * 5;
args = [2];
t = 20;
cancelTime = 50;
console.log(cancellable(fn, args, t));
