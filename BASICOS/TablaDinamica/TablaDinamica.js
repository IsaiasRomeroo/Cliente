function creaTabla() {

	//lectura de parametros
	let filas = document.getElementById("filas").value;
	let columnas = document.getElementById("columnas").value;
	let relleno = document.getElementById("relleno").value;
	
	let salida = "<table>";

	//alert("filas: " + filas + ", columnas: " + columnas + ", relleno: " + relleno);


	//crear elementos contruyendo una cadena de texto
	for (var i = 0; i < filas; i++) {
		salida = salida + "<tr>";
		for (var j = 0; j < columnas; j++) {
			salida = salida + "<td>" + relleno + "</td>";
		}
		salida = salida + "</tr>";
	}

	salida = salida + "</table>";

	document.getElementById("salTabla").innerHTML = salida;


	//crear elementos directamente
	let divST2 = document.getElementById("salTabla2");

	parrafo = document.createElement("p");

	divST2.appendChild(parrafo);

}

/*function rellenaParrafo() {
	if(parrafo !== undefined){
	
		parrafo.innerHTML = "En un lugar de la mancha";

		parrafo.style.color = "red";
	}
}
*/

	
