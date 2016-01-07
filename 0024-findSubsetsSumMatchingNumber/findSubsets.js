//Find all subset of elements in the given set whose sum equals to a given target

var array = [1, 3, 5, 7];
console.log(array);
var num = 10;
function generateSubsets(array){
	var powerSet = [];
	var len = Math.pow(2,array.length);
	for(var i = 0; i < len; i++){
		var binaryArrayOfI = parseInt(i,10).toString(2);
		binaryArrayOfI = pad(binaryArrayOfI, parseInt(len-1,10).toString(2).length);
		var set = [];
		for(var j = 0; j < binaryArrayOfI.length; j++){
			if (binaryArrayOfI[j] == '1'){
				set.push(array[j])
			}
			if (set.reduce(add, 0) > num){
				continue;
			}
		}
		if (set.reduce(add, 0) == num){
			powerSet.push(set);	
		}
	}
	for(var i = 0; i < powerSet.length; i++){
		console.log(powerSet[i]);
	}
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function add(a,b){
	return a + b;
}

generateSubsets(array);
