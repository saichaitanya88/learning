describe("NonDecreasingArray", () => {
    it("", () => {
        var checkPossibility = function (nums) {
            var countOfElementsOutOfOrder = 0;
            for (var i = 0; i < nums.length; i++) {
                if ((i + 1) == nums.length) {
                    continue;
                }
                if (nums[i] > nums[i + 1]) {
                    countOfElementsOutOfOrder++;
                    // check associative property to be true for preceeding pair, and succeeding pair
                    if (nums[i + 2] !== undefined && nums[i - 1] > nums[i + 1] && nums[i] > nums[i + 2]) {
                        countOfElementsOutOfOrder++;
                    }
                }
                if (countOfElementsOutOfOrder > 1) {
                    return false;
                }
            }
            return true;
        };
        // console.log("checkPossibility([4,2,3])", checkPossibility([4, 2, 3]));
        expect(checkPossibility([4, 2, 3])).toBeTruthy();
        expect(checkPossibility([4, 2, 1])).toBeFalsy();
        expect(checkPossibility([4, 3, 2])).toBeFalsy();
        expect(checkPossibility([3, 4, 2, 3])).toBeFalsy();
        expect(checkPossibility([3, 3, 2, 2])).toBeFalsy();
        expect(checkPossibility([2, 3, 3, 2, 4])).toBeTruthy();
    });
});