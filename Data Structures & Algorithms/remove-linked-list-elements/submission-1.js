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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        // if (!head) return null;
        // const arr = [];
        // let pointer = head;
        // while (pointer !== null) {
        //     if (pointer.val !== val) {
        //         arr.push(pointer.val);
        //     }
        //     pointer = pointer.next;
        // }
        // if (arr.length === 0) return null;
        // const newHead = new ListNode(arr[0]);
        // pointer = newHead;
        // for (let i = 1; i < arr.length; i++) {
        //     pointer.next = new ListNode(arr[i]);
        //     pointer = pointer.next;
        // }
        // return newHead;

        const dummy = new ListNode(0, head);
        let pointer = dummy;
        while (pointer.next !== null) {
            if (pointer.next.val === val) {
                pointer.next = pointer.next.next;
            } else {
                pointer = pointer.next;
            }
        }
        return dummy.next;
    }
}
