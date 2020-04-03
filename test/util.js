'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , util = noda.inRequire('util')
    ;

describe('util', () => {

    async function add(a, b) {
        return a + b;
    }

    function square(a) {
        return Promise.resolve(a * a);
    }

    function mul(a, b, callback) {
        callback(null, a * b);
    }

    it('callbackable async function', done => {
        let add2 = util.callbackable(add);
        
        let p1 = new Promise(resolve => {
            add2(1, 2, (err, sum) => {
                assert.equal(err, null);
                assert.equal(sum, 3);
                resolve();
            });
        });

        let p2 = add2(1, 2).then(sum => {
            assert.equal(sum, 3);
        }).catch(done);

        Promise.all([ p1, p2 ]).then(() => done()).catch(done);
    });

    it('callbackable function returning promise', done => {
        let square2 = util.callbackable(square);

        let p1 = new Promise(resolve => {
            square2(2, (err, product) => {
                assert.equal(err, null);
                assert.equal(product, 4);
                resolve();
            });
        });

        let p2 = square2(2).then(product => {
            assert.equal(product, 4);
        });

        Promise.all([ p1, p2 ]).then(() => done()).catch(done);
    });
    
    it('callbackify async function', done => {
        util.callbackify(add)(1, 2, (err, sum) => {
            assert.equal(err, null);
            assert.equal(sum, 3);
            done();
        });
    });

    it('callbackify function returning promise', done => {
        util.callbackify(square)(2, (err, product) => {
            assert.equal(err, null);
            assert.equal(product, 4);
            done();
        });
    });

    it('promisible function', done => {
        let mul2 = util.promisible(mul);
        
        let p1 = mul2(2, 3).then(product => {
            assert.equal(product, 6);
        });

        let p2 = new Promise(resolve => {
            mul2(2, 3, (err, product) => {
                assert.equal(product, 6);
                resolve();
            });
        });

        Promise.all([ p1, p2 ]).then(() => done()).catch(done)
    });

    it('promisify function', done => {
        util.promisify(mul)(2, 3).then(product => {
            assert.equal(product, 6);
            done();
        });
    });

    it('isAsyncFunction', () => {
        let fn = null;
        assert.equal(util.isAsyncFunction(fn), false);

        fn = function() {};
        assert.equal(util.isAsyncFunction(fn), false);

        fn = async function() {};
        assert.equal(util.isAsyncFunction(fn), true);

        fn = async () => {};
        assert.equal(util.isAsyncFunction(fn), true);
    });
});