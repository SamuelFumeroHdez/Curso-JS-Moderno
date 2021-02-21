"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto); //Con seal se puede modificar objetos pero no agregar ni eliminar propiedades
producto.disponible = false

console.log(Object.isSealed(producto));