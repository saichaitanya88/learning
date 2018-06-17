describe("Top k freq elements", () => {
    it("Top K Frequent Elements", () => {
        var topKFrequent = function (nums, k) {
            var countDict = {};
            for (var i = 0; i < nums.length; i++) {
                if (!countDict[nums[i]]) {
                    countDict[nums[i]] = 0;
                }
                countDict[nums[i]]++;
            }

            var topK = Object.keys(countDict).sort(function (a, b) {
                return countDict[b] - countDict[a];
            }).map(k => parseInt(k));

            return topK.slice(0, k);
        };

        var topK = topKFrequent([1, 1, 1, 2, 2, 3], 2);
        expect(topK).toEqual([1, 2])
        topK = topKFrequent([6, 0, 1, 4, 9, 7, -3, 1, -4, -8, 4, -7, -3, 3, 2, -3, 9, 5, -4, 0], 6);
        expect(topK.sort()).toEqual([-3, -4, 4, 0, 1, 9].sort());

        // passed 20/20 96%
        // TODO: implement manual merge sort
    });
})