/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0;

        let maxDepth = 0;
        // Store pairs of [node, current_depth_of_this_node]
        let stack = [[root, 1]];

        while (stack.length) {
            // 1. Extract the actual depth for this specific node
            const [node, currentDepth] = stack.pop();

            // 2. Continually track the absolute maximum depth seen so far
            maxDepth = Math.max(maxDepth, currentDepth);

            // 3. Push children onto the stack with an incremented depth level
            if (node.right) {
                stack.push([node.right, currentDepth + 1]);
            }
            if (node.left) {
                stack.push([node.left, currentDepth + 1]);
            }
        }

        return maxDepth;
    }
}
