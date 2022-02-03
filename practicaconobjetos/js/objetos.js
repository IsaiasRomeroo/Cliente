
let cochesArray = new Array();

function añadir(){
		let coche = {};

		coche.marca = document.getElementById("marca").value;
		coche.modelo = document.getElementById("modelo").value;
		coche.tipo = document.getElementById("tipo").value;

		cochesArray.push(coche);

		console.log(cochesArray);
			//se recupera del DOM el elemento ol con el id  listaCoches

		let elemListaCoches = document.getElementById("listaCoches");
			//se crea el elemneto " li"

		let elemLi = document.createElement("li");

		elemLi.onclick=borrate;

			// se añade al elemento un texto con marca,modelo,tipo del coche

		elemLi.innerHTML = coche.marca + "," + coche.modelo + "," + coche.tipo;
			// se añade el "li" al "ol"

		elemListaCoches.appendChild(elemLi);

}
function borrate(evento){
	//console.log(evento);
	//let elemListaCoches = document.getElementById("listaCoches");																									
	//elemListaCoches.removeChild(evento.target);

	evento.target.parentNode.removeChild(evento.target);
}
