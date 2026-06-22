class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        // 1. Group numbers by their distance |arr[i] - x|
    const map = new Map();
    for (let num of arr) {
        let dist = Math.abs(num - x);
        if (!map.has(dist)) {
            map.set(dist, []);
        }
        map.get(dist).push(num);
    }

    // 2. Sort the unique distances
    const sortedDistances = Array.from(map.keys()).sort((a, b) => a - b);

    // 3. Collect elements until we have k
    let result = [];
    for (let dist of sortedDistances) {
        let bucket = map.get(dist);
        // Elements in bucket are already sorted because arr is sorted
        for (let num of bucket) {
            if (result.length < k) {
                result.push(num);
            } else {
                break;
            }
        }
    }

    // 4. Final result must be sorted in ascending order
    return result.sort((a, b) => a - b);
    }
}
