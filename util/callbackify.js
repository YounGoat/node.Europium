'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	, util = require('util')
	
	/* NPM */
	
	/* in-package */
	;

function callbackify(fn) {
	if (fn[callbackify.custom]) {
		return fn[callbackify.custom];
	}

	return function() {
		let args = Array.from(arguments);
		let callback = args.pop();
		fn
			.apply(null, args)
			.then(data => callback(null, data))
			.catch(callback)
			;
	};
}

callbackify.custom = Symbol('europium.util.callbackify.custom');

module.exports = callbackify;