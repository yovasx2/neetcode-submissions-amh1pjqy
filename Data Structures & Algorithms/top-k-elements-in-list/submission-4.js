class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequents = {};

        // Faster frequency counting
        for (const n of nums) {
            frequents[n] = (frequents[n] || 0) + 1;
        }

        // order frequents and get top k
        return Object.entries(frequents)
            .sort((a, b) => b[1] - a[1]) // sort by frequency descending
            .slice(0, k) // take top k
            .map((entry) => entry[0]); // extract numbers
    }
}
