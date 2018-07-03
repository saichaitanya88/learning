function ListNode(val) {
    this.val = val;
    this.next = null;
}

describe("LinkedListCycle", () => {
    it("", () => {
        var hasCycle = function (head) {
            if (head == null){
                return false;
            }
            var fast = head.next;
            var slow = head;
            while (fast) {
                if (fast == slow) {
                    return true;
                }

                slow = slow.next;
                fast = fast.next;
                if (fast) {
                    fast = fast.next;
                }
            }
            return false;
        };
        // passes 16/16
    });
});