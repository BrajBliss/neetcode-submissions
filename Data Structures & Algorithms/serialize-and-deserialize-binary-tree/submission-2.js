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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const result = [];
        function preorderDFS(node) {
            if (!node) {
                result.push("N");
                return;
            }
            result.push(node.val);
            preorderDFS(node.left);
            preorderDFS(node.right);
        }
        preorderDFS(root);
        return result.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const nodeValues = data.split(",");
        let currentIndex = 0;
        function preorderDFS() {
            if (currentIndex >= nodeValues.length || nodeValues[currentIndex] === "N") {
                currentIndex++;
                return null;
            }
            const currentNode = new TreeNode(parseInt(nodeValues[currentIndex]));
            currentIndex++;
            currentNode.left = preorderDFS();
            currentNode.right = preorderDFS();
            return currentNode;
        }
        return preorderDFS();
    }
}
