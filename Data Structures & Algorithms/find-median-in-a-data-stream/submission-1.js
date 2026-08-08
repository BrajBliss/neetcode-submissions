class MedianFinder {
    constructor() {
        this.small = new MaxPriorityQueue();
        this.big = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.small.enqueue(num);
        const largestInSmall = this.small.dequeue();
        this.big.enqueue(largestInSmall);
        if (this.small.size() < this.big.size()) {
            const smallestInBig = this.big.dequeue();
            this.small.enqueue(smallestInBig);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() > this.big.size()) {
            return this.small.front();
        }
        const maxSmall = this.small.front();
        const maxBig = this.big.front();
        return (maxSmall + maxBig) / 2;
    }
}
