const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const resultado = Object.assign(producto, medidas); //Unir dos obejetos
console.log(resultado);

const resultado2 = {...producto, ...medidas }; //Alternativa a la anterior, más usada
console.log(resultado2);