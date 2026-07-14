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
    diameterOfBinaryTree(root) {
        if (!root) return 0;
        return Math.max(this.height(root.left) + this.height(root.right),
        this.diameterOfBinaryTree(root.left), this.diameterOfBinaryTree(root.right))
    }

    height(root) {
        if (!root) return 0;
        return Math.max(this.height(root.left), this.height(root.right)) + 1;
    }
}
