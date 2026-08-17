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
     * @return {TreeNode}
     */
    invertTree(root) {
        // if (!root) return null;
        // [root.left, root.right] = [root.right, root.left];
        // this.invertTree(root.left);
        // this.invertTree(root.right);
        // return root;

        if (!root) return null;
        const stack = [root];
        while (stack.length) {
            const node = stack.pop();
            [node.left, node.right] = [node.right, node.left];
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }
        return root;

        // if (!root) return null;
        // const q = [root];
        // while (q.length) {
        //     const node = q.shift();
        //     [node.left, node.right] = [node.right, node.left];
        //     if (node.left) q.push(node.left);
        //     if (node.right) q.push(node.right);
        // }
        // return root;
    }
}
