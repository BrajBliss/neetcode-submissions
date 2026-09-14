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
        // if (!p && !q) return true;
        // if (p && q && p.val === q.val) {
        //     return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
        // } else {
        //     return false;
        // }

        if (!p && !q) return true;
        const q1 = [p];
        const q2 = [q];
        while (q1.length && q2.length) {
            const size = q1.length;
            for (let i = 0; i < size; i++) {
                const nodeP = q1.shift();
                const nodeQ = q2.shift();
                if (!nodeP && !nodeQ) continue;
                if (!nodeP || !nodeQ || nodeP.val !== nodeQ.val) {
                    return false;
                }
                q1.push(nodeP.left);
                q1.push(nodeP.right);
                q2.push(nodeQ.left);
                q2.push(nodeQ.right);
            }
        }
        return true;
    }
}
