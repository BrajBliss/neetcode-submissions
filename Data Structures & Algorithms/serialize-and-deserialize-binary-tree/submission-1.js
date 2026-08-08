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
        if (!root) return "";
        const queue = [root];
        const nodesList = [];
        while (queue.length) {
            const currentNode = queue.shift();
            if (currentNode) {
                nodesList.push(currentNode.val);
                queue.push(currentNode.left);
                queue.push(currentNode.right);
            } else nodesList.push("N");
        }
        return nodesList.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data) return null;
        const nodeValues = data.split(",");
        const rootNode = new TreeNode(parseInt(nodeValues[0]));
        const queue = [rootNode];
        let index = 1;
        while (queue.length && index < nodeValues.length) {
            const parentNode = queue.shift();
            if (nodeValues[index] !== "N") {
                parentNode.left = new TreeNode(parseInt(nodeValues[index]));
                queue.push(parentNode.left);
            }
            index++;
            if (nodeValues[index] !== "N") {
                parentNode.right = new TreeNode(parseInt(nodeValues[index]));
                queue.push(parentNode.right);
            }
            index++;
        }
        return rootNode;
    }
}
