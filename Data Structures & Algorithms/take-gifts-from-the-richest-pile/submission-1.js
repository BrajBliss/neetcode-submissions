class Solution {
    /**
     * @param {number[]} gifts
     * @param {number} k
     * @return {number}
     */
    pickGifts(gifts, k) {
        const maxHeap = new MaxPriorityQueue();
        // for (const gift of gifts) {
        //     maxHeap.push(gift);
        // }
        gifts.forEach((gift) => maxHeap.enqueue(gift));
        for (let i = 0; i < k; i++) {
            const maxGift = maxHeap.dequeue();
            const reducedGift = Math.floor(Math.sqrt(maxGift));
            maxHeap.enqueue(reducedGift);
        }
        let totalGifts = 0;
        while (!maxHeap.isEmpty()) {
            totalGifts += maxHeap.dequeue();
        }
        return totalGifts;
    }
}
