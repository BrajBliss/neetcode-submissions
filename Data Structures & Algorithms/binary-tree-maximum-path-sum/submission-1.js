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
        // let res = 0;
        // function maxDown(node) {
        //     if (!node) return 0;
        //     const left = maxDown(node.left);
        //     const right = maxDown(node.right);
        //     const best = Math.max(left, right) + node.val;
        //     return Math.max(0, best);
        // }
        // function dfs(node) {
        //     if (!node) return;
        //     const left = maxDown(node.left);
        //     const right = maxDown(node.right);
        //     res = Math.max(res, left + node.val + right);
        //     dfs(node.left);
        //     dfs(node.right);
        // }
        // dfs(root);
        // return res;

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
