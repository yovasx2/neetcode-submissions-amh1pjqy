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
        // Edge case: an empty list or single node cannot have a cycle
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head;

    // Traverse the list until the fast pointer reaches the end
    while (fast && fast.next) {
        slow = slow.next;       // Move 1 step
        fast = fast.next.next;  // Move 2 steps

        // If pointers meet, a cycle exists
        if (slow === fast) {
            return true;
        }
    }

    // Fast pointer reached the end (null), meaning no cycle
    return false;
    }
}
