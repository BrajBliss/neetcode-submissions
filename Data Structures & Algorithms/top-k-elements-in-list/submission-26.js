class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // const map = new Map();
        // for (const num of nums) {
        //     map.set(num, 1 + (map.get(num) || 0));
        // }
        // const arr = [...map];
        // arr.sort((a, b) => b[1] - a[1]);
        // return arr.slice(0, k).map((pair) => pair[0]);

        // const map = new Map();
        // for (const num of nums) {
        //     map.set(num, 1 + (map.get(num) || 0));
        // }
        // const pq = new MinPriorityQueue((item) => item[1]);
        // map.forEach((freq, num) => {
        //     pq.enqueue([num, freq]);
        //     if (pq.size() > k) pq.dequeue();
        // });
        // const res = [];
        // for (let i = 0; i < k; i++) {
        //     const [num, freq] = pq.dequeue();
        //     res.push(num);
        // }
        // return res;

        const map = new Map();
        for (const num of nums) {
            map.set(num, 1 + (map.get(num) || 0));
        }
        const arr = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of map.entries()) {
            arr[freq].push(num);
        }
        const res = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            for (const num of arr[i]) {
                res.push(num);
                if (res.length === k) return res;
            }
        }
        return res;
    }
}
