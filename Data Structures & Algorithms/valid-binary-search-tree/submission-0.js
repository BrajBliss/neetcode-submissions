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
    isAllSmaller(node, limit) {
        if (!node) return true;
        if (node.val >= limit) return false;
        return this.isAllSmaller(node.left, limit) && this.isAllSmaller(node.right, limit);
    }
    isAllGreater(node, limit) {
        if (!node) return true;
        if (node.val <= limit) return false;
        return this.isAllGreater(node.left, limit) && this.isAllGreater(node.right, limit);
    }
    isValidBST(root) {
        if (!root) return true;
        if (!this.isAllSmaller(root.left, root.val)) {
            return false;
        }
        if (!this.isAllGreater(root.right, root.val)) {
            return false;
        }
        return this.isValidBST(root.left) && this.isValidBST(root.right);
    }
}
