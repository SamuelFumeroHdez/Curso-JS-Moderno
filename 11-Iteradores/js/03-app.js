//Fizz Buzz

let cadena;
for (let i = 1; i <= 100; i++) {
    console.log(i);
    cadena = '';
    if (i % 3 === 0) {
        cadena += 'Fizz ';
    }
    if (i % 5 === 0) {
        cadena += 'Buzz'
    }
    console.log(cadena);
}