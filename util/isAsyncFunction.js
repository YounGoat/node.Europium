'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	, util = require('util')
	
	/* NPM */
	
	/* in-package */
	;

function isAsyncFunction(fn) {
	return util.isFunction(fn) && fn.constructor.name == 'AsyncFunction';
}

module.exports = isAsyncFunction;