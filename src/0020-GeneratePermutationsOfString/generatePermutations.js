var input = "abcd";

function merge(set, char) {
    var result = [];
    for (var i = 0; i < set.length; i++) {
        var len = set[i].length;
        for (var j = 0; j <= len; j++) {
            result.push(set[i].slice(0, j) + char + set[i].slice(j + Math.abs(0)));
        }
    }
    console.log(result);
    return result;
}

function generatePermutations(input) {
    var result = [];
    result.push(input[0]);
    for (var i = 1; i < input.length; i++) {
        result = merge(result, input[i]);
    }
    console.log("final: ")
    console.log(result);
}

generatePermutations(input)

var result = ["dcba", "cdba", "cbda", "cbad", "dbca", "bdca", "bcda", "bcad", "dbac", "bdac", "badc", "bacd", "dcab", "cdab", "cadb", "cabd", "dacb", "adcb", "acdb", "acbd", "dabc", "adbc", "abdc", "abcd"];
var resultCompare = ["abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "badc", "bacd", "bcda", "bcad", "bdca", "bdac", "cabd", "cadb", "cbad", "cbda", "cdab", "cdba", "dacb", "dabc", "dbca", "dbac", "dcba", "dcab"]
