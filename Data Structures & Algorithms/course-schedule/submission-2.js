class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = new Map();
        const inDegree = new Array(numCourses).fill(0);
        for (const [dst, src] of prerequisites) {
            if (!graph.has(src)) {
                graph.set(src, []);
            }
            graph.get(src).push(dst);
            inDegree[dst]++;
        }
        const q = [];
        let count = 0;
        for (let i = 0; i < numCourses; i++) {
            if (inDegree[i] === 0) {
                q.push(i);
            }
        }
        while (q.length > 0) {
            const course = q.shift();
            count++;
            for (const neighbour in graph.get(course) || []) {
                inDegree[neighbour]--;
                if (inDegree[neighbour] === 0) {
                    q.push(neighbour);
                }
            }
        }
        return count === numCourses;
    }
}
