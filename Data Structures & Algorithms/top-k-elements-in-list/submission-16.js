class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for (const num of nums) {
            count[num] = 1 + (count[num] || 0);
        }
        const minHeap = new MinPriorityQueue((x) => x[1]);
        for (const [num, freq] of Object.entries(count)) {
            minHeap.enqueue([num, freq]);
            if (minHeap.size() > k) minHeap.dequeue();
        }
        const res = [];
        for (let i = 0; i < k; i++) {
            const [num, freq] = minHeap.dequeue();
            res.push(num)
        }
        return res;
    }
}
