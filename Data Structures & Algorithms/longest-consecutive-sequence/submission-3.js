class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums);

        let res =0;
        for (let num of seen) {
            let length = 0;
            if (!seen.has(num - 1)) {
                let curr = num;
                while (seen.has(curr)){
                    length++;
                    curr++;
                }
                res = Math.max(res, length)
            }
        }
        return res
    }
}
