function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var array = [];
var arraySize = 10;
for(var i = 0; i < 10; i++){
	array.push(getRandomInt(0,100));
}
console.log(array);

/*function merge_sort(list m)
    // Base case. A list of zero or one elements is sorted, by definition.
    if m is empty then
        return m

    // Recursive case. First, divide the list into equal-sized sublists
    // consisting of the even and odd-indexed elements.
    var left := empty list
    var right := empty list
    for each x with index i in m do
        if i is odd then
            add x to left
        else
            add x to right

    // Recursively sort both sublists.
    left := merge_sort(left)
    right := merge_sort(right)

    // Then merge the now-sorted sublists.
    return merge(left, right)
*/

function mergeSort(arrayIn){
	if (arrayIn.length <= 1){
		return arrayIn;
	}
	var left = [];
	var right = [];
	for(var i = 0; i < arrayIn.length; i++){
		// array odd
		if (i % 2 == 1){
			left.push(arrayIn[i]);
		}
		// array even
		if (i % 2 == 0){
			right.push(arrayIn[i]);
		}
	}
	if (left.length > 0){
		left = mergeSort(left);
	}
	if (right.length > 0){
		right = mergeSort(right);
	}
	return merge(left, right);
}

/*
function merge(left, right)
    var result := empty list

    while left is not empty and right is not empty do
        if first(left) ≤ first(right) then
            append first(left) to result
            left := rest(left)
        else
            append first(right) to result
            right := rest(right)

    // Either left or right may have elements left; consume them.
    // (Only one of the following loops will actually be entered.)
    while left is not empty do
        append first(left) to result
        left := rest(left)
    while right is not empty do
        append first(right) to result
        right := rest(right)
    return result
*/

function merge(left,right){
	var result = [];
	while (left.length > 0 && right.length > 0){
		if (left[0] <= right[0]){
			result.push(left[0]);
			left.shift();
		}
		else{
			result.push(right[0]);
			right.shift();
		}
	}
	while(left.length > 0){
		result.push(left[0]);
		left.shift();
	}
	while(right.length > 0){
		result.push(right[0]);
		right.shift();
	}
	return result;
}
