class MedianFinder {
    constructor() {
        this.numbers = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.numbers.push(num);
    }

    /**
     * @return {number}
     */
    findMedian() {
        this.numbers.sort((a, b) => a - b);
        const totalElements = this.numbers.length;
        const middleIndex = Math.floor(totalElements / 2);
        if (totalElements % 2 !== 0) {
            return this.numbers[middleIndex];
        }
        return (this.numbers[middleIndex - 1] + this.numbers[middleIndex]) / 2;
    }
}
