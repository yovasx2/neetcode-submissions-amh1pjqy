class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (nums.length <= 1) return nums;
        
        const n = nums.length;
        
        // Bottom-up iteration: step sizes double each iteration (1, 2, 4, 8...)
        for (let size = 1; size < n; size *= 2) {
            for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
                const mid = Math.min(leftStart + size, n);
                const rightEnd = Math.min(leftStart + 2 * size, n);
                
                this._merge(nums, leftStart, mid, rightEnd);
            }
        }
        return nums;
    }

    /**
     * @private
     * @param {number[]} arr
     * @param {number} start
     * @param {number} mid
     * @param {number} end
     */
    _merge(arr, start, mid, end) {
        const left = arr.slice(start, mid);
        const right = arr.slice(mid, end);
        
        let i = 0, j = 0, k = start;
        
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }
        
        while (i < left.length) arr[k++] = left[i++];
        while (j < right.length) arr[k++] = right[j++];
    }
}
