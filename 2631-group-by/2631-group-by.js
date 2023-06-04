/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    let hashMap = {};
    
    this.forEach((item) => {
        let key = fn(item)
        if(!hashMap[key]) {
            hashMap[key] = [];
        }
         hashMap[key].push(item);
        
    })
    return hashMap;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */