class Observer{
	constructor(obj, key, cb) {
		this.obj = obj;
		this.key = key;
		this.cb = cb;
	}

	// 普通对象的劫持
	observerNorm() {

	}
}