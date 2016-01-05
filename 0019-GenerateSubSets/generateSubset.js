//Generate subsets of given set of integers
/*
	var array = [1,3,5,7];
	var subsets = [
	[1],[1,3],[1,5],[1,7],[1,3,7],[1,5,7],[1,3,5],[3],[3,5],[5]...
	];
*/
/*
IMPLEMENTATION IN JAVA
public ArrayList<ArrayList<Integer>> subsets(int[] S) {
	if (S == null)
		return null;
 
	Arrays.sort(S);
 
	ArrayList<ArrayList<Integer>> result = new ArrayList<ArrayList<Integer>>();
 
	for (int i = 0; i < S.length; i++) {
		ArrayList<ArrayList<Integer>> temp = new ArrayList<ArrayList<Integer>>();
 
		//get sets that are already in result
		for (ArrayList<Integer> a : result) {
			temp.add(new ArrayList<Integer>(a));
		}
 
		//add S[i] to existing sets
		for (ArrayList<Integer> a : temp) {
			a.add(S[i]);
		}
 
		//add S[i] only as a set
		ArrayList<Integer> single = new ArrayList<Integer>();
		single.add(S[i]);
		temp.add(single);
 
		result.addAll(temp);
	}
 
	//add empty set
	result.add(new ArrayList<Integer>());
 
	return result;
}
*/

var array = [1, 3, 5, 7];
console.log(array);
function generateSubSets(array){
	if (!array) return;
	var result = [];
	array.sort(function (a, b) {
	    return a - b;
	});
	for (var i = 0; i < array.length; i++) {
	    var temp = [];
	    //get sets that are already in result
	    for (var j = 0; j < result.length; j++) {
	        temp.push(result[j]);
	    }
	    //add array[i] to existing sets
	    for (var k = 0; k < temp.length; k++) {
	        if (temp[k].indexOf(array[i]) >= 0)
    	        temp[k].push(array[i]);
	    }
	    //add array[i] only as a set
	    var single = [];
	    single.push(array[i]);
	    temp.push(single);
	    for (var u = 0; u < temp.length; u++) {
	        result.push(temp[u]);
	    }
	}
    //add empty set
	result.push([]);
	return result;
}

generateSubSets(array);
