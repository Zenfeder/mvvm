import {Parser} from './core/parser';
import {Observer} from './core/observer';

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
	title: 'mvvm'
};

new Parser('#root', data);

let obs = new Observer();

obs.observerNorm(data, 'title', (oldVal, newVal) => {
	log(`${oldVal} ===> ${newVal}`);
});

data.title = 'learn mvvm'