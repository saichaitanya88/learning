//Circular shift an array of integer input array by 'k'  	number of elements
// Easy Javascript way - array.push(array.shift(5));array

var k = 100;
var array = [1, 3, 4, 5, 6, 7, 9, 56, 7214];
// LEFT SHIFT
for(var i = 0; i < k; i++){
	array.push(array.shift());
}
// RIGHT SHIFT
for(var i = 0; i < k; i++){
	array.push(array.pop());
}
