class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // const max = Math.max(...piles);
        // for (let k = 1; k <= max; k++) {
        //     let totalHours = 0;
        //     for (const pile of piles) {
        //         totalHours += Math.ceil(pile / k);
        //     }
        //     if (totalHours <= h) {
        //         return k;
        //     }
        // }
        // return max;

        let left = 1,
            right = Math.max(...piles);
        let res = left;
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
