class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            let l = i + 1, r = numbers.length - 1;
            const temp = target - numbers[i];
            while (l <= r) {
                const mid = l + Math.floor((r - l) / 2);
                if (temp === numbers[mid]) {
                    return [i+1, mid+1];
                } else if (temp > numbers[mid]) {
                    l = mid + 1;
                } else r = mid - 1;
            }
        }
        return [];
    }
}
