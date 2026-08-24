class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        // let maxProd = nums[0];
        // const n = nums.length;
        // for (let i = 0; i < n; i++) {
        //     let currentProd = 1;
        //     for (let j = i; j < n; j++) {
        //         currentProd *= nums[j];
        //         maxProd = Math.max(maxProd, currentProd);
        //     }
        // }
        // return maxProd;

        let maxProd = nums[0];
        let currMax = nums[0];
        let currMin = nums[0];
        for (let i = 1; i < nums.length; i++) {
            const num = nums[i];
            if (num < 0) {
                const temp = currMax;
                currMax = currMin;
                currMin = temp;
            }
            currMax = Math.max(num, num * currMax);
            currMin = Math.min(num, num * currMin);
            maxProd = Math.max(maxProd, currMax);
        }
        return maxProd;
    }
}
