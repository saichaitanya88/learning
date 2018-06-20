describe("FizzBuzz", () => {
    it("", () => {
        var fizzBuzz = function (n) {
            var fb = [];
            for (var i = 1; i <= n; i++) {
                if (i % 3 == 0 && i % 5 == 0) {
                    fb.push("FizzBuzz");
                }
                else if (i % 3 == 0) {
                    fb.push("Fizz");
                }
                else if (i % 5 == 0) {
                    fb.push("Buzz");
                }
                else {
                    fb.push(i.toString());
                }
            }
            return fb;
        };
        var results = fizzBuzz(15);
        console.log("results", results);
        expect(results[0]).toBe("1");
        expect(results[2]).toBe("Fizz");
        expect(results[4]).toBe("Buzz");
        expect(results[14]).toBe("FizzBuzz");
    });
})