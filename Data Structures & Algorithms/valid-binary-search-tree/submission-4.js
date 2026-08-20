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
     * @return {boolean}
     */
    isValidBST(root) {
        if (!root) return true;
        function isAllSmaller(node, limit) {
            if (!node) return true;
            if (node.val >= limit) return false;
            return isAllSmaller(node.left, limit) && isAllSmaller(node.right, limit);
        }
        function isAllGreater(node, limit) {
            if (!node) return true;
            if (node.val <= limit) return false;
            return isAllGreater(node.left, limit) && isAllGreater(node.right, limit);
        }
        if (!isAllSmaller(root.left, root.val)) {
            return false;
        }
        if (!isAllGreater(root.right, root.val)) {
            return false;
        }
        return this.isValidBST(root.left) && this.isValidBST(root.right);
    }
}
