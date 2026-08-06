class CountSquares {
    constructor() {
        this.points = [];
        this.counts = new Map();
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        this.points.push(point);
        const key = `${point[0]},${point[1]}`;
        this.counts.set(key, (1 + (this.counts.get(key) || 0)));
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        const [qx, qy] = point;
        let totalSquares = 0;
        for (const [px, py] of this.points) {
            const sideX = Math.abs(px - qx);
            const sideY = Math.abs(py - qy);
            if (sideX === sideY && sideX > 0) {
                const c1 = this.counts.get(`${px},${qy}`) || 0;
                const c2 = this.counts.get(`${qx},${py}`) || 0;
                totalSquares += c1 * c2;
            }
        }
        return totalSquares; 
    }
}
