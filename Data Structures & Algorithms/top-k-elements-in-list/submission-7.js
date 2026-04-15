class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        for (const num of nums) {
            count.set(num, 1 + (count.get(num) || 0))
            }
            const heap = new MinPriorityQueue(x => x[1]);
            for (const [num, freq] of count.entries()) {
                heap.enqueue([num, freq]);
                if (heap.size() > k) heap.dequeue();
            }
            const res = [];
            for (let i = 0; i < k; i++) {
                const [num, freq] = heap.dequeue();
                res.push(num);
            }
            return res;
        
    }
}
