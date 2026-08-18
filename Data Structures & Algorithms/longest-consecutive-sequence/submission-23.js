class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // let res = 0;
        // const set = new Set(nums);
        // for (const num of nums) {
        //     let streak = 0;
        //     let curr = num;
        //     while (set.has(curr)) {
        //         streak++;
        //         curr++;
        //     }
        //     res = Math.max(res, streak);
        // }
        // return res;

        // nums.sort((a, b) => a - b);
        // let res = 0;
        // let i = 0,
        //     streak = 0,
        //     curr = nums[0];
        // while (i < nums.length) {
        //     if (curr !== nums[i]) {
        //         curr = nums[i];
        //         streak = 0;
        //     }
        //     while (i < nums.length && nums[i] === curr) {
        //         i++;
        //     }
        //     streak++;
        //     curr++;
        //     res = Math.max(res, streak);
        // }
        // return res;

        const set = new Set(nums);
        let res = 0;
        for (const num of nums) {
            if (!set.has(num - 1)) {
                let length = 1;
                while (set.has(num + length)) {
                    length++;
                }
                res = Math.max(res, length);
            }
        }
        return res;
    }
}
