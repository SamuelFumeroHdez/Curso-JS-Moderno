const producto = '      Monitor 20 pulgadas        ';

console.log(producto);
console.log(producto.length);

//Eliminar del inicio
console.log(producto.trimStart());

//Eliminar espacio al final
console.log(producto.trimEnd());

//Eliminar espacios al inicio y final
console.log(producto.trimStart().trimEnd());

//Otra forma de eliminar espacios al inicio y final
console.log(producto.trim());