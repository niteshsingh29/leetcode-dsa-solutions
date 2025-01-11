/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // base case if next not available
    if (!(head && head.next && head.next.next)) return false;

    // two pointer - slow and fast
    let slow = head;
    let fast = head;

    let cycleFound = false;
    while (fast != null) {
        slow = slow.next;
        fast = fast.next?.next;

        if (slow === fast) {
            cycleFound = true;
            break;
        }
    }

    if (cycleFound) return true;
    return false;
};