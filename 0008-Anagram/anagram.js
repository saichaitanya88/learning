//Decide if 2 strings are anagrams or not ?
function isAnagram(str1, str2){
	// case insensitive check will be performed
	var hash = {};
	for(var i = 0; i < str1.length; i++){
		var count = hash[str1[i].toLowerCase()]; if (!count) count = 0;
		hash[str1[i].toLowerCase()] = count + 1;
	}
	for(var i = 0; i < str2.length; i++){
		var count = hash[str2[i].toLowerCase()]; if (!count) count = 0;
		hash[str2[i].toLowerCase()] = count - 1;
	}
	var bAnagram = true;
	for(var k = 0; k < Object.keys(hash).length; k++){
		var key = Object.keys(hash)[k];
		if(hash[key] != 0){
			bAnagram = false;
			break;
		}
	}
	//	return (hashVerify == 0); // anagram if true
	var hashResult = (bAnagram) ? " is an anagram" : " is not an anagram";
	hashResult = str1 + " and " + str2 + hashResult;
	console.log(hashResult)
}

isAnagram('ARMY', 'mary');
isAnagram('SaI', 'IAS');
isAnagram('mystring', 'gymstrin');
isAnagram('yoyomama', 'oaoamymy');
isAnagram('mrrobot', 'tobrrmo');
isAnagram('remo', 'sub');
isAnagram('mystring', 'gymstrin');
isAnagram('remo', 'ARMY');
isAnagram('mary', 'sub');
