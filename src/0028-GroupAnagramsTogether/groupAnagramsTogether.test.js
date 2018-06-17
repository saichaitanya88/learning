describe("Group Anagrams Together", () => {
    it("should group anagrams together", () => {
        var areAnagrams = (wordA, wordB) => {
            var wordACounts = {};
            for (var i = 0; i < wordA.length; i++) {
                if (!wordACounts[wordA[i]]) {
                    wordACounts[wordA[i]] = 0;
                }
                wordACounts[wordA[i]]++;
            }
            var wordBCounts = {};
            for (var i = 0; i < wordB.length; i++) {
                if (!wordBCounts[wordB[i]]) {
                    wordBCounts[wordB[i]] = 0;
                }
                wordBCounts[wordB[i]]++;
            }
            var wordAMatchesWordB = true;
            var wordBMatchesWordA = true;
            var wordAKeys = Object.keys(wordACounts);
            var wordBKeys = Object.keys(wordBCounts);

            for (var i = 0; i < wordAKeys.length; i++) {
                var key = wordAKeys[i];
                if (wordACounts[key] != wordBCounts[key]) {
                    wordAMatchesWordB = false;
                    break;
                }
            }

            for (var i = 0; i < wordBKeys.length; i++) {
                var key = wordBKeys[i];
                if (wordACounts[key] != wordBCounts[key]) {
                    wordBMatchesWordA = false;
                    break;
                }
            }

            return wordAMatchesWordB && wordBMatchesWordA;
        }
        var groupAnagrams = (words) => {
            var groups = [];

            while (words.length > 0) {
                var group = [];
                group.push(words[0]);
                for (var i = 1; i < words.length; i++) {
                    if (areAnagrams(words[0], words[i])) {
                        group.push(words[i]);
                    }
                }
                group.forEach(word => {
                    var index = words.indexOf(word);
                    if (index >= 0)
                        words.splice(index, 1);
                });
                groups.push(group);
            }

            return groups;
        };

        var input = ["eat", "tea", "tan", "ate", "nat", "bat"];
        var output = [
            ["eat", "tea", "ate"],
            ["tan", "nat"],
            ["bat"]
        ];
        expect(groupAnagrams(input)).toEqual(output);
        // Passes 95/101 cases
    });
});