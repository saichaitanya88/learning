//Remove duplicates in a String in place
// makes use of javascript slice method
var myString = 'afadfhadf89h3l1fhaldfhadf';
function removeDuplicates(input){
	for(var i = 0; i < input.length/2; i++){
		console.log(
			{
				index1: i, 
				index2: input.length-1, 
				input: input, 
				character1: input[i], 
				character2: input[input.length-i],
				length: input.length
			}
		);
		if (input.indexOf(input[i]) != i){
			input = input.slice(0, i) + input.slice(i+1);
			i = i - 1;
		}
		if (input.indexOf(input[input.length-i]) != input.length-i && input.indexOf(input[input.length-i]) > -1){
			input = input.slice(0, input.length-i) + input.slice(input.length-i+1);
			i = i - 1;
		}
	}
	console.log("calcResult : "+ input);
	return input;
}
console.log(myString)
removeDuplicates(myString);
console.log("result: afdh893l1");
