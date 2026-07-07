class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let carry = 0;
        for (let i = digits.length - 1; i >= 0; i--) {
            const digit = digits[i];
            const add = i === digits.length - 1 ? 1: 0;
            let sum = digit + add + carry
            carry = 0;
            if (sum >= 10) {
                carry = 1
                sum = 0;
            }
            digits[i] = sum;
            
        }
        if(carry){
            digits.unshift(1);
        }
        return digits
    }
}
