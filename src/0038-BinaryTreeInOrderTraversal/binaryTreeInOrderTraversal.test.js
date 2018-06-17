function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

describe("Trees and Graphs", () => {
    it("Binary Tree In Order Traversal", () => {
        /*
            Check if the current node is empty or null.
            Traverse the left subtree by recursively calling the in-order function.
            Display the data part of the root (or current node).
            Traverse the right subtree by recursively calling the in-order function.
        */

        var traverse = function (node) {
            var nodes = [];
            if (node != null) {
                nodes = nodes.concat(traverse(node.left))
                nodes = nodes.concat(node.val);
                nodes = nodes.concat(traverse(node.right))
            }
            return nodes.filter(n => n);
        }

        var inorderTraversal = function (root) {
            return traverse(root);
        };
        var input;
        input = new TreeNode(1);
        input.right = new TreeNode(2);
        input.right.left = new TreeNode(3);
        var output = [1, 3, 2];
        expect(inorderTraversal(input)).toEqual(output);

        // passes 68/68 (best run time 52ms)
    });

});