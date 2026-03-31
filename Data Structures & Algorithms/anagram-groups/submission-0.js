class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();

        for (const word of strs) {
            const signature = this._buildSignature(word);

            if (!groups.has(signature)) {
                groups.set(signature, []);
            }

            groups.get(signature).push(word);
        }

        return Array.from(groups.values());
    }

    /**
     * @param {string} word
     * @return {string}
     */
    _buildSignature(word) {
        const charCount = new Array(26).fill(0);

        for (let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 97; // 'a'
            charCount[index]++;
        }

        return charCount.join('#');
    }
}