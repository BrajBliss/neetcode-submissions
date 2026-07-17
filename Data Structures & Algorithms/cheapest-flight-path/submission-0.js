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
        const graph = {};
        for (let i = 0; i < n; i++) {
            graph[i] = [];
        }
        for (const [src, dest, price] of flights) {
            graph[src].push([dest, price]);
        }
        const minStops = new Array(n).fill(Infinity);
        const pq = new MinPriorityQueue(entry => entry[0]);
        pq.enqueue([0, src, 0]);
        while (!pq.isEmpty()) {
            const [currentCost, currentAirport, currentStops] = pq.dequeue();
            if (currentAirport === dst) {
                return currentCost;
            }
            if (currentStops > k) {
                continue;
            }
            if (minStops[currentAirport] <= currentStops) {
                continue;
            }
            minStops[currentAirport] = currentStops;
            for (const [neighbour, price] of graph[currentAirport]) {
                const newCost = price + currentCost;
                pq.enqueue([newCost, neighbour, currentStops + 1]);
            }
        }
        return -1;
    }
}
