describe("Reverse Words In A String", () => {
    it("", () => {
        var reverseWords = function(str) {
            var words = [];
            str.split(" ").filter(word => word.trim() != "").forEach(word => {
                words.push(word);
            });
            var output = "";
            while(words.length > 0){
                output = output + words.pop();
                if (words.length != 0){
                    output = output + " ";
                }
            }
            return output;
        };
        expect(reverseWords("the sky is blue")).toBe("blue is sky the");
        expect(reverseWords(" ")).toBe("");
        expect(reverseWords("   a   b ")).toBe("b a");
    });
});