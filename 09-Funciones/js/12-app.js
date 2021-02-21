const carrito = [
    { nombre: 'Monitos 27 Pulgadas', precio: 500 },
    { nombre: 'Monitos 38 Pulgadas', precio: 600 },
    { nombre: 'Monitos 49 Pulgadas', precio: 700 },
    { nombre: 'Monitos 50 Pulgadas', precio: 800 },
    { nombre: 'Monitos 61 Pulgadas', precio: 900 },
    { nombre: 'Monitos 72 Pulgadas', precio: 1000 }
]

const nuevoArray = carrito.map(producto => `${producto.nombre} - Precio: ${producto.precio}`)

console.log(nuevoArray);