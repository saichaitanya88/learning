describe("wiggleSort2", () => {
    it("", () => {
        // https://github.com/paopao2/leetcode-js/blob/master/Wiggle%20Sort%20II.js
        function swap(nums, i, j) {
            var temp = nums[i];

            nums[i] = nums[j];
            nums[j] = temp;
        }
        var wiggleSort = function (nums) {
            var temp = [];
            var i; var k; var r;
            var len = nums.length;
            var midIndex = parseInt((len + 1) / 2);
            var medium = findKth(0, len - 1, midIndex, nums);

            for (i = 0, l = 0, r = len - 1; i < len; i++) {
                if (nums[i] < medium) {
                    temp[l++] = nums[i];
                } else if (nums[i] > medium) {
                    temp[r--] = nums[i];
                }
            }

            while (l < midIndex) {
                temp[l++] = medium;
            }
            while (r >= midIndex) {
                temp[r--] = medium;
            }
            r = nums.length;
            for (i = 0; i < len; i++) {
                nums[i] = (i & 1) === 0 ? temp[--l] : temp[--r];
            }
            return nums;
        };
        function findKth(start, end, k, nums) {
            if (start >= end) {
                return nums[end];
            }

            var index = partition(start, end, nums),
                count = index - start + 1;

            if (count === k) {
                return nums[index];
            }

            if (count < k) {
                return findKth(index + 1, end, k - count, nums);
            }

            return findKth(start, index - 1, k, nums);
        }

        function partition(start, end, nums) {
            var val = nums[start],
                i,
                j;

            i = start + 1;
            j = end;

            while (true) {
                while (nums[i] <= val) {
                    i++;
                }

                while (nums[j] > val) {
                    j--;
                }

                if (i >= j) {
                    break;
                }

                swap(nums, i, j);
            }

            swap(nums, j, start);

            return j;
        }
        var items = [1, 5, 1, 1, 6, 4];
        console.log(items.slice(), wiggleSort(items));
        items = [1, 3, 2, 2, 3, 1];
        console.log(items.slice(), wiggleSort(items));
        items = [1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2];
        console.log(items.slice() + "\n" + wiggleSort(items));
        // 23 / 44 test cases passed.
    });
})