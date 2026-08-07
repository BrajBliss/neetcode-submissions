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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let res = null;
        let count = 0;
        function inOrderTraversal(node) {
            if (!node || res !== null) return;
            inOrderTraversal(node.left);
            count++;
            if (count === k) {
                res = node.val;
                return;
            }
            inOrderTraversal(node.right);
        }
        inOrderTraversal(root);
        return res;
    }
}
