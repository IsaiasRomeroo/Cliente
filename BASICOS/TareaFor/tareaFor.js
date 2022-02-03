let elemDato;
let elemMensaje;
let listaNumeros;

window.onload = function() {
	elemDato = document.getElementById("dato");
	elemMensaje = document.getElementById("mensaje");
}


function ordenado() {
	let datos = elemDato.value;
	let ordenados = true;

	elemMensaje.innerHTML = "";


	if(validarDatos(datos)){
		for (var i = 0; i < listaNumeros.length-1; i++) {
			if(listaNumeros[i]>listaNumeros[i+1]){
				ordenados = false;
			}
		}
		if(ordenados){
			elemMensaje.innerHTML = "Estan ordenados";
		}else{
			elemMensaje.innerHTML = "No estan ordenados";
		}
	}
}

function negativos(){
	let datos = elemDato.value.trim();
	let ordenados = true;
	let negativos = 0;

	elemMensaje.innerHTML = "";

	if(validarDatos(datos)){
		for (var i = 0; i < listaNumeros.length; i++) {
			if(listaNumeros[i] < 0){
				negativos++;
			}
			 elemMensaje.innerHTML = "El numero de negativos ha sido: "+negativos;
		}
	}
}

function paresImpares(){
	let datos = elemDato.value.trim();
	let ordenados = true;
	let par = 0;
	let impar = 0;

	elemMensaje.innerHTML = "";

	if(validarDatos(datos)){
		for (var i = 0; i < listaNumeros.length; i++) {
			if(listaNumeros[i] % 2 == 0){
				par++;
			}else{
				impar++;
			}
		}
		elemMensaje.innerHTML = "El numero de pares ha sido: "+par+" y de los impares: "+impar;
	}
}

function primo(){
	let datos = elemDato.value.trim();
	let ordenados = true;
	let esprimo = true;

	elemMensaje.innerHTML = "";

	if(validarDatos(datos)){
		for (var i = 2; i < listaNumeros[0]; i++) {
			if (listaNumeros[0]%i==0) {
				esprimo = false;
			}
		}
		if(esprimo){
			elemMensaje.innerHTML = "Es primo";
		}else{
			elemMensaje.innerHTML = "No es primo";
		}
	}
}


function validarDatos(ln) {

	if(ln != ""){

	 	listaNumeros = ln.split(' ');

	 	for (var i = 0; i < listaNumeros.length; i++) {
	 		if(isNaN(listaNumeros[i])){
	 			elemMensaje.innerHTML = "Uno o mas de los valores no es un número entero";
	 			return false;
	 		}
	 	}

	}else{
		elemMensaje.innerHTML = "No has introducido datos";
		return false;
	}
	return true;
}