/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let queue = [root], temp = [], first, out=[], res=[], count=0;
    
    while(queue.length){
        count++;
        temp = [];
        out = []
        while(queue.length){
            first = queue.shift();
            if(first.left) temp.push(first.left);
            if(first.right) temp.push(first.right);
            if(count%2){
                out.push(first.val);
            }    
            else{
                out.unshift(first.val);
            }
        
        }
        res.push(out);
        queue = temp;
    }
    return res;    
};