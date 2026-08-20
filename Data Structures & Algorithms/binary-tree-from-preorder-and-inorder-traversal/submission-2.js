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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        // if (!preorder.length || !inorder.length) return null;
        // const rootVal = preorder[0];
        // const root = new TreeNode(rootVal);
        // const mid = inorder.indexOf(rootVal);
        // root.left = this.buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
        // root.right = this.buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
        // return root;

        let index = 0;
        const map = new Map();
        inorder.forEach((val, i) => map.set(val, i));
        function dfs(left, right) {
            if (left > right) return null;
            const rootVal = preorder[index++];
            const root = new TreeNode(rootVal);
            const mid = map.get(rootVal);
            root.left = dfs(left, mid - 1);
            root.right = dfs(mid + 1, right);
            return root;
        }
        return dfs(0, inorder.length - 1);
    }
}
