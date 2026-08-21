class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;
        function dfs(r, c, i) {
            if (i === word.length) return true;
            if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[i]) return false;
            const tempChar = board[r][c];
            board[r][c] = "#";
            const directions = [
                [-1, 0],
                [1, 0],
                [0, -1],
                [0, 1],
            ];
            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                if (dfs(nr, nc, i + 1)) return true;
            }
            board[r][c] = tempChar;
            return false;
        }
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === word[0] && dfs(r, c, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
}
