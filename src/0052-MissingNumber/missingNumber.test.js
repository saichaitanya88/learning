describe("MissingNumber", () => {
    it("witn O(n) complexity", () => {
        var missingNumber = function (nums) {
            var expectedSum = nums.length;
            var actualSum = 0;
            for (var i = 0; i < nums.length; i++) {
                expectedSum = expectedSum + i;
                actualSum = actualSum + nums[i];
            }
            return expectedSum - actualSum;
        };
        expect(missingNumber([3, 0, 1])).toBe(2);
        expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
    });
    it("witn O(n) complexity using gauss formula", () => {
        var missingNumber = function (nums) {
            var expectedSum = nums.length * (nums.length + 1) / 2;
            var actualSum = 0;
            for (var i = 0; i < nums.length; i++) {
                actualSum = actualSum + nums[i];
            }
            return expectedSum - actualSum;
        };
        expect(missingNumber([3, 0, 1])).toBe(2);
        expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
    });
});