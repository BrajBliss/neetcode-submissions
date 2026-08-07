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
        const bst = [];
        function inOrderTraversal(node) {
            if (!node) return;
            inOrderTraversal(node.left);
            if (node.val) bst.push(node.val);
            inOrderTraversal(node.right);
        }
        inOrderTraversal(root);
        bst.sort((a, b) => a - b);
        return bst[k - 1];
    }
}
