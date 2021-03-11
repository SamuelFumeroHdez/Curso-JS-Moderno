localStorage.setItem('nombre', 'Samuel');

const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 300
};

const prosuctoString = JSON.stringify(producto);
console.log(typeof prosuctoString);
localStorage.setItem('producto', prosuctoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);