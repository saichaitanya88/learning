describe("LinkedLists Add Two Numbers", () => {
    it("Add Two Numbers", () => {
        function ListNode(val) {
            this.val = val;
            this.next = null;
        }

        var addTwoNumbers = function (l1, l2) {
            let o = new ListNode(0);
            let aTraverser = l1;
            let bTraverser = l2;
            let oTraverser = o;
            while (aTraverser || bTraverser) {
                let aVal = (aTraverser && aTraverser.val) || 0;
                let bVal = (bTraverser && bTraverser.val) || 0;
                let oVal = aVal + bVal + oTraverser.val; // remainder 
                if (oVal < 10) {
                    oTraverser.val = oVal;
                }
                else {
                    oTraverser.val = oVal % 10;
                    oTraverser.next = new ListNode(1); // carry over the one 
                }
                // navigate to next 
                if (aTraverser) {
                    aTraverser = aTraverser.next;
                }
                if (bTraverser) {
                    bTraverser = bTraverser.next;
                }
                if (!oTraverser.next && (bTraverser || aTraverser)) {
                    oTraverser.next = new ListNode(0);
                }
                oTraverser = oTraverser.next;
            }
            return o;
        };

        let a = new ListNode(2);
        a.next = new ListNode(4);
        a.next.next = new ListNode(3);
        let b = new ListNode(5);
        b.next = new ListNode(6);
        b.next.next = new ListNode(4);
        var o = addTwoNumbers(a, b);
        expect(o.val).toBe(7);
        expect(o.next.val).toBe(0);
        expect(o.next.next.val).toBe(8);

        // passes 1562 / 1562 (speed performance is 88%)
    });

});