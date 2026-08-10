class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const graph = new Map();
        for (const [src, dest, price] of flights) {
            if (!graph.has(src)) {
                graph.set(src, []);
            }
            graph.get(src).push([dest, price]);
        }
        const minStops = new Map();
        for (let i = 0; i < n; i++) {
            minStops.set(i, Infinity);
        }
        const pq = new MinPriorityQueue((item) => item[2]);
        pq.enqueue([0, src, 0]);
        while (!pq.isEmpty()) {
            const [currentCost, currentAirport, currentStops] = pq.dequeue();
            if (currentAirport === dst) {
                return currentCost;
            }
            if (currentStops > k) {
                continue;
            }
            if (minStops.get(currentAirport) <= currentStops) {
                continue;
            }
            minStops.set(currentAirport, currentStops);
            for (const [neighbour, price] of graph.get(currentAirport) || []) {
                const newCost = price + currentCost;
                pq.enqueue([newCost, neighbour, currentStops + 1]);
            }
        }
        return -1;
    }
}
