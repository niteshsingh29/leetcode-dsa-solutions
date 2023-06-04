/**
 * @param {Function} fn
 */
function memoize(fn) {
    let cache = {};
    let cached = null;
    
    return function(...args) {
        
        let key = JSON.stringify(args);
        
        if(cache[key] || cache[key] === 0) {
            return cache[key];
        }
        
        cached = fn(args[0], args[1]);
        cache[key] = cached;
        
        return cache[key];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */