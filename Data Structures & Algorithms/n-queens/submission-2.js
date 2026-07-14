class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const result = [];
        const cols = new Set();
        const posDiag = new Set();
        const negDiag = new Set();
        const board = new Array(n).fill(null).map(() => new Array(n).fill("."));
        function backtrack(r) {
            if (r === n) {
                result.push(board.map((row) => row.join("")));
                return;
            }
            for (let c = 0; c < n; c++) {
                if (cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
                    continue;
                }
                cols.add(c);
                posDiag.add(r + c);
                negDiag.add(r - c);
                board[r][c] = "Q";
                backtrack(r + 1);
                cols.delete(c);
                posDiag.delete(r + c);
                negDiag.delete(r - c);
                board[r][c] = ".";
            }
        }
        backtrack(0);
        return result;
    }
}
