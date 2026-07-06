/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head) return false
        let a = head;
        let b = head.next;
        while (a && b ) {
            if (a == b){
                return true
            } else {
                a = a.next;
                b = b.next;
                if(b){
                    b = b.next;
                } else {
                    return false;
                }
            }
        }
        return false
    }
}
