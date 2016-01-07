//Generate subsets of given set of integers
/*
	https://en.wikipedia.org/wiki/Power_set#Representing_subsets_as_functions
	var array = [1,3,5,7];
	var subsets = [
	[1],[1,3],[1,5],[1,7],[1,3,7],[1,5,7],[1,3,5],[3],[3,5],[5]...
	];
*/

var array = [1, 3, 5, 7];
console.log(array);

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
		}
		powerSet.push(set);
	}
	for(var i = 0; i < powerSet.length; i++){
		console.log(powerSet[i]);
	}
}

//http://stackoverflow.com/a/10073788/3892730
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

generateSubsets(array);
