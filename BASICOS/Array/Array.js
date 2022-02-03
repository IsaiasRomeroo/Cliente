//array
const nombres = ["juan","ana","maria"];

nombres.push("isabel");

nombres[2]="jose";

for (var i = 0; i < nombres.length; i++) {
	//console.log(nombres[i]);
}

//for in (recorrer arrays y objetos)
for (let n in nombres){
	console.log(nombres[n]);
}

//objeto
const persona = {nombre:"alfredo",apellidos:"garcia",edad:27};

//console.log(persona.nombre);
//console.log(persona.apellidos);
//console.log(persona.edad);

for (let p in persona){
	console.log(persona[p]);
}

let x = 0;

if (x < 10){
	console.log("dentro del if");
}

if (x > 10){
	console.log("cond. cierta");
}else{
	console.log("cond. falsa");
}

if (x < 10){
	console.log("x es menor de 10");
}else if(x > 20){
	console.log("x es mayor de 20");
}else{
	console.log("x entre 11 y 19");
}

//dias
switch (new Date().getDay()){
	case 0:
		console.log("domingo");
		break;
	case 1:
		console.log("lunes");
		break;
	case 2:
		console.log("martes");
		break;
	case 3:
		console.log("miercoles");
		break;
	case 4:
		console.log("jueves");
		break;
	case 5:
		console.log("viernes");
		break;
	case 6:
		console.log("sabado");
		break;
	default:
		console.log("no e un dia loco");
		break;
}

//funciones
function suma(n1,n2) {
	let res = n1 + n2;

	return res;
}

console.log(suma(4,5));

let salida = suma(10,5);

console.log(salida);

function suma2(n1,n2) {
	let res = n1 + n2;

	console.log(res);
}

let conta = 0;
function () {
	// body...
}