import {Parser} from './core/parser';

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
	title: 'mvvm',
	content: 'learn more and fast...'
};

new Parser('#root', data);