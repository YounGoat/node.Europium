'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	
	/* in-package */
	;

function callbackable(fn) {
	return function() {
		let args = Array.from(arguments);
		let last = args.length ? args[ args.length - 1 ] : null;
		let callbackOffered = (typeof last == 'function');
		if (callbackOffered) {
			let callback = args.pop();
			fn.apply(null, args).then(data => {
				callback(null, data);
			}).catch(callback);
		}
		else {
			return fn.apply(null, args);
		}
	};
}

module.exports = callbackable;