class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            let curr = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    curr = curr*nums[j];
                }
            }
            res.push(curr)
        }
        return res;
    }
}
