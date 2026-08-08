class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        function getHoursNeeded(rate) {
            let hours = 0;
            for (let i = 0; i < piles.length; i++) {
                hours += Math.ceil(piles[i] / rate);
            }
            return hours;
        }
        let left = 1;
        let right = piles.reduce((max, val) => Math.max(max, val), 0);
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (getHoursNeeded(mid) > h) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}
