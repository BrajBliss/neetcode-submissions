class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = new Map();
        const inDegree = new Array(numCourses).fill(0);
        for (const [dest, src] of prerequisites) {
            if (!graph.has(src)) {
                graph.set(src, []);
            }
            graph.get(src).push(dest);
            inDegree[dest]++;
        }
        const queue = [];
        let count = 0;
        for (let i = 0; i < numCourses; i++) {
            if (!inDegree[i]) {
                queue.push(i);
            }
        }
        while (queue.length) {
            const course = queue.shift();
            count++;
            for (const neighbour of graph.get(course) || []) {
                inDegree[neighbour]--;
                if (!inDegree[neighbour]) {
                    queue.push(neighbour);
                }
            }
        }
        return count === numCourses;
    }
}
