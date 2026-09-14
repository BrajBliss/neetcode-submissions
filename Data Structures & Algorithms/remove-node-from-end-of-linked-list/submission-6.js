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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // const nodes = [];
        // let curr = head;
        // while (curr) {
        //     nodes.push(curr);
        //     curr = curr.next;
        // }
        // const removeIndex = nodes.length - n;
        // if (removeIndex === 0) {
        //     return head.next;
        // }
        // nodes[removeIndex - 1].next = nodes[removeIndex].next;
        // return head;

        const dummy = new ListNode(0, head);
        let left = dummy,
            right = head;
        while (n > 0) {
            right = right.next;
            n--;
        }
        while (right) {
            left = left.next;
            right = right.next;
        }
        left.next = left.next.next;
        return dummy.next;
    }
}
