Convert HEX to an integer - HEX2INT
//for each character in the hex string- add the hex value * 16^length-location
hex_hash = new Object();
hex_hash['0'] = 0;hex_hash['1'] = 1;
hex_hash['2'] = 2;hex_hash['3'] = 3;
hex_hash['4'] = 4;hex_hash['5'] = 5;
hex_hash['6'] = 6;hex_hash['7'] = 7;
hex_hash['8'] = 8;hex_hash['9'] = 9;
hex_hash['A'] = 10;hex_hash['B'] = 11;
hex_hash['C'] = 12;hex_hash['D'] = 13;
hex_hash['E'] = 14;hex_hash['F'] = 15;

function h2i(h){
	sum = 0;
	for(it = h.length; it > 0; it --){
		console.debug(h.length - it)
		console.debug(hex_hash[h[it-1]])
		console.debug(Math.pow((16),(h.length - it)))
		sum += hex_hash[h[it-1]] * (Math.pow((16),(h.length - it)))
	}
	return sum;
}


Convert an integer to HEX - INT2HEX (http://www.mathpath.org/concepts/Num/conv.htm)
/*
sum = div_val * base + remainder
147 = 29 * 5 + 2
29 = 5 * 5 + 4
5 = 1 * 5 + 0
1 = 0 * 5 + 1
*/
var base = 2;
var sum = 8;
var remainder = "";
var result = "";
var div_val = sum;
var arr = new Array();
while (div_val > 0){
	div_val = ~~(sum / base);
	remainder = sum % base;
	result = remainder + ' ' + result;
	sum = div_val;
}

Convert string to an integer - STR2INT
each char should be within ascii 48-57. then the ascii numbers correspond to 0 to 9 in decimal

Convert an integer to base n (base 2, 8, 16, 26, etc.)
same as HEX - INT2HEX, additional conversion should be made for base greater than 10
