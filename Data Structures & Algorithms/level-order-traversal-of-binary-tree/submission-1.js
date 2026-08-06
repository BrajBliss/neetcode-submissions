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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];
        if (!root) return res;
        const q = new Queue();
        q.push(root);
        while (!q.isEmpty()) {
            const level = [];
            for (let i = 0; i < q.size(); i++) {
                const node = q.pop();
                if (node) {
                    level.push(node.val);
                    q.push(node.left);
                    q.push(node.right);
                }
            }
            if (level.length) {
                res.push(level);
            }
        }
        return res;
    }
}
