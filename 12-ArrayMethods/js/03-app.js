const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

/*Sumar precio de todo el carrito de compra*/

//Con un forEach
let total = 0;

carrito.forEach(producto => {
    total += producto.precio;
})
console.log(`Total a pagar: ${total} euros`)

//Con un reduce - El primer argumento es el acumulador, el segundo, el iterador y el tercero, el valor de entrada del acumulador
let resultado = carrito.reduce((suma, producto) => suma + producto.precio, 0);
console.log(resultado);