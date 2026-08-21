/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        // const map = new Map();
        // function dfs(node) {
        //     if (node === null) return null;
        //     if (map.has(node)) return map.get(node);
        //     map.set(node, new Node(node.val));
        //     for (const neighbor of node.neighbors) {
        //         map.get(node).neighbors.push(dfs(neighbor));
        //     }
        //     return map.get(node);
        // }
        // return dfs(node);

        if (node === null) return null;
        const map = new Map();
        map.set(node, new Node(node.val));
        const q = [node];
        while (q.length) {
            const curr = q.shift();
            for (const neighbor of curr.neighbors) {
                if (!map.has(neighbor)) {
                    map.set(neighbor, new Node(neighbor.val));
                    q.push(neighbor);
                }
                map.get(curr).neighbors.push(map.get(neighbor));
            }
        }
        return map.get(node);
    }
}
