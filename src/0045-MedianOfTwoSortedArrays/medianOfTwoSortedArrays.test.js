describe("Median of two sorted arrays", () => {
    it("", () => {
        var findMedianSortedArrays = function (nums1, nums2) {
            var array = mergeArrays(nums1, nums2);
            if (array.length % 2 == 1) {
                return array[parseInt(array.length / 2)];
            }
            else {
                var sum = array[(array.length / 2)] + array[(array.length / 2) - 1];
                return sum / 2;
            }
            return getMedian(ar1, ar2, n1);
        };
        var mergeArrays = function (nums1, nums2) {
            var i = 0;
            var j = 0;
            var k = 0;
            var merged = [];
            while (i < nums1.length && j < nums2.length) {
                if (nums1[i] < nums2[j]) {
                    merged[k] = nums1[i];
                    i++;
                }
                else {
                    merged[k] = nums2[j];
                    j++;
                }
                k++;
            }
            // finish up with arr1
            while (i < nums1.length) {
                merged[k] = nums1[i];
                k++; i++;
            }

            // finish up with arr2
            while (j < nums2.length) {
                merged[k] = nums2[j];
                k++; j++;
            }

            return merged;
        };

        expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
        expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
        // 2080 / 2080 test cases passed
    });
});
