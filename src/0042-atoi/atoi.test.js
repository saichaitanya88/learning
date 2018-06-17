describe("atoi", () => {
    it("", () => {
        var nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-'];
        var myAtoi = function (str) {
            var num = parseInt(str);
            if (num < -2147483647) {
                num = -2147483648;
            }
            if (num > 2147483646) {
                num = 2147483647;
            }
            if (isNaN(num)){
                num = 0;
            }
            return num;
        };
        expect(myAtoi("42")).toBe(42);
    });
});