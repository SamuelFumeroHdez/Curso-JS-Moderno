const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Encontrar el índice de abril
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

//Encontrar índice de Tablet
const indice2 = carrito.findIndex(producto => producto.nombre === 'Tablet');
console.log(indice2);