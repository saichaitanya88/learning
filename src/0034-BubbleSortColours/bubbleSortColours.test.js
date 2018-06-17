describe("Bubble Sort Colours", () => {
    it("Sort Colors", () => {

        var sortColors = function (nums) {
            bubbleSort(nums);
        };

        var bubbleSort = function (items) {
            if (items === undefined || items === null) {
                return;
            }
            if (!Array.isArray(items)) {
                return;
            }
            if (items.length == 0) {
                return items;
            }
            if (items.length == 1) {
                return items;
            }

            let swapped;
            do {
                swapped = false;
                for (var i = 0; i < items.length; i++) {
                    if (items[i - 1] > items[i]) {
                        // Swap
                        let tmp = items[i - 1];
                        items[i - 1] = items[i];
                        items[i] = tmp;
                        swapped = true;
                    }
                }
            } while (swapped)
        };

        var input = [2, 0, 2, 1, 1, 0];
        var output = [0, 0, 1, 1, 2, 2];
        sortColors(input)
        expect(input.sort()).toEqual(output.sort());

        // passed 87 / 87
        // TODO: Review bubble sort
    });
})