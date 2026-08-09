class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(n, edges, succProb, start_node, end_node) {
        const adj = Array.from({ length: n }, () => []);
        for (let i = 0; i < edges.length; i++) {
            const [a, b] = edges[i];
            adj[a].push([b, succProb[i]]);
            adj[b].push([a, succProb[i]]);
        }
        let max = 0;
        const visited = new Set();
        function dfs(node, prob) {
            if (node === end_node) {
                max = Math.max(max, prob);
                return max;
            }
            visited.add(node);
            for (const [nextNode, nextProb] of adj[node]) {
                if (!visited.has(nextNode)) {
                    dfs(nextNode, prob * nextProb);
                }
            }
            visited.delete(node);
        }
        dfs(start_node, 1.0);
        return max;
        // would probably visit all the paths in worst case resulting in TLE ugh
    }
}
