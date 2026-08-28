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
            if (!graph.get(src)) {
                graph.set(src, []);
            }
            graph.get(src).push(dest);
            inDegree[dest]++;
        }
        const q = [];
        for (let i = 0; i < numCourses; i++) {
            if (inDegree[i] === 0) {
                q.push(i);
            }
        }
        let head = 0;
        let count = 0;
        while (head < q.length) {
            const course = q[head++];
            count++;
            for (const neighbour of graph.get(head) || []) {
                inDegree[neighbour]--;
                if (inDegree[neighbour] === 0) {
                    q.push(neighbour);
                }
            }
        }
        return count === numCourses;
    }
}
