const producto = 'Monitor 20 pulgadas';

// .repeat se usa para repetir un string

const texto = ' en promoción'.repeat(3)

console.log(texto);
console.log(`${producto} ${texto} !!!`)

//Split, dividir un string

const actividad = "Estoy aprendiendo JavaScript moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, parender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo #JSModernoConJuan";
console.log(tweet.split("#"));