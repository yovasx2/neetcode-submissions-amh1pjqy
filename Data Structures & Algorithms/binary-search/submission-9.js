class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let half = Math.floor(nums.length / 2);
        let low = 0;
        let high = nums.length+10000;
        while (low <= high) {
            if (nums[half] === target) return half;
            if (nums[half] < target) {
                low = half + 1;
            } else {
                high = half - 1;
            }
            half = low + Math.floor((high - low ) /2);
        }
        console.log(low, high, half)
        return -1;
    }
}
