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
        let max = -Infinity;
        function dfs(node) {
            if (!node) return 0;
            const leftGain = Math.max(0, dfs(node.left));
            const rightGain = Math.max(0, dfs(node.right));
            const currentPathSum = node.val + leftGain + rightGain;
            max = Math.max(max, currentPathSum);
            return node.val + Math.max(leftGain, rightGain);
        }
        dfs(root);
        return max;
    }
}
