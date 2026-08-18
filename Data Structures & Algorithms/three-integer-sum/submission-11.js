class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // const res = new Set();
        // nums.sort((a, b) => a - b);
        // const n = nums.length;
        // for (let i = 0; i < n; i++) {
        //     for (let j = i + 1; j < n; j++) {
        //         for (let k = j + 1; k < n; k++) {
        //             if (nums[i] + nums[j] + nums[k] === 0) {
        //                 res.add(JSON.stringify([nums[i], nums[j], nums[k]]));
        //             }
        //         }
        //     }
        // }
        // return Array.from(res).map((item) => JSON.parse(item));

        nums.sort((a, b) => a - b);
        const n = nums.length;
        const res = [];
        for (let i = 0; i < n; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            let l = i + 1,
                r = n - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}
