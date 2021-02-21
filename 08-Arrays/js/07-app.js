const carrito = [];

//Definir un producto
const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Movil",
    precio: 800
}

const producto4 = {
    nombre: "Movil 2",
    precio: 800
}

carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3)
console.table(carrito);




/*
//Eliminar ultimo elemento de un array
carrito.pop();
console.table(carrito);

//Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito)*/

carrito.splice(1, 1); //Eliminar elementos de cualquier indice - primer argumento: la posicion donde empieza a borrar, segundo argumento: numero de elementos a borrar
console.table(carrito);