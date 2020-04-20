function countBs(value) {
	var cont;
	var x;
	var contador;
	contador = 0;
	cont = value.length;
	for (var i = 0; i < cont; i++) {
	   x = value[i];
	   if(x == "B"){
		   contador = contador + 1;
	   }
	}
	return contador;
}
function countChar(a,b) {
	var cont;
	var x;
	var contador;
	contador = 0;
	cont = a.length;
	for (var i = 0; i < cont; i++) {
	   x = a[i];
	   if(x == b){
		   contador = contador + 1;
	   }
	}
	return contador;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));


