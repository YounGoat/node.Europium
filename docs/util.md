#	europium.util

##	Table of Contents

* [util.callbackable](#utilcallbackable)
* [util.callbackify](#utilcallbackify)
* [util.promisible](#utilpromisible)
* [util.promisify](#utilpromisify)

##	util.callbackable
Added in: v0.0.1
*	__original__ *Function* 
*	Returns *Function*

Takes an `async` function (or a normal function returning an instance of `Promise`), and return a new function. The new function will:
*	return an instance of `Promise` as the `original` does with same arguments, or
*	follow the common error-first callback style if the last argument is a function

```javascript
const util = require('europium/util');

async function square(n) {
	if (typeof n != 'number') {
		throw new Error('argument should be a number');
	}
	return n * n;
}

sqr = util.callbackable(square);

// Returns an instance of `Promise`.
sqr(2).then(sum => {
	// ...
});

// If the last argument is a function,
// follows the common error-first callback style, and 
// returns void.
sqr(2, function(err, sum) {
	// ...
});
```

`util.callbackable()` assumes that `original` is a function returning an instance of `Promise`.

##	util.callbackify
Added in: v0.0.1
*	__original__ *Function* 
*	Returns *Function*

Similiar to `util.callbackable()`, but the returned function only follows the common error-first callback style. 

```javascript
const util = require('europium/util');

async function square(n) {
	if (typeof n != 'number') {
		throw new Error('argument should be a number');
	}
	return n * n;
}

sqr = util.callbackify(square);

// Always returns void, 
// whether or not the last `callback` argument is passed in.
sqr(2, function(err, sum) {
	// ...
});
```

As built-in [`util.promisify()`][^builtin.promisify] does, if there is an `origin[util.callbackify.custom]` property present, `callbackify` will return its value.

##	util.isAsyncFunction
Added in: v0.0.2
*	fn	*any*
*	Returns *boolean*

```javascript
const util = require('europium/util');

async function foo() {
	// ...
}

function bar() {
	// ...
}

util.isAsyncFunction(foo);
// Returns `true`.

util.isAsyncFunction(bar);
// Returns `false`.
```

##	util.promisible
Added in: v0.0.1
*	__original__ *Function* 
*	Returns *Function*

Similiar to `util.callbackable()`, but the `original` should follow the common error-first callback style. Depending on different passed-in arguments, the new function may return an instance of `Promise` or follow the common error-first callback style.

```javascript
const util = require('europium/util');

function square(n, callback) {
	if (typeof n != 'number') {
		callback(new Error('argument should be a number'));
	}
	else {
		callback(null, n * n);
	}
}

sqr = util.promisible(square);

// Returns an instance of `Promise`.
sqr(2).then(sum => {
	// ...
});

// If the last argument is a function,
// follows the common error-first callback style, and 
// returns void.
sqr(2, function(err, sum) {
	// ...
});
```

`util.promisible()` assumes that `original` is a function follow the common error-first callback style.

##	util.promisify
Added in: v0.0.1
*	__original__ *Function* 
*	Returns *Function*

Aias of built-in [`util.promisify()`][^builtin.promisify].

[^builtin.promisify]: https://nodejs.org/docs/latest/api/util.html#util_util_promisify_original