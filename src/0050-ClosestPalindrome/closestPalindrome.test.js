describe("Closest Palindrome", () => {
    it("", () => {
        var isPalindrome = function (str) {
            for (var i = 0; i < str.length; i++) {
                if (str[i] != str[str.length - i - 1]) {
                    return false;
                }
            }
            return true;
        };
        var nearestPalindromic = function (input) {
            var num = parseInt(input);
            var runner = num - 1;
            var diffLower = 0; var lowerPalindrome;
            var diffHigher = 0; var upperPalindrome;
            // check lower numbers
            while (runner >= 0) {
                if (isPalindrome(runner.toString())) {
                    lowerPalindrome = runner;
                    break;
                }

                diffLower++;
                runner--;
            }

            // check higher numbers
            runner = num + 1;
            while (diffHigher <= diffLower) {
                if (isPalindrome(runner.toString())) {
                    upperPalindrome = runner;
                    break;
                }

                diffHigher++;
                runner++;
            }
            if (!upperPalindrome){
                return lowerPalindrome.toString();
            }
            var diffUpper = Math.abs(input - upperPalindrome);
            var diffLower = Math.abs(input - lowerPalindrome);
            if (diffUpper == diffLower){
                return Math.min(lowerPalindrome, upperPalindrome).toString();
            }
            else if (diffUpper > diffLower) {
                return lowerPalindrome.toString();
            }
            else {
                return upperPalindrome.toString();
            }
        };

        expect(nearestPalindromic("12")).toBe("11");
        expect(nearestPalindromic("10")).toBe("9");
        expect(nearestPalindromic("123")).toBe("121");
        expect(nearestPalindromic("230")).toBe("232");
        expect(nearestPalindromic("1234")).toBe("1221");
        expect(nearestPalindromic("998")).toBe("999");
        expect(nearestPalindromic("1")).toBe("0");

        // too slow... 
    })

})