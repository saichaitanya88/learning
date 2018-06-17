describe("wiggleSort", () => {
    it("", () => {
        let performSortCheck = function (items, i) {
            if (i % 2 == 0) {
                return items[i - 1] < items[i];
            }
            else {
                return items[i - 1] > items[i];
            }
        }
        let wiggleSort = function (items) {
            let swapped;
            do {
                swapped = false;
                for (var i = 0; i < items.length; i++) {
                    if (performSortCheck(items, i)) {
                        // Swap
                        let tmp = items[i - 1];
                        items[i - 1] = items[i];
                        items[i] = tmp;
                        swapped = true;
                    }
                }
            } while (swapped);
            return items;
        };

        var items = [1, 5, 1, 1, 6, 4];
        console.log(items.slice(), wiggleSort(items));
        items = [1, 3, 2, 2, 3, 1];
        console.log(items.slice(), wiggleSort(items));
        items = [1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2];
        console.log(items.slice() + "\n" + wiggleSort(items));
        // 23 / 44 test cases passed.
    });
})