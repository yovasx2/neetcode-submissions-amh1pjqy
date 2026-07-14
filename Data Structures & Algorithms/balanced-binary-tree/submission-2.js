class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        // Call the helper and extract only the first element (the boolean)
        return this._checkBalance(root)[0];
    }

    /**
     * @param {TreeNode} root
     * @return {[boolean, number]}
     */
    _checkBalance(root) {
        if (!root) return [true, 0];

        const [leftIsBalanced, leftHeight] = this._checkBalance(root.left);
        if (!leftIsBalanced) return [false, 0]; // Fast failure

        const [rightIsBalanced, rightHeight] = this._checkBalance(root.right);
        if (!rightIsBalanced) return [false, 0]; // Fast failure

        const isCurrentBalanced = Math.abs(leftHeight - rightHeight) < 2;
        const height = Math.max(leftHeight, rightHeight) + 1;

        return [isCurrentBalanced, height];
    }
}