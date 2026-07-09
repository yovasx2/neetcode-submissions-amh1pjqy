class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */

    // top-down
    /*
    minCostClimbingStairs(cost) {
        const memo = [];
        const dfs = (i) => {
            if (i >= cost.length) {
                return 0;
            }
            if (!memo[i]) {
                memo[i] = cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
            }
            return memo[i];
        };
        return Math.min(dfs(0), dfs(1));
    }*/
    // bottom-up 
    minCostClimbingStairs(cost) {
        const dp = [0, 0];
        for(let i=2;i<cost.length+1;i++){
            dp[i] = Math.min(cost[i-1] + dp[i-1], cost[i-2] + dp[i-2])
        }
        return dp[cost.length];
    }
}
