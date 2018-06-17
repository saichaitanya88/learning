//var arrIn = [12,44,1,14,66,175,151,874,1,0,51];
//var arrIn  = [23 , 1 , 6 , 19 , 14 , 18 , 8 , 24 , 15]
//http://www.cse.hut.fi/en/research/SVG/TRAKLA2/tutorials/heap_tutorial/taulukkona.html
var arrIn  = [14,16,10,7,9,8,3,4,2,1]
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
arrIn = shuffleArray(arrIn);
function BuildMaxHeap(arrIn){
	var heapLength = arrIn.length;
	for(var i = Math.floor(heapLength / 2); i >= 1; i--){
		MaxHeapify(arrIn, i-1);
	}
};

function MaxHeapify(arrIn, index){
	var heapLength = arrIn.length;
	var left = index * 2;
	var right = (index * 2) + 1;
	var largest = index;
	if (left <= heapLength && arrIn[left] > arrIn[largest]){
		largest = left;
	}
	if (right <= heapLength && arrIn[right] > arrIn[largest]){
		largest = right;
	}
	if (largest != index){
		// swap arrIn[largest] and arrIn[index]
		var temp = arrIn[largest];
		arrIn[largest] = arrIn[index];
		arrIn[index] = temp;
		console.log( { left: left, right: right, largest: largest });
		MaxHeapify(arrIn, largest);
	}
	console.log(arrIn);
}

BuildMaxHeap(arrIn);
console.log("done Max Heap");
function BuildMinHeap(arrIn){
	var heapLength = arrIn.length;
	for(var i = Math.floor(heapLength / 2); i >= 1; i--){
		MinHeapify(arrIn, i-1);
	}
};

function MinHeapify(arrIn, index){
	var heapLength = arrIn.length;
	var left = index * 2;
	var right = (index * 2) + 1;
	var largest = index;
	if (left <= heapLength && arrIn[left] < arrIn[largest]){
		largest = left;
	}
	if (right <= heapLength && arrIn[right] < arrIn[largest]){
		largest = right;
	}
	if (largest != index){
		// swap arrIn[largest] and arrIn[index]
		var temp = arrIn[largest];
		arrIn[largest] = arrIn[index];
		arrIn[index] = temp;
		console.log( { left: left, right: right, largest: largest });
		MinHeapify(arrIn, largest);
	}
	console.log(arrIn);
}
BuildMinHeap(arrIn);
console.log("done Min Heap");
