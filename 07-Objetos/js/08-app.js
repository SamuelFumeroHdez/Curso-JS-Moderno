"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); //No permitir que se modifique un objeto

/*producto.disponible = false;
producto.imagen = "imagen.jpg";

console.log(producto);*/

console.log(Object.isFrozen(producto));