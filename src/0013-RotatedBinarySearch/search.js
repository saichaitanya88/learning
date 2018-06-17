/*
Find and element in rotated Binary sorted array
*/

function binary_search(array, key, imin, imax) {

    while (imin <= imax) {
        var imid = Math.floor((imax - imin) / 2) + imin;
        if (array[imid] == key) {
            return { key: key, success: true, index: imid }
        }
        else if (array[imid] < key) {
            imin = imid + 1;
        }
        else {
            imax = imid - 1;
        }
    }

    return { key: null, success: false, index: -1 };
}

function begin_search(A, key){
    // find largest item location
    // then run binary_search(params);
    var imax = A.length - 1;
    var imin = 0;
    var imid = Math.floor(A.length / 2);
    var maxValue = A[0];
    var maxIndex = 0;
    var i = 0;
    while ((((imin + i) < imid) && ((imax - i) > imid))) {
        if (maxValue < A[imin + i]) { maxValue = A[imin + i]; maxIndex = imin+i}
        if (maxValue < A[imid]) { maxValue = A[imid]; maxIndex = imid; }
        if (maxValue < A[imax - i]) { maxValue = A[imax - i]; maxIndex = imax - i; }
        i++;
    }
    if (key < maxValue) {
        return binary_search(A, key, 0, maxIndex);
    }
    else if (key > maxValue) {
        return binary_search(A, key, maxIndex, A.length);
    }
    else if (key == maxValue) {
        return { key: key, success: true, index: maxIndex }
    }
}

console.log("loaded");

console.log(begin_search([6,7,8,1,2,3,4,5], 8));
console.log(begin_search([9, 56, 7214, 1, 3, 4, 5, 6, 7], 56));
console.log(begin_search([6, 7, 8, 9, 1, 2, 3, 4], 3)); - currently failing
console.log(begin_search([8, 1, 3, 3, 5, 6, 7, 7], 1)); -- currently failing
console.log(begin_search([9, 10, 121, 1, 3, 4, 9, 9], 9));
console.log(begin_search([9, 10, 121, 1, 3, 4, 9, 9], 98));
/*
Step 1: Find if array is binary sorted array or rotated binary sorted array
Step 2: Stop if key is found while determining
Step 3: consider the rotated offset while searching the rotated sorted array (use rotated_binary_search) method
*/
