class Observer{
	constructor() {
		
	}

	// 普通对象的劫持
	observerNorm(obj, key, cb) {
		let oldVal = obj[key];

		Object.defineProperty(obj, key, {
			// __proto__: null, // 冻结继承来的属性值
			configurable: true, 
			enumerable: true,
			get() {
				return oldVal;
			},
			set(newVal) {
				if(newVal !== oldVal) {
					cb(oldVal, newVal);
					oldVal = newVal;
				}
			}

		});
	}
}

export {Observer};