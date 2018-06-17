/*Find an element which is repeated more than n/2 times  in a given set/array. [Moores Voting algorithm]
*/

function getMajorityCandidate(A){
	var candidate = null;
	var counter = 0;
	for(var i = 0; i < A.length; i++){
		if (candidate == null){
			candidate = A[i];
			counter++;
		}
		else if (candidate == A[i]){
			counter++;
		}
		else if (candidate != A[i]){
			counter--;
		}
		if (!counter){
			candidate = null;
		}
	}
	return { candidate: candidate, counter: counter };
}

console.log(getMajorityCandidate([4,4,5,1,1,1,1,1,5,6,7]));
console.log(getMajorityCandidate([1,1,1,1,4,4,4,4]));
//A A A C C B B C C C B C C
console.log(getMajorityCandidate([1,1,1,3,3,2,2,3,3,3,2,3,3]))
