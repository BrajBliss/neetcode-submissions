class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const temp = temperatures;
        const n = temp.length;
        const result = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (temp[j] > temp[i]) {
                    result[i] = j - i;
                    break;
                }
            }
        }
        return result;
    }
}
