const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJSON = localStorage.getItem('producto');
const producto = JSON.parse(productoJSON);
console.log(producto);