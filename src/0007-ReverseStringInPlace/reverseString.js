//Reverse a string - Inplace
var myString = ['1','2','3','4','5','6','7','8','9','0'];
function reverseString(input){
	for(var i = 0; i < Math.floor(input.length/2); i++){
		//swap input[i] with input[input.length-1];
		var tmp = input[i];
		input[i] = input[input.length-i-1];
		input[input.length-i-1] = tmp;
	}
	console.log("calcResult : "+ input);
}
reverseString(myString);
console.log("result: 0987654321");
