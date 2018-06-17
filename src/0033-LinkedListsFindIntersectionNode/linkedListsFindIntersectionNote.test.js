describe("Linked List Find Intersection Node", () => {
    it("Intersection of Two Linked Lists", () => {
        function ListNode(val) {
            this.val = val;
            this.next = null;
        }

        var getIntersectionNode = function (headA, headB) {
            let aTraverser = headA;
            while (aTraverser) {
                let bTraverser = headB;
                while (bTraverser) {
                    if (bTraverser.val == aTraverser.val) {
                        return aTraverser;
                    }
                    bTraverser = bTraverser.next;
                }
                aTraverser = aTraverser.next;
            }
            return null;
        };

        /*
        A:          a1 → a2
                            ↘
                                c1 → c2 → c3
                            ↗            
        B:     b1 → b2 → b3
        */
        var a = new ListNode("a1");
        a.next = new ListNode("a2");
        var c = new ListNode("c1");
        a.next.next = c;
        c.next = new ListNode("c2");
        c.next.next = new ListNode("c3");
        var b = new ListNode("b1")
        b.next = new ListNode("b2");
        b.next.next = new ListNode("b3");
        b.next.next.next = c;
        expect(getIntersectionNode(a, b).val).toBe("c1");
        a = new ListNode("1")
        b = new ListNode("1")
        expect(getIntersectionNode(a, b).val).toBe("1");

        // 42 / 42 test cases passed. but last test case is too slow. needs the O(n) solution
    });
});