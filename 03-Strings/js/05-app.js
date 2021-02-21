const producto = 'Monitor 20 pulgadas';

console.log(producto);
console.log(producto.replace('pulgadas', '"')); //Intercambiar fragmentos de strings

console.log(producto.slice(0, 10)); //Cortar strings

//Alternativa a slice
console.log(producto.substring(0, 10));

const usuario = "Samuel";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));