/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
    function checkSame(p, q) {
        if (!p && !q) {
            return;
        }

        if ((!p && q) || (p && !q)) {
            return false;
        }

        if (p.val !== q.val) {
            return false;
        }

        if (checkSame(p.left, q.left) === false) return false;
        if (checkSame(p.right, q.right) === false) return false;
    }

    return checkSame(p, q) === false ? false : true;
};
