describe("", () => {
    it("Zig Zag Level Order Traversal", () => {
        var zigzagLevelOrder = function (root) {
            let result = [];
            if (root == null) {
                return result;
            }
            let left = false;
            let stack = [];
            stack.push(root);
            while (stack.length) {
                let tStack = [];
                let list = [];
                while (stack.length) {
                    let pop = stack.pop();
                    list.push(pop.val);
                    if (left) {
                        if (pop.right != null) tStack.push(pop.right);
                        if (pop.left != null) tStack.push(pop.left);
                    }
                    else {
                        if (pop.left != null) tStack.push(pop.left);
                        if (pop.right != null) tStack.push(pop.right);
                    }
                }
                left = !left;
                result.push(list);
                stack = tStack;
            }
            return result;
        };
        // passes 33 / 33 test cases passed.
    });

});