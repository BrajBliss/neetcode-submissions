class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    //    map the value and index
    // for each index check the value if the target difference
    // already exist in the map meaning a complement exists
    const prevMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (prevMap.has(diff)) return [prevMap.get(diff), i];
        prevMap.set(nums[i], i);
    }
    return [];
    }
}
