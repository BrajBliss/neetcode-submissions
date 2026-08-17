/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) return true;
        // if (p && q && p.val === q.val) {
        //     return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
        // } else return false;

        // const stack = [[p, q]];
        // while (stack.length) {
        //     const [node1, node2] = stack.pop();
        //     if (!node1 && !node2) continue;
        //     if (!node1 || !node2 || node1.val !== node2.val) return false;
        //     stack.push([node1.left, node2.left]);
        //     stack.push([node1.right, node2.right]);
        // }
        // return true;

        const q1 = [p];
        const q2 = [q];
        while (q1.length && q2.length) {
            const size = q1.length;
            for (let i = 0; i < size; i++) {
                const nodeP = q1.shift();
                const nodeQ = q2.shift();
                if (!nodeP && !nodeQ) continue;
                if (!nodeP || !nodeQ || nodeP.val !== nodeQ.val) return false;
                q1.push(nodeP.left);
                q1.push(nodeP.right);
                q2.push(nodeQ.left);
                q2.push(nodeQ.right);
            }
        }
        return true;
    }
}
