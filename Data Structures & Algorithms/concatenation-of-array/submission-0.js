class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];
        const n = nums.length;
        for (let i =0;i<nums.length;i++){
            ans[i]=nums[i];
            ans[n+i]=nums[i];
        }
        return ans;
    }
}
