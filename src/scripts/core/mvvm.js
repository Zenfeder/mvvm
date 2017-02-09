import debug from 'debug';

const log = debug('log:');
if (ENV !== 'production') {
	debug.enable('*');
} else {
	debug.disable();
}

function scan($node) {
	log($node);

	for (let i = 0; i < $node.children.length; i++) {
		const $childNode = $node.children[i];

		log($childNode);

		if ($childNode.children.length) {
			scan($childNode);
		}
	}
}

function parseText($node) {
	// 解析g-text节点
}

function parseModel($node) {
	// 解析g-model节点
}

function parseClass($node) {
	// 解析g-class节点
}

function parseEvent($node) {
	// 解析事件
}

function parseList($node) {
	// 解析g-list和g-list-item节点
}

class Parser {
	constructor(selector, data) {
		this.selector = selector;
		this.data = data;

		this.init();
	}

	init() {
		let $node = document.querySelector(this.selector);

		scan($node);
	}
}

export {Parser};
