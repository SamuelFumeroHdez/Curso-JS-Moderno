//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCurso = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListener();

function cargarEventListener() {
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCurso.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vacía todo el carrito
    vaciarCarritoBtn.addEventListener('click', vaciaCarrito);

    //Recargar página
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    })
}


//Funciones
function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccioando = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccioando);
    }
}

//Elimina un curso del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoID = e.target.getAttribute('data-id');

        //Elimina del arreglo de artoculosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoID);
        console.log(articulosCarrito);
        carritoHTML(); //Iterar sobre el carrito y mostrar su HTML
    }
}

//Vaciar carrito
function vaciaCarrito() {
    articulosCarrito = [];
    carritoHTML();
}

//Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio .u-pull-right').textContent,
        id: curso.querySelector('a').getAttribute('data-id'), //Accede al atributo especifico de un elemento del html
        cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        //Actualizamos cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    } else {
        //Agregamos el curso al carrito
        articulosCarrito = [...articulosCarrito, infoCurso]; //agregar al carrito con spread operator
    }

    carritoHTML();
}

//Muestra el carrito de compras en el HTML
function carritoHTML() {

    //Limpiar el HTML
    limpiarHTML();
    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
        const { imagen, nombre, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100"/>
            </td>
            <td>
                ${nombre}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href"#" class="borrar-curso" data-id="${id}" > x </a>
            </td>
        `;
        //Agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    //Agregar el carrito de compras al storage
    sincronizarStorage();

}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//Eliminar los cursos del tbody
function limpiarHTML() {
    //Forma lenta
    //contenedorCarrito.innerHTML = '';

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}