class CountSquares {
    constructor() {
        this.points = [];
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        this.points.push(point);
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        const [qx, qy] = point;
        let totalSquares = 0;
        for (let i = 0; i < this.points.length; i++) {
            const [px, py] = this.points[i];
            if (Math.abs(px - qx) === Math.abs(py - qy) && px !== qx) {
                let countP1 = 0;
                let countP2 = 0;
                for (const [x, y] of this.points) {
                    if (x === px && y === qy) countP1++;
                    if (y === qx && y === py) countP2++;
                }
                totalSquares += countP1 * countP2;
            }
        }
        return totalSquares;
    }
}
