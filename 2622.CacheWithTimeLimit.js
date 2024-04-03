const TimeLimitedCache = function () {
	this.cache = {};
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
	if (!value) return;
	this.cache[key] = value;
	setTimeout(() => {
		delete this.cache[key];
	}, duration);
};

TimeLimitedCache.prototype.get = function (key) {
	return this.cache[key];
};

TimeLimitedCache.prototype.count = function () {};
