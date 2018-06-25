describe("Hamming Distance Binary", () => {
    it("", () => {
        var hammingDistance = function (x, y) {
            var diff = x ^ y;
            var count = diff.toString(2).split("").map(char => {
                if (char == "1") {
                    return 1;
                } else {
                    return 0;
                }
            }).reduce((a,b) => a + b, 0);
            return count;
        };
        expect(hammingDistance(1,4)).toBe(2);
    });
});