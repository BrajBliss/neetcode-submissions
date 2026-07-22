class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        if (!nums || nums.length === 0) {
    return 0;
  }
  
  let n = nums.length;
  // Initialize dp array where each element starts with a length of 1
  let dp = new Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // Extend the increasing subsequence from index j
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // The answer is the maximum value found anywhere in the dp table
  return Math.max(...dp);
    }
}
