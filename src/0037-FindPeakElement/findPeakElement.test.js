describe("", () => {
    it("Find Peak Element", () => {
        var findPeakElement = function (nums) {
            var peak = nums[0];
            var peakIndex = 0;
            for (var i = 0; i < nums.length; i++) {
                if (nums[i] > peak) {
                    peak = nums[i];
                    peakIndex = i;
                }
            }
            return peakIndex;
        };

        expect(findPeakElement([1, 2, 3, 1])).toBe(2);
        expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toBe(5);
    });
})