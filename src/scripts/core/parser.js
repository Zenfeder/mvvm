import debug from 'debug';

const log = debug('log:');
if (ENV !== 'production') {
	debug.enable('*');
} else {
	debug.disable();
}

class Parser {
	constructor(selector, data) {
		this.$rootElem = document.querySelector(selector);
		this.data = data;

		this.init();
	}

	init() {
		this.scan(this.$rootElem);
	}

	scan($node) {
		for (let i = 0; i < $node.children.length; i++) {
			const $childNode = $node.children[i];

			this.parseText($childNode);
			this.parseModel($childNode);

			if ($childNode.children.length) {
				this.scan($childNode);
			}
		}
	}

	parseText($node) {
		// 解析g-text节点
		let g_text = $node.getAttribute('g-text');
		
		if (g_text) {
			$node.innerHTML = this.data[g_text];
		}
	}

	parseModel($node) {
		// 解析g-model节点
		let g_model = $node.getAttribute('g-model');

		if (g_model) {
			$node.value = this.data[g_model];
		}
	}

	parseClass($node) {
		// 解析g-class节点
		let g_class = $node.getAttribute('g-class');

		if (g_class) {
			log(g_class);
		}
	}

	parseList($node) {
		// 解析g-list和g-list-item节点
	}

	parseEvent($node) {
		// 解析事件g-on:[事件类型]
	}
}

export {Parser};
