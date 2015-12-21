//Search for a given pattern in text [Rabin Karp  	Algorithm]

/*
function RabinKarp(string s[1..n], string pattern[1..m])
hpattern := hash(pattern[1..m]);  hs := hash(s[1..m])
for i from 1 to n-m+1
	if hs = hpattern
		if s[i..i+m-1] = pattern[1..m]
			return i
	hs := hash(s[i+1..i+m])
return not found
*/


function hash(str){
	var hashValue = 0;
	var base = 101;
	for(var i = 0; i < str.length; i++){
		hashValue = hashValue + (Math.pow(101, str.length - i - 1) * str.charCodeAt(i));
	}
	return hashValue;
}

function RabinKarp(inputText, pattern){
	if (inputText.length < pattern.length) { console.log("no result"); return;}
	var hPattern = hash(pattern);
	var hs = hash(inputText.substring(0, pattern.length));
	for(var i = 1; i < (inputText.length - pattern.length + 1); i++){
		if (hs == hPattern){
			if (inputText.substring(i, i + pattern.length) == pattern){
				console.log(i);
				return;
			}
		}
		hs = hash(inputText.substring(i+1, i + pattern.length + 1));
	}
	console.log("no result");
}

RabinKarp("Hello World!", "llo");
