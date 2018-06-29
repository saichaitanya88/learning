describe("reverseVowelsOfAString", () => {
    it("", () => {
        var vowels = "aeiou";
        var reverseVowels = function (s) {
            var strArray = s.split('');
            var vowelIndexes = strArray
                .map((c, i) => ({ c, i }))
                .filter(v => vowels.indexOf(v.c) > -1);
            var vowelIndexesReversed = vowelIndexes.slice().reverse();

            for (var i = 0; i < vowelIndexesReversed.length; i++) {
                let v = vowelIndexesReversed[i];
                var index = vowelIndexes[i].i;
                strArray[v.i] = vowelIndexes[i].c;
            }
            return strArray.join('');
        };
        expect(reverseVowels("hello")).toBe("holle");
        expect(reverseVowels("leetcode")).toBe("leotcede");
        expect(reverseVowels("aA")).toBe("Aa");
    });
});