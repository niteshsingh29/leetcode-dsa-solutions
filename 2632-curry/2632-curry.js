/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    return function curried(...arg1) {
        if(arg1.length >= fn.length) {
            return fn(...arg1);
        }
        
        return (...arg2) => curried(...arg1, ...arg2);
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
