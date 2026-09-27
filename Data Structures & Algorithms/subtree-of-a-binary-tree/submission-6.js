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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function isSameTree(root, subRoot) {
            if (!root && !subRoot) return true;
            if (root && subRoot && root.val === subRoot.val) {
                return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
            } else {
                return false;
            }
        }
        if (!subRoot) return true;
        if (!root) false;
        if (isSameTree(root, subRoot)) {
            return true;
        }
        return isSameTree(root.left, subRoot) || isSameTree(root.right, subRoot);
    }
}
