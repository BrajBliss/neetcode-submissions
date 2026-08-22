class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = new Map();
        let res = 0;
        const visited = new Array(n).fill(false);
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
        // function dfs(node) {
        //     for (const neighbour of graph.get(node) || []) {
        //         if (!visited[neighbour]) {
        //             visited[neighbour] = true;
        //             dfs(neighbour);
        //         }
        //     }
        // }

        function bfs(node) {
            const q = [node];
            visited[node] = true;
            let head = 0;
            while (head < q.length) {
                const curr = q[head++];
                for (const neighbour of graph.get(curr) || []) {
                    if (!visited[neighbour]) {
                        visited[neighbour] = true;
                        q.push(neighbour);
                    }
                }
            }
        }

        for (let node = 0; node < n; node++) {
            if (!visited[node]) {
                visited[node] = true;
                // dfs(node);
                bfs(node);
                res++;
            }
        }
        return res;
    }
}
