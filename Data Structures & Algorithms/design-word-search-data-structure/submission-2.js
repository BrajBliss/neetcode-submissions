class TrieNode {
    constructor() {
        this.children = {};
        this.end = false;
    }
}

class WordDictionary {
    constructor() {
        // this.words = [];
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        // this.words.push(word);
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        // for (const w of this.words) {
        //     if (w.length !== word.length) {
        //         continue;
        //     }
        //     let isMatch = true;
        //     for (let i = 0; i < word.length; i++) {
        //         if (word[i] !== "." && word[i] !== w[i]) {
        //             isMatch = false;
        //             break;
        //         }
        //     }
        //     if (isMatch) return true;
        // }
        // return false;

        function dfs(index, node) {
            let curr = node;
            for (let i = index; i < word.length; i++) {
                const char = word[i];
                if (char === ".") {
                    for (const childKey in curr.children) {
                        if (dfs(i + 1, curr.children[childKey])) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    if (!curr.children[char]) return false;
                    curr = curr.children[char];
                }
            }
            return curr.end;
        }
        return dfs(0, this.root);
    }
}
