class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length > n - 1) return false;
        const graph = new Map();
        for (const [u, v] of edges) {
            if (!graph.has(u)) {
                graph.set(u, []);
            }
            graph.get(u).push(v);
            if (!graph.has(v)) {
                graph.set(v, []);
            }
            graph.get(v).push(u);
        }
        const visited = new Set();
        // function dfs(node, parent) {
        //     if (visited.has(node)) {
        //         return false;
        //     }
        //     visited.add(node);
        //     for (const neighbour of graph.get(node)) {
        //         if (neighbour === parent) {
        //             continue;
        //         }
        //         if (!dfs(neighbour, node)) {
        //             return false;
        //         }
        //     }
        //     return true;
        // }
        // return dfs(0, -1) && visited.size === n;
        const q = [[0, -1]];
        let head = 0;
        visited.add(0);
        while (head < q.length) {
            const [node, parent] = q[head++];
            for (const neighbour of graph.get(node)) {
                if (parent === neighbour) continue;
                if (visited.has(neighbour)) return false;
                visited.add(neighbour);
                q.push([neighbour, node]);
            }
        }
        return visited.size === n;
    }
}
