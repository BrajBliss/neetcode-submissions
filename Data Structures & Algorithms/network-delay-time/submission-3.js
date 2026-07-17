class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const graph = {};
        for (let i = 1; i <= n; i++) {
            graph[i] = [];
        }
        for (const [src, dest, weight] of times) {
            graph[src].push([dest, weight]);
        }
        const distances = {};
        for (let i = 1; i <= n; i++) {
            distances[i] = Infinity;
        }
        distances[k] = 0;
        const pq = new MinPriorityQueue((entry) => entry[1]);
        pq.enqueue([k, 0]);
        while (!pq.isEmpty()) {
            const [currentNode, currentDistance] = pq.dequeue();
            if (distances[currentNode] < currentDistance) {
                continue;
            }
            for (const [neighbour, distanceToNeighbour] of graph[currentNode]) {
                const newDistance = currentDistance + distanceToNeighbour;
                if (newDistance < distances[neighbour]) {
                    distances[neighbour] = newDistance;
                    pq.enqueue([neighbour, newDistance]);
                }
            }
        }
        let maxTime = 0;
        for (let i = 1; i <= n; i++) {
            if (distances[i] === Infinity) {
                return -1;
            }
            maxTime = Math.max(maxTime, distances[i]);
        }
        return maxTime;
    }
}
