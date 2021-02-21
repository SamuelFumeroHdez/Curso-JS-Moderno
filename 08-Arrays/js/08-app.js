const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

/*const nombre = producto.nombre;
console.log(nombre);*/

//Destructuring de objetos
const { nombre } = producto;
console.log(nombre);

//Desctructuring en arrays
const numeros = [10, 20, 30, 40, 50];

const [, , tercero] = numeros; //A cada valor separado por coma, se le asigna el valor del indice del array que le corresponde
console.log(tercero);

const [, , ...sobrante] = numeros //Se copia todo el array que falta por recorrer
console.log(sobrante);