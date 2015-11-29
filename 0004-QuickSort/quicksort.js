/*quicksort(A, lo, hi)
  if lo < hi
    p = partition(A, lo, hi)
    quicksort(A, lo, p - 1)
    quicksort(A, p + 1, hi)

partition(A, lo, hi)
    pivot = A[hi]
    i = lo #place for swapping
    for j = lo to hi - 1
        if A[j] <= pivot
            swap A[i] with A[j]
            i = i + 1
    swap A[i] with A[hi]
    return i
*/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var array = [];
var arraySize = 10;
for(var i = 0; i < 10; i++){
	array.push(getRandomInt(0,100));
}
console.log(array);
function quicksort(A, lo, hi){
	if (lo < hi){
		var p = partition(A, lo, hi);
		quicksort(A, lo, p - 1);
		quicksort(A, p, hi);
	}
	//console.log(A);
}
function partition(A, lo, hi){
	var pivot = A[hi];
	var i = lo;
	for (var j = lo; j < hi; j++){
		if (A[j] <= pivot){
			var tmp = A[j];
			A[j] = A[i];
			A[i] = tmp;
			i = i + 1;
		}
	}
	if (A[hi] < A[i]){
		var tmp = A[hi];
		A[hi] = A[i];
		A[i] = tmp;
	}
	//console.log(A);
	return i;
}

function start(){
	quicksort(array, 0, array.length - 1);
	console.log(array);
}
