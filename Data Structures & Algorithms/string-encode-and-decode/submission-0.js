class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';

        for (const str of strs) {
            result += str.length + '#' + str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        const result = [];
        let i = 0;

        while (i < s.length) {
            let j = i;

            // find separator '#'
            while (s[j] !== '#') {
                j++;
            }

            const length = parseInt(s.slice(i, j), 10);
            const start = j + 1;
            const end = start + length;

            result.push(s.slice(start, end));
            i = end;
        }

        return result;
    }
}
