function oculta() {
	console.log("oculta o muestra el 'elemento.'");

	let parraf = document.getElementById('parrafo');

	let bot = document.getElementById('boton');

	if(parraf.style.visibility=="hidden"){
		parraf.style.visibility="visible";
		bot.innerHTML="Oculta";
	}else{
		parraf.style.visibility="hidden";
		bot.innerHTML="Muestra";
	}
}

function arrastra() {
	console.log("activa o desactiva el drag de un 'elemento.'");

	
	let parraf = document.getElementById('parrafo');

	console.log(parraf.draggable);

	if (parraf.draggable) {
		parraf.draggable=false;
	}else{
		parraf.draggable=true;
	}
}