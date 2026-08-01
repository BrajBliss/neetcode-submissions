class Solution {
    /**
     * @param {number[]} gifts
     * @param {number} k
     * @return {number}
     */
    pickGifts(gifts, k) {
        for (let second = 0; second < k; second++) {
            let maxIndex = 0;
            for (let i = 1; i < gifts.length; i++) {
                if (gifts[i] > gifts[maxIndex]) {
                    maxIndex = i;
                }
            }
            gifts[maxIndex] = Math.floor(Math.sqrt(gifts[maxIndex]));
        }
        return gifts.reduce((acc, num) => acc + num, 0);
    }
}
