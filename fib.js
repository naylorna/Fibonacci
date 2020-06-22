var fibList = [];

function fib() {
	var index = document.getElementById("num").value;
	var a=1, b=0, temp;
	while (index >= 0){
		fibList.push(b);
		temp = a;
		a = a + b;
		b = temp;
		index--;
	}
	var x = fibList.toString();
        document.getElementById("result").innerHTML = x;
}
	
