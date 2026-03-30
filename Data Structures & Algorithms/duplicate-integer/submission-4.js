class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const seen = {}; // hash map

    for (let i = 0; i < nums.length; i++) {
      const val = nums[i];
      if (val in seen) {
        return true;
      }
      seen[val] = true;
    }

    return false;
  }
}