class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequents = {};

        nums.forEach(n => {
            if (n in frequents) {
                frequents[n] += 1;
            } else {
                frequents[n] = 1;
            }
        });

        // order frequents and get top k
        return Object.entries(frequents)
            .sort((a, b) => b[1] - a[1]) // sort by frequency descending
            .slice(0, k)                 // take top k
            .map(entry => Number(entry[0])); // extract numbers
    }
}