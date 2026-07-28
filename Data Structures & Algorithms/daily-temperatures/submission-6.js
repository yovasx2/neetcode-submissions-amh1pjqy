class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];
        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            while (stack.length && t > stack[stack.length - 1][0]) {
                const [topT, topI] = stack.pop();
                res[topI] = i - topI;
            }
            stack.push([t, i]);
        }
        return res;
    }
}
