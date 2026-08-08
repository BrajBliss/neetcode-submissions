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
    zigzagLevelOrder(root) {
        const res = [];
        if (!root) return res;
        const q = new Queue([root]);
        while (!q.isEmpty()) {
            const level = [];
            for (let i = q.size(); i > 0; i--) {
                const node = q.pop();
                level.push(node.val);
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
            if (res.length % 2 !== 0) level.reverse();
            res.push(level);
        }
        return res;
    }
}
