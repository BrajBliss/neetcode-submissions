class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const graph = new Map();
        for (const [src, dest, weight] of times) {
            if (!graph.has(src)) {
                graph.set(src, []);
            }
            graph.get(src).push([dest, weight]);
        }
        const distances = new Map();
        for (let i = 1; i <= n; i++) {
            distances.set(i, Infinity);
        }
        distances.set(k, 0);
        const pq = new MinPriorityQueue((item) => item[1]);
        pq.enqueue([k, 0]);
        while (!pq.isEmpty()) {
            const [currentNode, currentDistance] = pq.dequeue();
            if (distances.get(currentNode) < currentDistance) {
                continue;
            }
            for (const [neighbour, distanceToNeighbour] of graph.get(currentNode) || []) {
                const newDistance = currentDistance + distanceToNeighbour;
                if (newDistance < distances.get(neighbour)) {
                    distances.set(neighbour, newDistance);
                    pq.enqueue([neighbour, newDistance]);
                }
            }
        }
        let maxTime = 0;
        for (let i = 1; i <= n; i++) {
            if (distances.get(i) === Infinity) {
                return -1;
            }
            maxTime = Math.max(maxTime, distances.get(i));
        }
        return maxTime;
    }
}
