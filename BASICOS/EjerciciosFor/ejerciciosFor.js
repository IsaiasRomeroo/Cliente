window.onload = inicio;


//funcion de inicio
function inicio() {
	
}
//fin inicio


//funcion para comprobar que el primer numero es el mayor
function primeroMayor() {
	let numeros = document.getElementsByClassName("numeros");
	const listaNumeros = [];
	let salida = "";

	//guardar los valores en el array listaNumeros
	for (var i = 0; i < numeros.length; i++) {
		listaNumeros.push(numeros[i].value.trim());
	}

	if (validarInputs(listaNumeros)) {

		let correcto = true;

		//comprobar que el primer numero es el mayor
		for (var i = 1; i < listaNumeros.length; i++) {
			if(Number.parseInt(listaNumeros[0]) < Number.parseInt(listaNumeros[i])){
				correcto=false;
			}
		}

		if(correcto){
			salida = "<ul>";

			for (var i = 0; i < listaNumeros.length; i++) {

				salida += "<li>-"+listaNumeros[i]+"-</li>";
			}

			salida += "</ul>";

			document.getElementById("contenedor").innerHTML = salida;
		}else{
			document.getElementById("contenedor").innerHTML = "Error el primer numero no es el mayor";
		}
	}else{
		document.getElementById("contenedor").innerHTML = "Error en los numeros";
	}
}
//fin de primeroMayor


//funcion para validar que son 5 numeros
function validarInputs(ln) {
	let respuesta = true;

	for (var i = 0; i < ln.length; i++) {
		//isNaN -> is Not a Number
		if (isNaN(ln[i])||(ln[i]=="")) {
			respuesta = false;
		}
	}

	return respuesta;
}
//fin de validarInputs

//funcion que comprueba que estan ordenados
function ordenados() {
	let numeros = document.getElementsByClassName("numeros");
	const listaNumeros = [];
	let salida = "";

	//guardar los valores en el array listaNumeros
	for (var i = 0; i < numeros.length; i++) {
		listaNumeros.push(numeros[i].value.trim());
	}

	if (validarInputs(listaNumeros)) {

		let correcto = true;

		//comprobar que el primer numero es el mayor
		for (var i = 1; i < listaNumeros.length; i++) {
			if(Number.parseInt(listaNumeros[i-1]) > Number.parseInt(listaNumeros[i])){
				correcto=false;
			}
		}

		if(correcto){
			salida = "<ul>";

			for (var i = 0; i < listaNumeros.length; i++) {

				salida += "<li>-"+listaNumeros[i]+"-</li>";
			}

			salida += "</ul>";

			document.getElementById("contenedor").innerHTML = salida;
		}else{
			document.getElementById("contenedor").innerHTML = "No estan ordenados de menor a mayor";
		}
	}else{
		document.getElementById("contenedor").innerHTML = "Error en los numeros";
	}
}
//fin de ordenados