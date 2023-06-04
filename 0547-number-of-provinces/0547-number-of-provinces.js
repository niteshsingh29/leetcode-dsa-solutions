/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let curr = 0;
    
    const dfs = (i) => {
        if (!isConnected[i]) return;
        let result = isConnected[i];
        
        isConnected[i] = null;
        result.map((item , index) => {
            
            if (item === 0) return;
            dfs(index);
        })
        
    };
    
    isConnected.map((item , index) => {
        if (item){
            curr+=1
            dfs(index);
        }
    })
    
    return curr;
};