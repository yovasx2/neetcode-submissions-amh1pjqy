class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const missing = {}
        for (let i =0; i<nums.length; i++){
            const val = nums[i];
            const rest = target - val;
            if( rest in missing ) {
                return [i, missing[rest]]
            }
            missing[val] = i;
        }
    }
}
