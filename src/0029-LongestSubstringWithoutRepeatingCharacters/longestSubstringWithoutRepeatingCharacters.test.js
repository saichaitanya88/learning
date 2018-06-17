describe("Longest Substring without repeating characters", () => {
    it("should find longest substring without repeating characters", () => {
        let hasDuplicates = (str) => {
            for (var i = 0; i < str.length; i++) {
                if (str.indexOf(str[i]) != i) {
                    return true;
                }
            }
            return false;
        }
        let lengthOfLongestSubstring = (str) => {
            if (str.length == 1) {
                return 1;
            }
            var s = "";
            for (var start = 0; start < str.length; start++) {
                for (var end = start; end <= str.length; end++) {
                    let sub = str.substring(start, end);
                    if (hasDuplicates(sub)) {
                        break;
                    }
                    if (sub.length >= s.length) {
                        s = sub;
                    }
                }
            }
            return s.length;
        }
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
        expect(lengthOfLongestSubstring("c")).toBe(1);
        expect(lengthOfLongestSubstring("ca")).toBe(2);

        // passed 982 / 983
    });
})