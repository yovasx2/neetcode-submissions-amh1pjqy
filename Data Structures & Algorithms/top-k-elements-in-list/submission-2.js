class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // 1. Count frequencies using a Map (faster than standard object lookup)
        const frequents = new Map();
        nums.forEach(n => frequents.set(n, (frequents.get(n) || 0) + 1));

        // 2. Create buckets where the index represents the frequency count
        // The maximum possible frequency is nums.length
        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        // 3. Populate buckets: bucket[frequency] = [num1, num2, ...]
        frequents.forEach((count, num) => {
            buckets[count].push(num);
        });

        // 4. Collect the top K elements by iterating backwards from the highest frequency
        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i]);
            }
            if (result.length >= k) {
                return result.slice(0, k); // Ensure we return exactly k elements
            }
        }

        return result;
    }
}
