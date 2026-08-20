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
        // const bst = [];
        // function inorder(node) {
        //     if (!node) return;
        //     inorder(node.left);
        //     if (node.val > 0) {
        //         bst.push(node.val);
        //     }
        //     inorder(node.right);
        // }
        // inorder(root);
        // bst.sort((a, b) => a - b);
        // return bst[k - 1];

        const bst = [];
        function inorder(node) {
            if (!node) return;
            inorder(node.left);
            bst.push(node.val);
            inorder(node.right);
        }
        inorder(root);
        return bst[k - 1];

        // let res = null;
        // let count = 0;
        // function inorder(node) {

        // }
        // inorder(root);
        // return res;
    }
}
