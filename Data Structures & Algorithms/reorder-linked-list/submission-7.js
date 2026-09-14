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
     * @return {void}
     */
    reorderList(head) {
        // if (!head) return null;
        // const nodes = [];
        // let curr = head;
        // while (curr !== null) {
        //     nodes.push(curr);
        //     curr = curr.next;
        // }
        // let i = 0,
        //     j = nodes.length - 1;
        // while (i < j) {
        //     nodes[i].next = nodes[j];
        //     i++;
        //     nodes[j].next = nodes[i];
        //     j--;
        // }
        // nodes[i].next = null;

        let slow = head,
            fast = head;1
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        let second = slow.next;
        let prev = (slow.next = null);
        while (second) {
            const temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }
        let first = head;
        second = prev;
        while (second) {
            const temp1 = first.next;
            const temp2 = second.next;
            first.next = second;
            second.next = temp1;
            first = temp1;
            second = temp2;
        }
    }
}
