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

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

let resultado;
resultado = [...carrito, producto]; //Forma declarativa de añadir elementos a un vector (copiar el vector y añadir nuevos elementos)
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];



console.table(resultado);