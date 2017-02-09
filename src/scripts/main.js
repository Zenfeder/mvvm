import {Parser} from './core/mvvm';

import debug from 'debug';
const log = debug('log:');

// 仅在非production模式下启用debug
if (ENV !== 'production') {
  // 启用debug功能
	debug.enable('*');
	log('debug功能已启用!');
} else {
	debug.disable();
}

let data = {
	title: 'learn mvvm',
	author: '陈果',
	todos: [{
		creator: "陈果",
		content: '解析模版',
		status: 'todo',
		menbers: [{
			name: 'gchen'
		}]
	}]
};

new Parser('#root', data);