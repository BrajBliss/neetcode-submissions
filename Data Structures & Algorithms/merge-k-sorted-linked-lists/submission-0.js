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
        const nodes = [];
        for (let list of lists) {
            while (list) {
                nodes.push(list.val);
                list = list.next;
            }
        }
        nodes.sort((a, b) => a - b);
        const res = new ListNode(0);
        let curr = res;
        for (const node of nodes) {
            curr.next = new ListNode(node);
            curr = curr.next;
        }
        return res.next;
    }
}
