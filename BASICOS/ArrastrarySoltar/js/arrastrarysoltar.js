function onDragStart(event) {
	event.dataTransfer.setData('text', event.target.id);

	event.currentTarget.style.backgroundColor = 'red';
}

function onDragOver(event) {
	event.preventDefault();
}

function onDrop(evento) {
  const id = event.dataTransfer.getData('text');

  const elemQueArrastro = document.getElementById(id);

  const destino = evento.target;

  destino.appendChild(elemQueArrastro);

  elemQueArrastro.style.backgroundColor = 'blue';

  event.dataTransfer.clearData();
}