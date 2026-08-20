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
        // if (!root) return true;
        // function isAllSmaller(node, limit) {
        //     if (!node) return true;
        //     if (node.val >= limit) return false;
        //     return isAllSmaller(node.left, limit) && isAllSmaller(node.right, limit);
        // }
        // function isAllGreater(node, limit) {
        //     if (!node) return true;
        //     if (node.val <= limit) return false;
        //     return isAllGreater(node.left, limit) && isAllGreater(node.right, limit);
        // }
        // if (!isAllSmaller(root.left, root.val)) {
        //     return false;
        // }
        // if (!isAllGreater(root.right, root.val)) {
        //     return false;
        // }
        // return this.isValidBST(root.left) && this.isValidBST(root.right);

        // function helper(node, left, right) {
        //     if (node === null) return true;
        //     if (!(left < node.val && right > node.val)) {
        //         return false;
        //     }
        //     return helper(node.left, left, node.val) && helper(node.right, node.val, right);
        // }
        // return helper(root, -Infinity, Infinity);

        // if (!root) return true;
        // const stack = [[root, -Infinity, Infinity]];
        // while (stack.length) {
        //     const [node, left, right] = stack.pop();
        //     if (!(left < node.val && node.val < right)) return false;
        //     if (node.right) {
        //         stack.push([node.right, node.val, right]);
        //     }
        //     if (node.left) {
        //         stack.push([node.left, left, node.val]);
        //     }
        // }
        // return true;

        if (!root) return true;
        const q = [[root, -Infinity, Infinity]];
        let head = 0;
        while (head < q.length) {
            const [node, left, right] = q[head++];
            if (!(left < node.val && node.val < right)) return false;
            if (node.left) q.push([node.left, left, node.val]);
            if (node.right) q.push([node.right, node.val, right]);
        }
        return true;
    }
}
