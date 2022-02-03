window.onload = inicio;

let temporizadorCreaFila= -1;
let contaNumId=0;

function inicio() {
	console.log("inicio");
	document.getElementById("tablaDatos").onclick=otraFila;
	document.getElementById("automatico").onclick=arrancaAutomatico;
	document.getElementById("parar").onclick=paraAutomatico;
	document.getElementById("borrar").onclick=borraAutomatico;
}

function otraFila() {
	let cueTab =document.getElementById("cuerpoTabla");

	let fila= document.createElement("tr");

	let celda0= document.createElement("td");
	let celda1= document.createElement("td");
	let celda2= document.createElement("td");
	let celda3= document.createElement("td");

	celda0.innerHTML =contaNumId;
	celda1.innerHTML ="juan";
	celda2.innerHTML ="garcia";
	celda3.innerHTML ="juan.garcia@gmail.com";


	fila.appendChild(celda0)
	fila.appendChild(celda1);
	fila.appendChild(celda2);
	fila.appendChild(celda3);

	cueTab.appendChild(fila);
	contaNumId++;

}
function arrancaAutomatico(){
	if(temporizadorCreaFila == -1){
		temporizadorCreaFila = setInterval(otraFila,1000);
	}
}

function paraAutomatico(){
	clearInterval(temporizadorCreaFila);
	temporizadorCreaFila =-1;
}

function borraAutomatico(){

	if(temporizadorCreaFila !=-1){
		clearInterval(temporizadorCreaFila);
	}

	let cueTab =document.getElementById("cuerpoTabla");
	let numElem= cueTab.childNodes.length;
	let ultimoElem= numElem-1;

	cueTab.removeChild(cueTab.childNodes[ultimoElem]);
	if(ultimoElem!=0){
		setTimeout(borraAutomatico,1000);
	}
	

	/*let numElem=cueTab.childNodes.length;
	let ultimoElem numElem-1;
	cueTab.removeChild(cueTab.childNodes[ultimoElem]);*/
}