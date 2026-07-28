class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((val, idx) => [val, speed[idx]]);
        const leads = [];
        pairs.sort((a, b) => a[0] - b[0]);
        for (let i = pairs.length - 1; i >= 0; i--) {
            const [pos, spd] = pairs[i];
            const currT = (target - pos) / spd;
            leads.push(currT);
            if (leads.length >= 2 && leads[leads.length - 1] <= leads[leads.length - 2]) {
                leads.pop();
            }
        }
        return leads.length;
    }
}
