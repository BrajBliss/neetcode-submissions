class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const n = nums.length;
        if (n === 0) return 0;
        if (n === 1) return 1;
        const uniqueNums = new Set(nums);
        let maxSeq = 1;
        for (const num of uniqueNums) {
            if (!uniqueNums.has(num - 1)) {
                let currNum = num;
                let currSeq = 1;
                while (uniqueNums.has(currNum + 1)) {
                    currNum++;
                    currSeq++;
                }
                maxSeq = Math.max(maxSeq, currSeq);
            }
        }
        return maxSeq;
    }
}
