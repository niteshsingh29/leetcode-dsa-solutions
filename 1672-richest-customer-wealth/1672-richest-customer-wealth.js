/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let hashMap = {};
    let curr = 0;
    
    accounts.map((account) => {
        if(!hashMap[JSON.stringify(account)]) {
            hashMap[JSON.stringify(account)] = account.reduce((curr, acc) => {
                return curr + acc;
            }, 0)
        }
        
       curr = Math.max(curr, hashMap[JSON.stringify(account)])
    })
    
    return curr;
};