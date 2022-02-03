function comprobar() {
	/*
	let dato = document.getElementById("entrada");

	let respuesta = true;

	if (dato.value==""){
		respuesta = false;
		dato.style.backgroundColor = "red";
	}


	return respuesta;
	*/
	

	
	let respuesta = true;
	let nombre = document.getElementById("nombre");
	let apellido = document.getElementById("apellido");
	let edad = document.getElementById("edad");

		if (nombre.value.trim()=="") {

            respuesta = false;
			nombre.value="";
			nombre.placeholder="dato obligatorio";
			nombre.style.borderColor= "red";
		
		}

		if (apellido.value.trim()=="") {
			respuesta = false;
			apellido.value="";
			apellido.placeholder="dato obligatorio";
			apellido.style.borderColor= "red";
		
		
		}

		if (edad.value.trim()=="") {
			respuesta = false;
			edad.value="";
			edad.placeholder="dato obligatorio";
			edad.style.borderColor= "red";
		
		
		}



	for (var i = 0; i < nombre.value.length; i++) {
		if(((nombre.value[i] >= "a") && (nombre.value[i] <= "z")) ||((nombre.value[i] >= "A") && (nombre.value[i] <= "Z"))){
			respuesta = true;
		}else{
			respuesta = false;
			nombre.value ="";
			nombre.placeholder="Dato Obligatorio";
			nombre.style.borderColor="red";
		}
	}

	for (var i = 0; i < apellido.value.length; i++) {
		if(((apellido.value[i] >= "a") && (apellido.value[i] <= "z")) || ((apellido.value[i] >= "A") && (apellido.value[i] <= "Z"))){
			respuesta = true;
		}else{
			respuesta = false;
			apellido.value ="";
			apellido.placeholder="Dato Obligatorio";
			apellido.style.borderColor="red";
		}
	}

	for (var i = 0; i < edad.value.length; i++) {
		if(edad.value[i] >= 0 || edad.value[i] <= 9){
			respuesta = true;
		}else{
			respuesta = false;
			edad.value ="";
			edad.placeholder="Dato Obligatorio";
			edad.style.borderColor="red";
		}
		
	}

	return respuesta;

}