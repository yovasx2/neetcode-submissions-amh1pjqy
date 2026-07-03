class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0];
        let profit = 0;
        for (let i = 1; i < prices.length; i++) {
            const val = prices[i];
            profit = Math.max(profit, val - buy);
            if (val < buy) {
                buy = val;
            }
        }
        return profit;
    }
}
