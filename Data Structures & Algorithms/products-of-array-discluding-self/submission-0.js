class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = new Array(n).fill(1);

        // prefix (izquierda → derecha)
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        // suffix (derecha → izquierda)
        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }

        return result;

    }
}
