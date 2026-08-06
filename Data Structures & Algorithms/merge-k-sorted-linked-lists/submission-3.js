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
        if (lists.length === 0) return null;
        const minHeap = new MinPriorityQueue((item) => item.val);
        for (const list of lists) if (list) minHeap.enqueue(list);
        const dummy = new ListNode(0);
        let curr = dummy;
        while (minHeap.size()) {
            let node = minHeap.dequeue();
            curr.next = node;
            curr = curr.next;
            node = node.next;
            if (node) minHeap.enqueue(node);
        }
        return dummy.next;
    }
}
