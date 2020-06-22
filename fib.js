var fibList = [];

function fib() {
	var index = document.getElementById("num").value;
	var a=1, b=0, temp;
	while (index >= 0){
		temp = a;
		a = a + b;
		b = temp;
		index--;
	}
	fibList.push(b);
}

function print() {
	var x = fibList.toString();
	document.write(x);
}
