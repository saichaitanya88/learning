/*
Maximum Sub array [Kadane Algorithm]

def max_subarray(A):
    max_ending_here = max_so_far = 0
    for x in A:
        max_ending_here = max(0, max_ending_here + x)
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far

*/

function max_subarray(A){
	var max_so_far = 0;
	var max_ending_here = max_so_far;
	for(var i = 0; i < A.length; i++){
		max_ending_here = Math.max(0, max_ending_here + A[i]);
		max_so_far = Math.max(max_so_far, max_ending_here);
	}
	return max_so_far;
}

max_subarray([4,5,6,6,6,0,1,-1,-5]);
max_subarray([-1,-1,-1,5,-1,-1,-1]);
max_subarray([2,1,0,-1,-2,-3,-4,-5,-6]);
