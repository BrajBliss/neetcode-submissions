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
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0;
        const Q = new Queue();
        Q.push(root);
        let level = 0;
        while (Q.size()) {
            const size = Q.size();
            for (let i = 0; i < size; i++) {
                const node = Q.pop();
                if (node.left) Q.push(node.left);
                if (node.right) Q.push(node.right);
            }
            level++;
        }
        return level;
    }
}
