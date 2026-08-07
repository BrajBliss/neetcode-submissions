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
        const stack = [[root, -Infinity, Infinity]];
        while (stack.length) {
            const [node, left, right] = stack.pop();
            if (!(left < node.val && node.val < right)) return false;
            if (node.right) {
                stack.push([node.right, node.val, right]);
            }
            if (node.left) {
                stack.push([node.left, left, node.val]);
            }
        }
        return true;
    }
}
