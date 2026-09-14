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
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        // if (!root) return 0;
        // return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));

        if (!root) return 0;
        const q = [root];
        let res = 0;
        while (q.length !== 0) {
            const size = q.length;
            for (let i = 0; i < size; i++) {
                const node = q.shift();
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
            res++;
        }
        return res;
    }
}
