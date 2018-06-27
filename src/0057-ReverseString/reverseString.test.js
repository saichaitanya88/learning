describe("Reverse String", () => {
    it("reverseString", () => {
        var reverseString = function(s) {
            return s.split('').reverse().join('')
        };
        expect(reverseString("hello")).toBe("olleh");
    });
});