class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0, r = numbers.length - 1;
        while (l < r) {
            const curr = numbers[l] + numbers[r];
            if (target > curr) l++;
            else if (target < curr) r--;
            else return [l + 1, r + 1]
        }
    }
}
