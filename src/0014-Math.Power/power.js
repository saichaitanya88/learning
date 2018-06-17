//implement power without pow

function pow(base, exp){
	var oExp = exp;
	if (exp < 1) return console.log("pow(" + base + "," + oExp + ") is : " + 1);
	if (base == 0) return console.log("pow(" + base + "," + oExp + ") is : " + 0);
	var result = 1 * base; exp--;
	while(exp){
		result = result * base;
		exp--;
	}
	console.log("pow(" + base + "," + oExp + ") is : " + result);
}

pow(2,2);
pow(2,7)
pow(2,1)
pow(2,-1)
pow(20,2)
pow(5,5)
pow(3,4)
pow(1,4)
pow(-13,4)
pow(0,4)
pow(100,4)
