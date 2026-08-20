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
     * @return {number[][]}
     */
    levelOrder(root) {
        // let res = [];
        // function dfs(node, depth) {
        //     if (!node) return;
        //     if (res.length === depth) res.push([]);
        //     res[depth].push(node.val);
        //     dfs(node.left, depth + 1);
        //     dfs(node.right, depth + 1);
        // }
        // dfs(root, 0);
        // return res;

        let res = [];
        if (!root) return res;
        const q = [root];
        let head = 0;
        while (head < q.length) {
            const level = [];
            const size = q.length - head;
            for (let i = 0; i < size; i++) {
                // const node = q.shift();
                const node = q[head++];
                if (node) {
                    level.push(node.val);
                    q.push(node.left);
                    q.push(node.right);
                }
            }
            if (level.length > 0) {
                res.push(level);
            }
        }
        return res;
    }
}
