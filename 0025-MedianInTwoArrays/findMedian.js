/*
    http://www.geeksforgeeks.org/median-of-two-sorted-arrays/
*/

function main(){
	var ar1 = [1, 12, 15, 26, 38];
	var ar2 = [2, 13, 17, 30, 45];
	var n1 = ar1.length;
	var n2 = ar2.length;
	if (n1 == n2){
		return getMedian(ar1,ar2,n1);
	}
}

function getMedian(ar1, ar2, n){
	return getMedianRec(ar1, ar2, 0, n-1, n);
}

function getMedianRec(ar1, ar2, left, right, n){
	if  (left > right)
		return getMedianRec(ar2,ar1,0,n-1,n);
	var i = (left + right) / 2;
	var j = n - i - 1;
	
	if (ar1[i] > ar2[j] && (j == n-1 || ar1[i] <= ar2[j+1])){
		if (i == 0 || ar2[j] > ar1[i-1]){
			return (ar1[i] + ar2[j])/2;
		}
		else 
			return (ar1[i] + ar2[i-1])/2;
	}
	else if(ar1[i] > ar2[j] && j != n-1 && ar1[i] > ar2[j+1])
		return getMedianRec(ar1, ar2, left, i-1, n);
	else
		return getMedianRec(ar1, ar2, i+1, right, n);
}
