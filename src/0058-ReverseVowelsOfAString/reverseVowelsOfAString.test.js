describe("reverseVowelsOfAString", () => {
    it("", () => {
        var vowels = "aeiou";
        var reverseVowels = function (s) {
            var strArray = s.split('');
            var vowelIndexes = strArray
                .map((c, i) => ({ c, i }))
                .filter(v => vowels.indexOf(v.c) > -1);
            vowelIndexes = vowelIndexes.reverse();

            for (var i = 0; i < vowelIndexes.length; i++) {
                let v = vowelIndexes[i];
                strArray[s.length - v.i] = v.c;
            }
            return strArray.join('');
        };
        expect(reverseVowels("hello")).toBe("holle");
        expect(reverseVowels("leetcode")).toBe("leotcede");
    })
})