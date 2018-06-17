//Find a pair in array that will sum up to particular number - varSum
// if not sorted, sort, while removing numbers too large from the sorted result.
//foreach item, find (varSum - item) in the array using binary_search. if all items are exhausted, then two numbers do not exist. 
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var array = [];
var arraySize = 10;
for(var i = 0; i < 10; i++){
	array.push(getRandomInt(0,100));
}
array.push(40);
array.push(20);
array.push(10);
array.push(50);
array.push(30);
array.push(30);
console.log(array);

function mergeSort(arrayIn, sumNum){
	if (arrayIn.length <= 1){
		return arrayIn;
	}
	var left = [];
	var right = [];
	for(var i = 0; i < arrayIn.length; i++){
		// array odd
		if ((i % 2 == 1) && (sumNum > arrayIn[i])){
			left.push(arrayIn[i]);
		}
		// array even
		if (i % 2 == 0 && sumNum > arrayIn[i]){
			right.push(arrayIn[i]);
		}
	}
	if (left.length > 0){
		left = mergeSort(left, sumNum);
	}
	if (right.length > 0){
		right = mergeSort(right, sumNum);
	}
	return merge(left, right);
}

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

var sortedAndReducedArray = mergeSort(array, sumNum);

var sumNum = 60;

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

// var key = 56;
// var imin = 0;
// var imax = inArray.length;

var pairs = [];
for (var i = 0; i < sortedAndReducedArray.length; i++){
	var numberToFind = sumNum - sortedAndReducedArray[i];
	var key = binary_search(sortedAndReducedArray, numberToFind, i, sortedAndReducedArray.length);
	if (key.success){
		pairs.push({ pairs: [key.key, sortedAndReducedArray[i]], key: key });
	}
}


console.log(pairs);
