describe("Jewels and Stones", () => {
    it("", () => {
        var numJewelsInStones = function (J, S) {
            var count = 0;
            J.split("").forEach(j => {
                S.split("").forEach(s => {
                    if (s == j) {
                        count++;
                    }
                });
            });
            return count;
        };
        expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
        expect(numJewelsInStones("z", "ZZ")).toBe(0);
    });
});