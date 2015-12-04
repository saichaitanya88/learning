function binary_search(array, key, imin, imax) {

    while (imin <= imax) {
        var imid = Math.floor((imax - imin) / 2) + imin;
        if (array[imid] == key) {
            return { key: key, success: true, index: imid }
        }
        else if (array[imid] < key) {
            imin = imid + 1;
        }
        else{
            imax = imid - 1;
        }
    }

    return { key: null, success: false, index: -1 };
}

var inArray = [1, 3, 4, 5, 6, 7, 9, 56, 7214];
var key = 56;
var imin = 0;
var imax = inArray.length;
binary_search(inArray, key, imin, imax);
