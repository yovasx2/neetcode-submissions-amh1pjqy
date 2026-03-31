class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, "");
        s= s.toLowerCase()

        let isPalindrome = true;
        for (let i = 0; i<s.length; i++){
            if (s[i]!==s[s.length-1-i]){
                return false;
            }
        }
        return isPalindrome;
    }
}
