describe("Largest Palindrome", () => {
    it("should find largest palindrome", () => {
        var isPalindrome = function (str) {
            for (var i = 0; i < str.length; i++) {
                if (str[i] != str[str.length - i - 1]) {
                    return false;
                }
            }
            return true;
        };
        var longestPalindrome = function (str) {
            if (str.length == 1) {
                return str;
            }
            var s = "";
            for (var start = 0; start < str.length; start++) {
                for (var end = start; end <= str.length; end++) {
                    let sub = str.substring(start, end);
                    if (sub.length > s.length && isPalindrome(sub))
                        s = sub;
                }
            }
            return s;
        }

        expect(longestPalindrome("babad")).toBe("bab");
        expect(longestPalindrome("bbbbb")).toBe("bbbbb");
        expect(longestPalindrome("cbbd")).toBe("bb");
        expect(longestPalindrome("bb")).toBe("bb");

        // passing 94/94 but very slow
    });
})