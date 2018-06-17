describe("Kth Largest Element in an Array", () => {
    it("Kth Largest Element in an Array", () => {
        var findKthLargest = function (nums, k) {
            return nums.sort(function (a, b) {
                return b - a;
            })[k - 1];
        };
        expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
        expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
        // passed 32/32
    });
})