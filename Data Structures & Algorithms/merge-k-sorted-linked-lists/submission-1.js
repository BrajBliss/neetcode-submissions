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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || !lists.length) return null;
        const nonEmpty = lists.filter(head => head);
        if (!nonEmpty.length) return null;
        const heap = new MinPriorityQueue(node => node.val);
        for (const head of nonEmpty) {
            heap.enqueue(head);
        }
        const dummy = new ListNode(0);
        let current = dummy;
        while (!heap.isEmpty()) {
            const node = heap.dequeue();
            current.next = node;
            current = current.next;
            if (node.next) {
                heap.enqueue(node.next);
            }
        }
        return dummy.next;
    }
}
