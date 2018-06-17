describe("Increasing Triplet Subsequence", () => {
    it("Increasing Triplet Subsequence", () => {
        var increasingTriplet = function (nums) {
            if (nums.length < 3) {
                return false;
            }

            for (var i = 0; i < nums.length; i++) {
                let num1 = nums[i];
                for (var j = i + 1; j < nums.length; j++) {
                    let num2 = nums[j];
                    if (num2 > num1) {
                        for (var k = j + 1; k < nums.length; k++) {
                            let num3 = nums[k];
                            if (num3 > num2) {
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        };
        expect(increasingTriplet([1, 2, 3, 4, 5])).toBeTruthy();
        expect(increasingTriplet([5, 4, 3, 2, 1])).toBeFalsy();
        expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBeTruthy();
        expect(increasingTriplet([5, 1, 5, 5, 2, 5, 4])).toBeTruthy();

        // passes 61/61 but is very slow
    });
});