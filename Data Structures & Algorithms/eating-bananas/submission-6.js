class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let res = right;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            let totalHours = 0;
            for (const pile of piles) {
                totalHours += Math.ceil(pile / mid);
            }
            if (totalHours <= h) {
                res = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return res;
    }
}
