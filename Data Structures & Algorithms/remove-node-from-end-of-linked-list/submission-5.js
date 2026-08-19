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

        // let length = 0;
        // let curr = head;
        // while (curr) {
        //     length++;
        //     curr = curr.next;
        // }
        // const removeIndex = length - n;
        // if (removeIndex === 0) {
        //     return head.next;
        // }
        // curr = head;
        // for (let i = 0; i < length - 1; i++) {
        //     if (i + 1 === removeIndex) {
        //         curr.next = curr.next.next;
        //         break;
        //     }
        //     curr = curr.next;
        // }
        // return head;

        const dummy = new ListNode(0, head);
        let left = dummy;
        let right = head;
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
