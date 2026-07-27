class TrieNode {
    constructor() {
        this.children = {};
        this.end = false;
    }
}
class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!(char in node.children)) {
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
        let node = this.root;
        for (const char of word) {
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }
        return node.end;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
    delete(word) {
        function deleteHelper(node, i) {
            if (i === word.length) {
                node.end = false;
                return Object.keys(node.children).length === 0;
            }
            const char = word[i];
            const child = node.children[char];
            if (!child) {
                return false;
            }
            const shouldDeleteChild = deleteHelper(child, i + 1);
            if (shouldDeleteChild) {
                delete node.children[char];
            }
            return !node.end && Object.keys(node.children).length === 0;
        }
        return deleteHelper(this.root, 0);
    }
}
