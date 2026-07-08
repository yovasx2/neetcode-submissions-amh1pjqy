class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    sumOfSquares(n) {
        const digits = n.toString().split('');
        return digits.reduce((acc, e) => {
            return acc + e**2;
        }, 0);
    }

    isHappy(n) {
        const seen = new Set();
        while (!seen.has(n)){
            seen.add(n);
            n = this.sumOfSquares(n);
            if(n===1) return true;
        }
        return false;
    }
}
