const enlace = document.createElement('A');

//Agregandole el texto
enlace.textContent = 'Nuevo enalce';

//Agregandole el href
enlace.href = '/nuevo-enalce';

console.log(enlace);

//Seleccionar navegacion
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);

//Crear un card de forma dinámica
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = "Texto alternativo";

//Crear card
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);

//Asignar info
card.appendChild(info);

//Insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards')

contenedor.insertBefore(card, contenedor.children[0]);