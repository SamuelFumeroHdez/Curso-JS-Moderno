const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

/*
console.log(encabezado.innerText); //si en el css visibility: hidden; NO lo va a encontrar
console.log(encabezado.textContent); //si en el css visibility: hidden; SI lo va a encontrar
console.log(encabezado.innerHTML); // se trae el html

document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading';
*/

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';