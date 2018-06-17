describe("3sum", () => {
    it("should do 3sum", () => {
        var existsInThrees = (threes, toAdd) => {
            for (var i = 0; i < threes.length; i++) {
                let three = threes[i];
                if (three.every(n => toAdd.includes(n)) && toAdd.every(n => three.includes(n))) {
                    return true;
                }
            }
            return false;
        };

        var threeSum = function (arr) {
            var threes = [];
            for (var i = 0; i < arr.length; i++) {
                for (var j = i; j < arr.length; j++) {
                    if (j == i) {
                        continue;
                    }
                    for (var k = j; k < arr.length; k++) {
                        if (k == i || k == j) {
                            continue;
                        }
                        if (arr[i] + arr[j] + arr[k] == 0 && !existsInThrees(threes, [arr[i], arr[j], arr[k]])) {
                            threes.push([arr[i], arr[j], arr[k]]);
                        }
                    }
                }
            }
            return threes;
        };

        let arr = [-1, 0, 1, 2, -1, -4];
        let results = [[-1, 0, 1], [-1, -1, 2]];
        let allThrees = threeSum(arr);
        expect(existsInThrees(allThrees, results[0])).toBeTruthy();
        expect(existsInThrees(allThrees, results[1])).toBeTruthy();

        arr = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0];
        allThrees = threeSum(arr);
        expect(allThrees.length).toBe(6);

        let start = new Date();
        threeSum([13, -5, 3, 3, -1, 13, 3, 1, -9, -4, 9, 12, 6, -9, -6, -12, -8, 3, 12, 14, 4, -15, 2, -11, 4, -12, 10, 9, -6, -3, -8, 14, 7, 3, 2, -8, -7, -10, 8, -8, -7, -6, -11, 6, -7, -2, 9, -8, 8, -2, 13, -10, -2, 0, -14, -13, -4, 11, 3, -3, -7, 3, -4, 8, 13, 13, -15, -9, 10, 0, -2, -12, 1, 2, 9, 1, 8, -4, 8, -7, 9, 7, -2, -15, 14, 0, -13, -13, -12, -2, -1, -11, 8, 10, 12, 6, 8, 4, 12, 3, 11, -12, -2, -3, 5, -15, 6, -10, -4, -1, -1, -10, 13]);
        let end = new Date();

        // passes 259 / 313
    });

});