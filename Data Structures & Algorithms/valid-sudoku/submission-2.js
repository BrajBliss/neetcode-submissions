class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
      const rows = new Array.from({length: 9}, () => new Set());
      const cols = new Array.from({length: 9}, () => new Set());
      const boxes = new Array.from({length: 9}, () => new Set());
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const val = board[row][col];
            if (val === '.') continue;
           const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (rows[row].has(val) || cols[col].has(val) || boxes[boxIndex].has(val)) {
                return false;
            }
            rows[row].add(val);
            cols[col].add(val);
            boxes[boxIndex].add(val);
        }
      }
      return true;
    }
}
