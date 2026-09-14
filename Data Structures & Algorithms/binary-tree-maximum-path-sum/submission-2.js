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
    maxPathSum(root) {
        let res = -Infinity;
        function helper(node) {
            if (!node) return 0;
            const left = Math.max(0, helper(node.left));
            const right = Math.max(0, helper(node.right));
            const current = node.val + left + right;
            res = Math.max(res, current);
            return node.val + Math.max(left, right);
        }
        helper(root);
        return res;
    }
}
