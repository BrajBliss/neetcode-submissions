class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n = numbers.length;
        let left = 0, right = n - 1;
        while (left < right) {
            const currSum = numbers[left] + numbers[right];
            if (currSum > target) right--;
            else if (currSum < target) left++;
            else return [left + 1, right + 1];
        }
        return [];
    }
}
