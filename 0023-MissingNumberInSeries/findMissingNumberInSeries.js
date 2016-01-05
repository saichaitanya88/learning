//Find the missing number in a billion number list
// Assumption - set starts with 0

var set = [];
var rand = Math.floor(Math.random() * 1000) / 1;
for (var i = 0; i < 1000; i++) {
    //skip one number randomly
    if (i == rand) continue;
    set.push(i);
}
console.log("rand: " + rand);

var sum = 0;
var start = set[0];
for (var i = 0; i < set.length; i++) {
    sum += set[i];
}

// N * (N + 1) / 2
var total = set.length * (set.length + 1) / 2; 
var missingNumber = total - sum;
