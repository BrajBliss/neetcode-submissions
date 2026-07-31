class WordDictionary {
    constructor() {
        this.words = [];
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        this.words.push(word);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */t
    search(word) {
        for (const w of this.words) {
            if (w.length !== word.length) continue;
            let isMatch = true;
            for (let i = 0; i < word.length; i++) {
                if (word[i] !== '.' && word[i] !== w[i]) {
                    isMatch = false;
                    break;
                }
            }
            if (isMatch) return true;
        }
        return false;
    }
}
