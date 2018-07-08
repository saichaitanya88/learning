describe("BinarySearch", () => {
    it("", () => {
        var binarySearchImpl = (numbers, value, low, high) => {
            if (high < low) {
                return null;
            }

            var mid = Math.floor((low + high) / 2);

            if (numbers[mid] > value) {
                return binarySearchImpl(numbers, value, low, mid - 1);
            }
            if (numbers[mid] < value) {
                return binarySearchImpl(numbers, value, mid + 1, high);
            }
            return mid;
        }
        var binarySearch = (numbers, value) => {
            return binarySearchImpl(numbers, value, 0, numbers.length);
        }
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 4)).toBe(3);
    });
});