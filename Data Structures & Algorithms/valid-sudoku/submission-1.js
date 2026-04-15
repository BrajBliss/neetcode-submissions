class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // first check all rows
        // second check all the columns
        // third check all 3x3 boxes
        for (let row = 0; row < 9; row++) {
            const seen = new Set();
            for (let i = 0; i < 9; i++) {
                const temp = board[row][i];
                if (temp === '.') continue;
                if (seen.has(temp)) return false;
                seen.add(temp)
            }
        }
        for (let col = 0; col < 9; col++) {
            const seen = new Set();
            for (let i = 0; i < 9; i++) {
                const temp = board[i][col];
                if (temp === '.') continue;
                if (seen.has(temp)) return false;
                seen.add(temp)
            }
        }

        for (let square = 0; square < 9; square++) {
            const seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const row = Math.floor(square/3) * 3 + i;
                    const col = (square%3) * 3 + j;
                    const temp = board[row][col];
                    if (temp === '.') continue;
                    if (seen.has(temp)) return false;
                    seen.add(temp);
                }
            }
        }
        return true;
    }
}
